import { execSync } from "node:child_process";

const testOut = execSync("npm test --silent 2>&1", { encoding: "utf8" });
const passed = (testOut.match(/\d+ passed/g) || ["0 passed"])[0];

console.log(
  JSON.stringify({
    components: 4,
    sampleSites: 3,
    stack: "React + TypeScript + Vite",
    tests: passed,
  })
);
