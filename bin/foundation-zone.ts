#!/usr/bin/env node
import cdk = require("@aws-cdk/core");
import { FoundationZoneStack } from "../lib/foundation-zone-stack";

const app = new cdk.App();
new FoundationZoneStack(app, "FoundationZoneStack");
