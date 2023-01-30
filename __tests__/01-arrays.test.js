const {
  createArray,
  addElement,
  removeElement,
  getElement,
  getArrayLength,
  findElement,
  reverseArray,
  sortArray,
  removeDuplicates,
  selectElements,
} = require("../src/01-arrays");

describe("createArray", () => {
  it("should return an array of the specified size", () => {
    const size = 5;
    const result = createArray(size);
    expect(result).toHaveLength(size);
  });

  it("should return an array filled with `null` values", () => {
    const size = 5;
    const result = createArray(size);
    expect(result).toEqual([null, null, null, null, null]);
  });
});

describe("addElement", () => {
  it("adds an element to the end of the given array", () => {
    const arr = [1, 2, 3];
    const element = 4;
    const expected = [1, 2, 3, 4];
    const result = addElement(arr, element);
    expect(result).toBe(4);
    expect(arr).toEqual(expected);
  });

  it("returns the new length of the array", () => {
    const arr = [1, 2, 3];
    const element = 4;
    const expectedLength = 4;
    const result = addElement(arr, element);
    expect(result).toBe(expectedLength);
  });
});

describe("removeElement", () => {
  test("removes element from array successfully", () => {
    const arr = [1, 2, 3];
    const index = 1;
    const result = removeElement(arr, index);
    expect(result).toBe(true);
    expect(arr).toEqual([1, 3]);
  });

  test("returns an error message if index is out of range", () => {
    const arr = [1, 2, 3];
    const index = 3;
    const result = removeElement(arr, index);
    expect(result).toBe("Error: Index out of bounds.");
    expect(arr).toEqual([1, 2, 3]);
  });

  test("returns an error message if array is empty", () => {
    const arr = [];
    const index = 0;
    const result = removeElement(arr, index);
    expect(result).toBe("Error: The array is empty.");
    expect(arr).toEqual([]);
  });
});

describe("getElement", () => {
  test("should return the element at the specified index", () => {
    const arr = [1, 2, 3, 4];
    const index = 2;
    const result = getElement(arr, index);
    expect(result).toBe(3);
  });

  test("should return an error if the index is less than 0", () => {
    const arr = [1, 2, 3, 4];
    const index = -1;
    const result = getElement(arr, index);
    expect(result).toBe("Error: Index out of bounds");
  });

  test("should return an error if the index is greater than the length of the array", () => {
    const arr = [1, 2, 3, 4];
    const index = 4;
    const result = getElement(arr, index);
    expect(result).toBe("Error: Index out of bounds");
  });
});

describe("getArrayLength", () => {
  test("returns the number of elements in an array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(getArrayLength(arr)).toBe(5);
  });

  test("returns 0 for an empty array", () => {
    const arr = [];
    expect(getArrayLength(arr)).toBe(0);
  });

  test("returns an error for non-array input", () => {
    const arr = "not an array";
    const result = getArrayLength(arr);
    expect(result).toBe("Error: Input is not an array.");
  });
});

describe("findElement", () => {
  test("returns the index of the first occurrence of the element in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const element = 3;
    const result = findElement(arr, element);

    expect(result).toBe(2);
  });

  test("returns -1 if the element is not found in the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const element = 6;
    const result = findElement(arr, element);

    expect(result).toBe(-1);
  });

  test("logs a message if the input array is not an array", () => {
    const arr = "not an array";
    const element = 3;
    const result = findElement(arr, element);
    expect(result).toBe("Error: Input is not an array.");
  });

  test("logs a message if the second argument is not provided", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = findElement(arr);
    expect(result).toBe("Error: Second argument is not provided");
  });
});

describe("reverseArray", () => {
  test("reverses an array of numbers", () => {
    const numbers = [1, 2, 3, 4];
    expect(reverseArray(numbers)).toEqual([4, 3, 2, 1]);
  });

  test("reverses an array of strings", () => {
    const strings = ["one", "two", "three"];
    expect(reverseArray(strings)).toEqual(["three", "two", "one"]);
  });

  test("returns an error for an empty array", () => {
    const emptyArray = [];
    const result = reverseArray(emptyArray);
    expect(result).toBe("Error: Array is empty.");
  });

  test("returns an error for non-array input", () => {
    const notAnArray = "not an array";
    const result = reverseArray(notAnArray);
    expect(result).toBe("Error: Input is not an array.");
  });
});

describe("sortArray", () => {
  test("returns sorted array", () => {
    const unsortedArray = [5, 4, 3, 2, 1];
    const sortedArray = sortArray(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
  });

  test("returns sorted array for already sorted array", () => {
    const sortedArray = [1, 2, 3, 4, 5];
    const returnedArray = sortArray(sortedArray);
    expect(returnedArray).toEqual([1, 2, 3, 4, 5]);
  });

  test("returns error message for non-array input", () => {
    const notAnArray = "not an array";
    const result = sortArray(notAnArray);
    expect(result).toBe("Error: Input is not an array");
  });

  test("returns error message for array with non-numeric elements", () => {
    const arrayWithNonNumericElements = [1, 2, "three", 4, 5];
    const result = sortArray(arrayWithNonNumericElements);
    expect(result).toBe("Error: Array must only contain numeric elements");
  });
});

describe("removeDuplicates", () => {
  test("returns an error for non-array input", () => {
    const notAnArray = "not an array";
    const result = removeDuplicates(notAnArray);
    expect(result).toBe("Error: Input is not an array");
  });

  test("returns the same array if it contains no duplicates", () => {
    const noDuplicates = [1, 2, 3, 4, 5];
    expect(removeDuplicates(noDuplicates)).toEqual([1, 2, 3, 4, 5]);
  });

  test("removes duplicates from the given array", () => {
    const duplicates = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5];
    expect(removeDuplicates(duplicates)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("selectElements", () => {
  test("returns the specified number of elements from the start of the array", () => {
    const arr = [1, 2, 3, 4, 5];
    const n = 3;
    expect(selectElements(arr, n)).toEqual([1, 2, 3]);
  });

  test("returns all elements if n is greater than the array length", () => {
    const arr = [1, 2, 3, 4, 5];
    const n = 10;
    expect(selectElements(arr, n)).toEqual([1, 2, 3, 4, 5]);
  });

  test("returns an empty array if n is zero or negative", () => {
    const arr = [1, 2, 3, 4, 5];
    const n = 0;
    expect(selectElements(arr, n)).toEqual([]);

    const n2 = -5;
    expect(selectElements(arr, n2)).toEqual([]);
  });

  test("returns an error message for non-array input", () => {
    const notAnArray = "not an array";
    const n = 3;
    const result = selectElements(notAnArray, n);
    expect(result).toBe("Error: Input is not an array");
  });

  test("returns an error message for non-integer n", () => {
    const arr = [1, 2, 3, 4, 5];
    const n = "three";
    const result = selectElements(arr, n);
    expect(result).toBe("Error: n is not an integer");
  });
});
