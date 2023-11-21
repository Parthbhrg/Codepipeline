import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class MyCdkProjectStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket
    new s3.Bucket(this, 'MyCdkBucket', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // NOTE: Don't use this in production
    });
  }
}
