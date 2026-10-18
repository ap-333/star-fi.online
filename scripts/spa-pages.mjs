// GitHub Pages has no SPA rewrites: emit a <route>.html per route so deep links return 200.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";

const html = readFileSync("dist/index.html", "utf8");
const routes = readdirSync("src/routes")
  .filter((f) => f.endsWith(".tsx") && !f.startsWith("__") && f !== "index.tsx")
  .map((f) => f.replace(/\.tsx$/, ""));

for (const route of routes) {
  writeFileSync(`dist/${route}.html`, html);
}
writeFileSync("dist/404.html", html);
console.log(`spa-pages: wrote ${routes.length} route pages + 404.html`);
