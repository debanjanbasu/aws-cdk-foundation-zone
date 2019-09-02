import { Stack, App, StackProps } from "@aws-cdk/core";

export class FoundationZoneStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    console.log("Hello World");
  }
}
