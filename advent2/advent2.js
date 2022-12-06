import * as fs from "fs";
const lost = 0;
const draw = 3;
const won = 6;
const rock = 1;
const paper = 2;
const scissors = 3;

const input = fs.readFileSync("./advent2/puzzle-input", "utf-8");
const lines = input.split("\n");
let score = 0;

for (const line of lines) {
  let l = line[0];
  let r = line[2];
  let current = 0;
  // player wins
  switch (r) {
    case "X":
      current += rock;
      break;
    case "Y":
      current += paper;
      break;
    case "Z":
      current += scissors;
      break;
  }
  if (
    (l == "A" && r == "Y") ||
    (l == "B" && r == "Z") ||
    (l == "C" && r == "X")
  ) {
    current += won;
  } else if (
    (l == "A" && r == "X") ||
    (l == "B" && r == "Y") ||
    (l == "C" && r == "Z")
  ) {
    current += draw;
  } else {
    current += lost;
  }
  score += current;
}
console.log(score);
