import { Stack, App, StackProps } from "@aws-cdk/core";
import { Vpc } from "@aws-cdk/aws-ec2";

export class FoundationZoneVPC extends Stack {
  vpc: Vpc;
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);
    this.templateOptions.description =
      "This is the stack for creation of a foundational VPC";

    // Foundational VPC
    this.vpc = new Vpc(this, "CustomFoundationalVPC", {
      cidr: "10.10.0.0/16",
      enableDnsHostnames: true,
      enableDnsSupport: true
    });
  }
}
