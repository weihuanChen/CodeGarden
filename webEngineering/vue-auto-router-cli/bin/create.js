import clear from "clear";
import figlet from "figlet";
import chalk from "chalk";
import { promisify } from "util";
import down from "download-git-repo";
import ora from "ora";
import { spawn } from "child_process";
import open from "open";
const log = (content) => console.log(chalk.green(content));
export default async function create(name) {
  // 打印欢迎界面
  clear();
  const banner = figlet.textSync("Vue Auto");
  log(banner);

  // 克隆脚手架
  log(`🚀 创建项目: ${name}`);
  await clone(`github.com/weihuanChen/vue-template`, name);

  // 下载依赖 -> 命令
  // 回调spawn
  // 日志流对接
  await asyncSpawn("npm", ["install"], { cwd: `./${name}` });
  log(`
    👌 安装完成
    To get Start:
    =========================
    cd ${name}
    npm run serve
    =========================
  `);
  open("http://localhost:8080");
  await asyncSpawn("npm", ["run", "serve"], { cwd: `./${name}` });
}
async function clone(repo, desc) {
  const d = promisify(down);

  const process = ora(`🚗 下载......
  ${repo}`);
  process.start();
  await d(repo, desc);  
  process.succeed(); 
}
async function asyncSpawn(...args) {
  return new Promise((resolve) => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on("close", () => {
      resolve();
    });
  });
}
