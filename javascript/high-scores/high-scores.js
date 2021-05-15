//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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
    const topThree = this.input
      .sort((a,b) => b - a)
      .slice(0, 3)
    return topThree
  }
}
