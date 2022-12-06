#include <iostream>
#include <fstream>
using namespace std;

int main()
{
  ifstream file("puzzle-input");
  string line;
  int max = 0;
  int current = 0;
  int second = 0;
  int third = 0;
  while (getline(file, line))
  {
    if (line == "")
    {
      if (current > max)
      {
        third = second;
        second = max;
        max = current;
      }
      else if (current > second && current <= max)
      {
        third = second;
        second = current;
      }
      else if (current > third && current <= second)
      {
        third = current;
      }
      current = 0;
      continue;
    }
    current += stoi(line);
  }
  int sum = max + second + third;
  cout << sum;
  return 0;
}
