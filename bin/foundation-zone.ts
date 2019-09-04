#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { FoundationZoneVPC } from "../lib/foundation-zone-vpc";
import { AutoScalingFargateService } from "../lib/ecs-cluster/auto-scaling-fargate-service";

const ENV = {
  region: "ap-southeast-2",
  account: "069005529580"
};

class MyApp extends App {
  constructor() {
    super();
    const vpcStack = new FoundationZoneVPC(this, "FoundationZoneVPC", {
      env: ENV
    });
    const ecsStack = new AutoScalingFargateService(
      this,
      "AutoScalingFargateService",
      vpcStack.vpc,
      {
        env: ENV
      }
    );
    ecsStack.addDependency(vpcStack, "ECS needs a vpc to launch into");
  }
}

new MyApp().synth();
