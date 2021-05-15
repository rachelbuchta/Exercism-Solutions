//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//input: array of numbers
//output: 

export class HighScores {
  constructor(input) {
    this.input = input
  }

  get scores() {
    return this.input
  }

  get latest() {
    const latest = this.input.pop()
    return latest
  }

  get personalBest() {
    const best = this.input.sort()
    return best.shift()
  }

  get personalTopThree() {
    throw new Error('Remove this statement and implement this function');
  }
}
