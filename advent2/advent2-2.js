import * as fs from "fs";
const lost = 0;
const draw = 3;
const won = 6;

const input = fs.readFileSync("./advent2/puzzle-input", "utf-8");
const lines = input.split("\n");
let score = 0;

for (const line of lines) {
  let l = line[0];
  let r = line[2];
  let current = 0;
  // player wins
  let chosen = 0;
  switch (r) {
    // lose
    case "X":
      if (l == "A") {
        chosen = 3;
      } else if (l == "B") {
        chosen = 1;
      } else {
        chosen = 2;
      }
      current += chosen + lost;
      break;
    // draw
    case "Y":
      if (l == "A") {
        chosen = 1;
      } else if (l == "B") {
        chosen = 2;
      } else {
        chosen = 3;
      }
      current += chosen + draw;
      break;
    case "Z":
      if (l == "A") {
        chosen = 2;
      } else if (l == "B") {
        chosen = 3;
      } else {
        chosen = 1;
      }
      current += chosen + won;
      break;
  }
  score += current;
}
console.log(score);
