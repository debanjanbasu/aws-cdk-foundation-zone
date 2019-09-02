import cdk = require("@aws-cdk/core");

export class FoundationZoneStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    console.log("Hello World");
    
  }
}
