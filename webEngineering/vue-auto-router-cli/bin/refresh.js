import fs from "fs";
import handlebas from "handlebars";
export default async function refresh() {
  // 读取文件列表
  const list = fs
    .readdirSync("./src/views")
    .filter((v) => v !== "HomeView.vue")
    .map((v) => ({ name: v.replace(".vue", "").toLowerCase(), file: v }));
  // 生成代码
  compile({ list }, "./src/router/index.js", "./template/router.js.hbs");
  compile({ list }, "./src/App.vue", "./template/App.vue.hbs");
}
function compile(meta, filePath, templatePath) {
  if (fs.existsSync(templatePath)) {
    // 判断模版
    const content = fs.readFileSync(templatePath).toString();
    const result = handlebas.compile(content)(meta);
    fs.writeFileSync(filePath, result);
    console.log(`🚀 生成代码${filePath}`);
  }
}
