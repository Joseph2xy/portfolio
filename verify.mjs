import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const output = new URL("./dist/", import.meta.url);
const html = readFileSync(new URL("index.html", output), "utf8");
let checks = 0;
for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (href.startsWith("#")) {
    if (!html.includes(`id="${href.slice(1)}"`))
      throw new Error(`Missing anchor: ${href}`);
  } else if (href.startsWith("/")) {
    if (!existsSync(new URL(`.${href}`, output)))
      throw new Error(`Missing built asset: ${href}`);
  } else if (!/^(https:|mailto:)/.test(href)) {
    throw new Error(`Unexpected link: ${href}`);
  }
  checks++;
}
for (const id of ["hello", "work", "projects", "contact"]) {
  if (!html.includes(`id="${id}"`)) throw new Error(`Missing section: ${id}`);
}
if (!/work in progress/i.test(html))
  throw new Error("Missing project maturity disclosure");
if (!html.includes("Skip to content"))
  throw new Error("Missing skip navigation");
if (html.includes("+216"))
  throw new Error("Private telephone number unexpectedly included");
console.log(
  `${checks} built links/assets checked in ${fileURLToPath(output)}. Core sections and project status verified.`,
);
