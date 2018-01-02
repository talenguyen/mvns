#!/usr/bin/env node

const program = require("commander");
const maven = require("./maven");

program
  .version("1.0.0")
  .description("Maven Repository Search")
  .arguments("<query>")
  .action(query => {
    maven.search(query);
  });

program.parse(process.argv);
