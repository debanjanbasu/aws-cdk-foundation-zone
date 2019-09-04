import { Stack, App, StackProps } from "@aws-cdk/core";
import { FoundationZoneVPC } from "../foundation-zone-vpc";

export class WordpressRDS extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);
    this.templateOptions.description =
      "This is the stack for creation of a simple MySQL Multi-AZ RDS";

    // Foundational RDS
  }
}
