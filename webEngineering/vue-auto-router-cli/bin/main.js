#!/usr/bin/env node
import { program } from "commander";
import config from "../package.json" assert { type: "json" };
import create from "./create.js";
import refresh from "./refresh.js";
program.version(config.version);
program
  .command("create <name>")
  .description("🌟create a new project powered by vue-auto")
  .action(create);

program.command("refresh <name>").description("🌟 Gen Router").action(refresh);
program.parse(process.argv); //process是当前脚本的主进程，argv是当前进程的执行参数
