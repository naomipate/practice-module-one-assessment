const {
  sumArray,
  findLargest,
  findAverage,
  countValue,
  concatenateStrings,
  allPositive,
  multiplyArray,
  countOdd,
  reverseArray,
  isPalindrome,
} = require("../src/04-accumulator-pattern");

describe("sumArray", () => {
  it("returns the sum of all numbers in an array", () => {
    expect(sumArray([1, 2, 3])).toEqual(6);
  });

  it("handles empty arrays", () => {
    expect(sumArray([])).toEqual(0);
  });

  it("handles arrays with non-number elements", () => {
    expect(sumArray([1, 2, "3"])).toEqual(3);
  });
});

describe("findLargest", () => {
  it("should return the largest number in the array", () => {
    const numbers = [1, 2, 3, 4, 5];
    const largest = findLargest(numbers);
    expect(largest).toEqual(5);
  });

  it("should return the largest negative number in the array", () => {
    const numbers = [-1, -2, -3, -4, -5];
    const largest = findLargest(numbers);
    expect(largest).toEqual(-1);
  });

  it("should return the only number in the array", () => {
    const numbers = [5];
    const largest = findLargest(numbers);
    expect(largest).toEqual(5);
  });

  it("should return 0 for an empty array", () => {
    const numbers = [];
    const largest = findLargest(numbers);
    expect(largest).toEqual(0);
  });
});

describe("findAverage", () => {
  it("should return the average of all numbers in the array", () => {
    const numbers = [1, 2, 3, 4, 5];
    const average = findAverage(numbers);
    expect(average).toEqual(3);
  });

  it("should return the average of all negative numbers in the array", () => {
    const numbers = [-1, -2, -3, -4, -5];
    const average = findAverage(numbers);
    expect(average).toEqual(-3);
  });

  it("should return the only number in the array", () => {
    const numbers = [5];
    const average = findAverage(numbers);
    expect(average).toEqual(5);
  });

  it("should return 0 for an empty array", () => {
    const numbers = [];
    const average = findAverage(numbers);
    expect(average).toEqual(0);
  });
});

describe("countValue", () => {
  it("should return the number of occurrences of a value in the array", () => {
    const numbers = [1, 2, 3, 4, 5, 1];
    const count = countValue(numbers, 1);
    expect(count).toEqual(2);
  });

  it("should return 0 if the value is not found in the array", () => {
    const numbers = [1, 2, 3, 4, 5];
    const count = countValue(numbers, 0);
    expect(count).toEqual(0);
  });

  it("should return 1 for an array with one value", () => {
    const numbers = [5];
    const count = countValue(numbers, 5);
    expect(count).toEqual(1);
  });

  it("should return 0 for an empty array", () => {
    const numbers = [];
    const count = countValue(numbers, 0);
    expect(count).toEqual(0);
  });
});

describe("concatenateStrings", () => {
  it("should concatenate all strings in the array into a single string", () => {
    const strings = ["Hello", "world", "!"];
    const concatenated = concatenateStrings(strings);
    expect(concatenated).toEqual("Hello world!");
  });

  it("should return an empty string for an empty array", () => {
    const strings = [];
    const concatenated = concatenateStrings(strings);
    expect(concatenated).toEqual("");
  });

  it("should return a single string for an array with one string", () => {
    const strings = ["Hello"];
    const concatenated = concatenateStrings(strings);
    expect(concatenated).toEqual("Hello");
  });

  it("should ignore non-string values in the array", () => {
    const strings = ["Hello", 123, "world", {}, "!"];
    const concatenated = concatenateStrings(strings);
    expect(concatenated).toEqual("Hello world!");
  });
});

describe("allPositive", () => {
  it("should return true for an array of positive numbers", () => {
    const numbers = [1, 2, 3];
    const result = allPositive(numbers);
    expect(result).toBe(true);
  });

  it("should return false for an array with negative numbers", () => {
    const numbers = [1, -2, 3];
    const result = allPositive(numbers);
    expect(result).toBe(false);
  });

  it("should return false for an array with zeros", () => {
    const numbers = [1, 0, 3];
    const result = allPositive(numbers);
    expect(result).toBe(false);
  });

  it("should return false for an array with non-number elements", () => {
    const numbers = [1, 2, "3"];
    const result = allPositive(numbers);
    expect(result).toBe(false);
  });

  it("should return true for an empty array", () => {
    const numbers = [];
    const result = allPositive(numbers);
    expect(result).toBe(true);
  });
});

describe("multiplyArray", () => {
  it("should return the correct product for an array of numbers", () => {
    const numbers = [1, 2, 3];
    const result = multiplyArray(numbers);
    expect(result).toBe(6);
  });

  it("should return 1 for an array with zeros", () => {
    const numbers = [1, 2, 0];
    const result = multiplyArray(numbers);
    expect(result).toBe(0);
  });

  it("should return NaN for an array with non-number elements", () => {
    const numbers = [1, 2, "3"];
    const result = multiplyArray(numbers);
    expect(isNaN(result)).toBe(true);
  });

  it("should return 1 for an empty array", () => {
    const numbers = [];
    const result = multiplyArray(numbers);
    expect(result).toBe(1);
  });
});

describe("countOdd", () => {
  it("should return the correct count for an array of numbers", () => {
    const numbers = [1, 2, 3];
    const result = countOdd(numbers);
    expect(result).toBe(2);
  });

  it("should return 0 for an array with only even numbers", () => {
    const numbers = [2, 4, 6];
    const result = countOdd(numbers);
    expect(result).toBe(0);
  });

  it("should return 0 for an array with non-number elements", () => {
    const numbers = [1, 2, "3"];
    const result = countOdd(numbers);
    expect(result).toBe(0);
  });

  it("should return 0 for an empty array", () => {
    const numbers = [];
    const result = countOdd(numbers);
    expect(result).toBe(0);
  });
});

describe("reverseArray", () => {
  it("should reverse the order of elements in an array", () => {
    const numbers = [1, 2, 3];
    const result = reverseArray(numbers);
    expect(result).toEqual([3, 2, 1]);
  });

  it("should return the original array if it has only one element", () => {
    const numbers = [1];
    const result = reverseArray(numbers);
    expect(result).toEqual([1]);
  });

  it("should return an empty array if the input is an empty array", () => {
    const numbers = [];
    const result = reverseArray(numbers);
    expect(result).toEqual([]);
  });
});

describe("isPalindrome", () => {
  it("should return true for a palindrome string", () => {
    const str = "racecar";
    const result = isPalindrome(str);
    expect(result).toBe(true);
  });

  it("should return false for a non-palindrome string", () => {
    const str = "hello";
    const result = isPalindrome(str);
    expect(result).toBe(false);
  });

  it("should return true for an empty string", () => {
    const str = "";
    const result = isPalindrome(str);
    expect(result).toBe(true);
  });

  it("should return true for a string with only one character", () => {
    const str = "a";
    const result = isPalindrome(str);
    expect(result).toBe(true);
  });
});
