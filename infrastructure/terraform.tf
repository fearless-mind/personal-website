
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "185284124654-personal-website-tf-state"
    region = "eu-west-1"
    key    = "state"
  }
}
