class GreedyAlgorithm {

  constructor(baseElements) {

    this.steps = 0;
    this.elements = baseElements;
    this
      .elements
      .sort((a, b) => {
        return a - b;
      });
  }

  resolve(number) {
    let currentValue = 0,
      remaining = number,
      check = 1,
      selectedValues = [];

    while (currentValue !== remaining) {

      let value = this.elements[this.elements.length - check];

      if (remaining < 1) {
        break;
      }

      if (value <= remaining) {
        if (!selectedValues[value]) {
          selectedValues[value] = 0;
        }
        selectedValues[value] += 1;
        currentValue += value;
        remaining -= value;
      } else {
        check++;
      }
    }
    return selectedValues;

  }

}

module.exports = GreedyAlgorithm;
