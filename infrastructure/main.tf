provider "aws" {
  region  = "eu-west-1"
  profile = "kiko-dev"
}

data "aws_caller_identity" "this" {

}

module "frontend" {
  source     = "./frontend"
  account_id = data.aws_caller_identity.this.account_id
  name       = "personal-website-frontend"
}
