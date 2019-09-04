#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { FoundationZoneVPC } from "../lib/foundation-zone-vpc";
import { WordpressRDS } from "../lib/wordpress-db/wordpress-rds";

const ENV = {
  region: "ap-southeast-2",
  account: "069005529580"
};

class MyApp extends App {
  constructor() {
    super();
    new FoundationZoneVPC(this, "FoundationZoneVPC", {
      env: ENV
    });
    new WordpressRDS(this, "WordpressRDS", {
      env: ENV
    });
  }
}

new MyApp().synth();
