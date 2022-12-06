import * as fs from "fs";
const input = fs.readFileSync("./advent3/a/puzzle-input", "utf-8").split("\n");
const groups = [];
for (let i = 0; i < input.length; i += 3) {
  groups.push(
    input[i]
      .split("")
      .filter(
        (item) =>
          input[i + 1].split("").includes(item) &&
          input[i + 2].split("").includes(item)
      )
  );
}
const ans = groups
  .map((group) => group[0])
  .map((item) => {
    if (item.toLowerCase() == item) return item[0].charCodeAt(0) - 96;
    else return item[0].charCodeAt(0) - 38;
  })
  .reduce((acc, curr) => acc + curr);

console.log(ans);
