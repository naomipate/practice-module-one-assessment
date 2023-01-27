// Sample Data - Feel free to create your own too!
const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sampleArray2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

/**
 * Returns the sum of all numbers in an array
 * @param {array} arr - The array to be processed
 * @returns {number} - The sum of all numbers in the array
 */
function sumArray(arr) {}

/**
 * Returns the product of all numbers in an array
 * @param {array} arr - The array to be processed
 * @returns {number} - The product of all numbers in the array
 */
function productArray(arr) {}

/**
 * Returns the concatenation of all strings in an array
 * @param {array} arr - The array to be processed
 * @returns {string} - The concatenation of all strings in the array
 */
function concatenateArray(arr) {}

/**
 * Returns the number of elements in an array that are greater than a specified threshold
 * @param {array} arr - The array to be processed
 * @param {number} threshold - The threshold to compare against
 * @returns {number} - The number of elements in the array greater than the threshold
 */
function countGreaterThan(arr, threshold) {}

/**
 * Returns the average of all numbers in an array
 * @param {array} arr - The array to be processed
 * @returns {number} - The average of all numbers in the array
 */
function averageArray(arr) {}

/**
 * Finds the product of all elements in the given array
 * @param {array} arr - The array whose elements will be multiplied
 * @returns {number} - The product of all elements in the array
 */
function findProduct(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

/**
 * Finds the sum of all elements in the given array
 * @param {array} arr - The array whose elements will be added
 * @returns {number} - The sum of all elements in the array
 */
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/**
 * Finds the average of all elements in the given array
 * @param {array} arr - The array whose elements will be averaged
 * @returns {number} - The average of all elements in the array
 */
function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

/**
 * Counts the number of elements in the given array that are greater than a specified value
 * @param {array} arr - The array to be searched
 * @param {number} value - The value to compare against
 * @returns {number} - The number of elements in the array greater than the specified value
 */
function countGreaterThan(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      count++;
    }
  }
  return count;
}

/**
 * Finds the smallest element in the given array
 * @param {array} arr - The array to be searched
 * @returns {number} - The smallest element in the array
 */
function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
