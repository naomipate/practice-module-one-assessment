// Sample Data - Feel free to create your own too!
const sampleArray1 = [1, 2, 3, 4, 5];
const sampleArray2 = ["apple", "banana", "orange", "kiwi", "mango"];

/**
 * Creates an array of the specified size
 * @param {number} size - The size of the array to be created
 * @returns {array} - The newly created array
 */
function createArray(size) {
  // code to create array
  let arr = new Array(size);
  arr.fill(null);
  return arr;
}

/**
 * Adds an element to the end of the given array
 * @param {array} arr - The array to which the element will be added
 * @param {*} element - The element to be added
 * @returns {number} - The new length of the array
 */
function addElement(arr, element) {
  // code to add element
  arr.push(element);
  return arr.length;
}

/**
 * Removes an element from the given array at the specified index
 * @param {array} arr - The array from which the element will be removed
 * @param {number} index - The index of the element to be removed
 * @returns {boolean} - True if the element was removed successfully, false otherwise
 */
function removeElement(arr, index) {
  // code to remove element
  if (arr[index]) {
  let remove = arr.splice(index, 1);
  if (!arr.includes(remove)) {
    return true;
  } else {
    return false;
  }
} else if (arr.length === 0) {
  return `Error: The array is empty.`;
} else {
  return `Error: Index out of bounds.`;
}
}

/**
 * Returns the element at the specified index in the given array
 * @param {array} arr - The array whose element will be returned
 * @param {number} index - The index of the element to be returned
 * @returns {*} - The element at the specified index
 */
function getElement(arr, index) {
  // code to return element
  if (arr[index]) {
   return arr[index];
  } else if (arr[index] < 0) {
    return `Error: The array is empty.`;
  } else {
    return `Error: Index out of bounds`;
  }
}

/**
 * Returns the number of elements in the given array
 * @param {array} arr - The array whose length will be returned
 * @returns {number} - The number of elements in the array
 */
function getArrayLength(arr) {
  // code to return array length
  if (Array.isArray(arr)) {
    if (arr.length > 0) {
      return arr.length;
    } else if (arr.length === 0) {
      return 0;
    }
  } else {
    return `Error: Input is not an array.`;
  }
}

/**
 * Finds the index of the first occurrence of a specified element in the given array
 * @param {array} arr - The array to be searched
 * @param {*} element - The element to be searched for
 * @returns {number} - The index of the first occurrence of the element, -1 if the element is not found
 */
function findElement(arr, element) {
  // code to find element
  if (Array.isArray(arr)) {
    if (element) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
          return arr.indexOf(arr[i]);
        }
      } 
      return -1;
    } else {
      return `Error: Second argument is not provided`;
    }
  } else {
    return `Error: Input is not an array.`;
  }
}

/**
 * Reverses the order of the elements in the given array
 * @param {array} arr - The array to be reversed
 * @returns {array} - The reversed array
 */
function reverseArray(arr) {
  // code to reverse array
  if (Array.isArray(arr)) {
    if (arr.length > 0) {
      return arr.reverse();
    } else {
      return `Error: Array is empty.`;
    }
  } else {
    return `Error: Input is not an array.`;
  }
}

/**
 * Sorts the elements in the given array in ascending order
 * @param {array} arr - The array to be sorted
 * @returns {array} - The sorted array
 */
function sortArray(arr) {
  // code to sort array
  if (Array.isArray(arr)) {
    let arrAscending = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        if (arrAscending.length === 0) {
          arrAscending.push(arr[i]);
        } else if (arrAscending[arrAscending.length-1] > arr[i]) {
          arrAscending.unshift(arr[i]);
        } else {
          arrAscending.push(arr[i]);
        }
      } else {
        return `Error: Array must only contain numeric elements`;
      }
    }
    return arrAscending;
  } else {
    return `Error: Input is not an array`;
  }
}

/**
 * Removes duplicate elements from the given array
 * @param {array} arr - The array from which duplicates will be removed
 * @returns {array} - The array with duplicate elements removed
 */
function removeDuplicates(arr) {
  // code to remove duplicates
  let array = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if(array === 0) {
        array.push(arr[i]);
      } else if (!array.includes(arr[i])) {
        array.push(arr[i]);
      } else {
        let remove = arr.splice(arr[i], 1);
      }
    }
    return array;
  } else {
    return `Error: Input is not an array`;
  }
}

/**
 * Returns a new array that contains a specified number of elements from the given array
 * @param {array} arr - The array from which elements will be selected
 * @param {number} n - The number of elements to be selected
 * @returns {array} - The new array that contains the selected elements
 */
function selectElements(arr, n) {
  // code to select elements
  let newArray = [];
  if (Array.isArray(arr)) {
    if (typeof n === "number") {
      if (n <= 0) {
        return newArray;
      }
      else if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
          newArray.push(arr[i]);
        }
        return newArray;
      } else {
        return arr;
      }
    } else {
      return `Error: n is not an integer`;
    }
  } else {
    return `Error: Input is not an array`;
  }
}

module.exports = {
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
};
