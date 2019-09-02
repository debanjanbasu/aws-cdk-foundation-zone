#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { FoundationZoneStack } from "../lib/foundation-zone-stack";

const app = new App();

new FoundationZoneStack(app, "FoundationZoneStack");
