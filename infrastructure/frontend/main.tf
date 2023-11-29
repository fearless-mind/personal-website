
locals {
  origin_id   = var.name
  bucket      = "${var.account_id}-${var.name}"
  domain_name = "fearless-mind.net"
}

data "aws_route53_zone" "this" {
  name = local.domain_name
}

resource "aws_route53_record" "ipv4" {
  name    = "www.fearless-mind.net"
  type    = "A"
  zone_id = data.aws_route53_zone.this.id

  alias {
    zone_id                = aws_cloudfront_distribution.this.hosted_zone_id
    name                   = aws_cloudfront_distribution.this.domain_name
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "ipv6" {
  name    = "www.fearless-mind.net"
  type    = "AAAA"
  zone_id = data.aws_route53_zone.this.id

  alias {
    zone_id                = aws_cloudfront_distribution.this.hosted_zone_id
    name                   = aws_cloudfront_distribution.this.domain_name
    evaluate_target_health = false
  }
}

resource "aws_s3_bucket" "origin" {
  bucket = local.bucket
}

resource "aws_cloudfront_origin_access_control" "this" {
  name                              = local.bucket
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "this" {
  tags = {
    product = "personal-website"
  }

  aliases = [
    "www.fearless-mind.net"
  ]

  origin {
    domain_name              = aws_s3_bucket.origin.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.this.id
    origin_id                = local.origin_id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  custom_error_response {
    error_code         = 403
    response_page_path = "/404.html"
    response_code      = 404
  }

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn            = var.acm_certificate_arn
    ssl_support_method             = "sni-only"
    cloudfront_default_certificate = false
  }

}

data "aws_iam_policy_document" "cloudfront_access" {
  statement {
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.origin.arn}/*"]

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.this.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "cloudfront_access" {
  bucket = aws_s3_bucket.origin.bucket
  policy = data.aws_iam_policy_document.cloudfront_access.json
}

output "s3_bucket_arn" {
  value = aws_s3_bucket.origin.arn
}
