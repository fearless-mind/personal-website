provider "aws" {
  region  = "eu-west-1"
  profile = "kiko-dev"
}

data "aws_caller_identity" "this" {}

locals {
  github_org            = "fearless-mind"
  personal_website_repo = "personal-website"
}

module "frontend" {
  source     = "./frontend"
  account_id = data.aws_caller_identity.this.account_id
  name       = local.personal_website_repo
}

data "aws_iam_policy_document" "deploy_s3" {
  statement {
    sid    = "Objects"
    effect = "Allow"

    actions = [
      "s3:DeleteObject",
      "s3:GetObject",
      "s3:PutObject"
    ]

    resources = [
      "${module.frontend.s3_bucket_arn}/*"
    ]
  }

  statement {
    sid       = "Bucket"
    effect    = "Allow"
    actions   = ["s3:ListBucket"]
    resources = [module.frontend.s3_bucket_arn]
  }
}

resource "aws_iam_policy" "github_actions_s3" {
  name   = "github-actions-s3-policy"
  policy = data.aws_iam_policy_document.deploy_s3.json
}

module "github_oidc" {
  source  = "terraform-module/github-oidc-provider/aws"
  version = "~> 1"

  create_oidc_provider = true
  create_oidc_role     = true

  repositories              = ["${local.github_org}/${local.personal_website_repo}"]
  oidc_role_attach_policies = [aws_iam_policy.github_actions_s3.arn]
}

