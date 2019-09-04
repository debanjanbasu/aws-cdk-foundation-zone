import { Cluster, ContainerImage } from "@aws-cdk/aws-ecs";
import { LoadBalancedFargateService } from "@aws-cdk/aws-ecs-patterns";
import { Vpc } from "@aws-cdk/aws-ec2";
import { Stack, App, StackProps, Duration, CfnOutput } from "@aws-cdk/core";

export class AutoScalingFargateService extends Stack {
  constructor(scope: App, id: string, vpc: Vpc, props?: StackProps) {
    super(scope, id, props);

    // Create a cluster
    const cluster = new Cluster(this, "fargate-service-autoscaling", {
      vpc
    });

    // Create Fargate Service
    const fargateService = new LoadBalancedFargateService(
      this,
      "sample-php-app",
      {
        cluster,
        image: ContainerImage.fromRegistry("amazon/amazon-ecs-sample")
      }
    );

    // Setup AutoScaling policy
    const scaling = fargateService.service.autoScaleTaskCount({
      maxCapacity: 3
    });

    scaling.scaleOnCpuUtilization("CpuScaling", {
      targetUtilizationPercent: 50,
      scaleInCooldown: Duration.seconds(60),
      scaleOutCooldown: Duration.seconds(60)
    });

    new CfnOutput(this, "LoadBalancerDNS", {
      value: fargateService.loadBalancer.loadBalancerDnsName
    });
  }
}
