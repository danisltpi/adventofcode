import * as fs from "fs";

const input = fs.readFileSync("./advent3/a/puzzle-input", "utf-8").split("\n");

let ans = input.map((line) => {
  return line
    .slice(0, line.length / 2)
    .split("")
    .filter((item) => line.slice(line.length / 2).includes(item))
    .map((item) => {
      if (item.toLowerCase() == item) return item[0].charCodeAt(0) - 96;
      else return item[0].charCodeAt(0) - 38;
    });
});
ans = ans.map((item) => item[0]).reduce((acc, curr) => acc + curr);

console.log(ans);
