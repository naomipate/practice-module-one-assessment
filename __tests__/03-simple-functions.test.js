const {
  calculateSum,
  getNumberOfVowels,
  getLargestNumber,
  getLargestKeyValuePair,
  convertToUppercase,
  isOddOrEven,
  reverseString,
  calculateAverage,
  switchFirstAndLastLetter,
  removeDuplicates,
} = require("../src/03-simple-functions");

describe("calculateSum", () => {
  test("Calculate the sum of two positive numbers", () => {
    expect(calculateSum(2, 3)).toBe(5);
  });

  test("Calculate the sum of two negative numbers", () => {
    expect(calculateSum(-2, -3)).toBe(-5);
  });

  test("Calculate the sum of a positive and a negative number", () => {
    expect(calculateSum(2, -3)).toBe(-1);
  });
});

describe("getNumberOfVowels", () => {
  test("Return the number of vowels in a string with vowels", () => {
    expect(getNumberOfVowels("hello")).toBe(2);
  });

  test("Return the number of vowels in a string with no vowels", () => {
    expect(getNumberOfVowels("bcd")).toBe(0);
  });

  test("Return the number of vowels in a string with mixed characters", () => {
    expect(getNumberOfVowels("hEllO")).toBe(2);
  });
});

describe("getLargestNumber", () => {
  test("Return the largest number in an array of positive numbers", () => {
    expect(getLargestNumber([2, 3, 5, 1])).toBe(5);
  });

  test("Return the largest number in an array of negative numbers", () => {
    expect(getLargestNumber([-2, -3, -5, -1])).toBe(-1);
  });

  test("Return the largest number in an array of positive and negative numbers", () => {
    expect(getLargestNumber([-2, 3, 5, -1])).toBe(5);
  });
});

describe("getLargestKeyValuePair", () => {
  test("Return the key-value pair with the largest value in an object with positive values", () => {
    expect(getLargestKeyValuePair({ a: 2, b: 3, c: 5, d: 1 })).toEqual({
      c: 5,
    });
  });

  test("Return the key-value pair with the largest value in an object with negative values", () => {
    expect(getLargestKeyValuePair({ a: -2, b: -3, c: -5, d: -1 })).toEqual({
      a: -2,
    });
  });

  test("Return the key-value pair with the largest value in an object with positive and negative values", () => {
    expect(getLargestKeyValuePair({ a: -2, b: 3, c: 5, d: -1 })).toEqual({
      c: 5,
    });
  });
});

describe("convertToUppercase", () => {
  test("Convert all strings in an array to uppercase", () => {
    expect(convertToUppercase(["hello", "world", "jest"])).toEqual([
      "HELLO",
      "WORLD",
      "JEST",
    ]);
  });

  test("Convert all strings in an array to uppercase with special characters", () => {
    expect(convertToUppercase(["h3ll0", "w0rld", "j3st"])).toEqual([
      "H3LL0",
      "W0RLD",
      "J3ST",
    ]);
  });

  test("Convert all strings in an array to uppercase with numbers", () => {
    expect(convertToUppercase(["h3ll0", "w0rld", 12345])).toEqual([
      "H3LL0",
      "W0RLD",
      12345,
    ]);
  });
});

describe("isOddOrEven", () => {
  test("Return 'even' for even numbers", () => {
    expect(isOddOrEven(2)).toBe("even");
    expect(isOddOrEven(4)).toBe("even");
  });

  test("Return 'odd' for odd numbers", () => {
    expect(isOddOrEven(1)).toBe("odd");
    expect(isOddOrEven(3)).toBe("odd");
  });

  test("Return error for non-integer inputs", () => {
    expect(() => isOddOrEven(1.5)).toThrowError("Input must be an integer");
    expect(() => isOddOrEven("a")).toThrowError("Input must be an integer");
  });
});

describe("reverseString", () => {
  test("Return reversed string for non-empty string inputs", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
  });

  test("Return empty string for empty string inputs", () => {
    expect(reverseString("")).toBe("");
  });

  test("Return error for non-string inputs", () => {
    expect(() => reverseString(123)).toThrowError("Input must be a string");
    expect(() => reverseString([1, 2, 3])).toThrowError(
      "Input must be a string"
    );
  });
});

describe("calculateAverage", () => {
  test("should return 'Invalid argument: input is not an array' if input is not an array", () => {
    expect(calculateAverage("not an array")).toBe(
      "Invalid argument: input is not an array"
    );
  });

  test("should return 'Array is empty' if input array is empty", () => {
    expect(calculateAverage([])).toBe("Array is empty");
  });

  test("should return the average of the numbers in the input array", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe("switchFirstAndLastLetter", () => {
  it("should return a new string with the first and last letter of the original string switched", () => {
    expect(switchFirstAndLastLetter("hello")).toEqual("ollhe");
  });

  it("should return an error message if the input is not a string", () => {
    expect(switchFirstAndLastLetter(123)).toEqual("Input must be a string");
  });

  it("should return an error message if the string has less than 2 characters", () => {
    expect(switchFirstAndLastLetter("a")).toEqual(
      "String must have at least 2 characters"
    );
  });
});

describe("removeDuplicates", () => {
  test("Returns a new array with all duplicates removed from input array", () => {
    const input = ["apple", "banana", "apple", "cherry"];
    const expectedOutput = ["apple", "banana", "cherry"];
    expect(removeDuplicates(input)).toEqual(expectedOutput);
  });

  test("Returns an empty array if input array has no elements", () => {
    const input = [];
    const expectedOutput = [];
    expect(removeDuplicates(input)).toEqual(expectedOutput);
  });

  test("Returns the same array if input array has no duplicates", () => {
    const input = ["apple", "banana", "cherry"];
    const expectedOutput = ["apple", "banana", "cherry"];
    expect(removeDuplicates(input)).toEqual(expectedOutput);
  });
});
