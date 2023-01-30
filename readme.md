# Array Manipulation

## createArray(number)

Creates an array of the specified size.

- Input: `5`
- Output: `[null, null, null, null, null]`

## addElement(array, element)

Adds an element to the end of the given array.

- Input: `[1, 2, 3], 4`
- Output: `4`

## removeElement(array, index)

Removes an element from the given array at the specified index.

- Input: `[1, 2, 3], 1`
- Output: `true`

## getElement(array, index)

Returns the element at the specified index in the given array.

- Input: `[1, 2, 3], 1`
- Output: `2`

## getArrayLength(array)

Returns the number of elements in the given array.

- Input: `[1, 2, 3]`
- Output: `3`

## findElement(array, element)

Finds the index of the first occurrence of a specified element in the given array.

- Input: `[1, 2, 3], 2`
- Output: `1`

## reverseArray(array)

Reverses the order of the elements in the given array.

- Input: `[1, 2, 3]`
- Output: `[3, 2, 1]`

## sortArray(array)

Sorts the elements in the given array in ascending order.

- Input: `[3, 2, 1]`
- Output: `[1, 2, 3]`

## removeDuplicates(array)

Removes duplicate elements from the given array.

- Input: `[1, 2, 2, 3]`
- Output: `[1, 2, 3]`

## selectElements(array, n)

Returns a new array that contains a specified number of elements from the given array.

- Input: `[1, 2, 3, 4, 5], 3`
- Output: `[1, 2, 3]`

# Accumulator Pattern

Get hands-on with the accumulator pattern by solving a series of challenges with some sample data (sampleArray, sampleArray2) that you can use to test the functions.

However, feel free to **_create your own sample data_** as well.

## sumArray(arr)

Calculates the sum of all numbers in an array.

- Input: `[1, 2, 3, 4, 5]`
- Output: `15`

## findLargest(arr)

Finds the largest number in an array.

- Input: `[1, 2, 3, 4, 5]`
- Output: `5`

## findAverage(arr)

Finds the average of all numbers in an array.

- Input: `[1, 2, 3, 4, 5]`
- Output: `3`

## countValue(arr, value)

Counts the number of occurrences of a specific value in an array.

- Input: `[1, 2, 3, 2, 1], 2`
- Output: `2`

## concatenateStrings(arr)

Concatenates all strings in an array into a single string.

- Input: `['Hello', 'World']`
- Output: `'HelloWorld'`

## allPositive(arr)

Determines if all elements in an array are positive numbers.

- Input: `[1, 2, 3, 4, 5]`
- Output: `true`

## multiplyArray(arr)

Calculates the product of all numbers in an array.

- Input: `[1, 2, 3, 4, 5]`
- Output: `120`

## countOdd(arr)

Counts the number of odd numbers in an array.

- Input: `[1, 2, 3, 4, 5]`
- Output: `3`

## reverseArray(arr)

Reverses the order of elements in an array.

- Input: `[1, 2, 3, 4, 5]`
- Output: `[5, 4, 3, 2, 1]`

## isPalindrome(str)

Determines if a string is a palindrome (the same forwards and backwards).

- Input: `'racecar'`
- Output: `true`

---

# Word Problems

## Calculating a Bulk Price

```js
calculateBulkPrice(){ }
```

You are building a website that allows users to purchase items in bulk. Each item has a base price, and the website offers bulk discounts to users who purchase more than a certain quantity. The discounts are applied as a percentage off of the base price.

You are given the following information:

- If a user purchases between 1 and 10 items, there is no discount.
- If a user purchases between 11 and 25 items, they receive a 5% discount.
- If a user purchases between 26 and 50 items, they receive a 10% discount.
- If a user purchases more than 50 items, they receive a 15% discount.

Write a JavaScript function that takes in the _base price_ and _quantity_ of items a user is purchasing and returns the _final price_ of the items after the bulk discount has been applied.

## Calculating a Discounted Price

```js
calculateDiscountedPrice() { }
```

You are building a website that allows users to purchase items. Each item has a base price, and there are three different types of discounts that a user can apply to the base price: a coupon code, a loyalty discount, and a bulk discount.

You are given the following information:

- Coupon codes can be applied for a flat dollar amount off the base price. For example, a user might have a coupon code for $20 off.
- Loyalty discounts are applied as a percentage off the base price. For example, a user might have a loyalty discount of 10%.
- Bulk discounts are applied based on the quantity of items a user is purchasing. For example, if a user purchases more than 10 items, they receive a 5% discount on each item.

Write a JavaScript function that takes in the following parameters:

- The _quantity_ of items a user is purchasing
- The _coupon code_ a user is using (if any)
- The _loyalty discount_ a user has (if any)

Return the final price of the items after all discounts have been applied.

## Categorizing Animals

```js
categorizeAnimals();
```

A zoo is trying to keep track of all the different species of animals they have on display. To help with this task, they want to categorize each animal based on its `type`.

Write an algorithm that adds a key of `category` to each object in an array of objects. Each object represents a single animal.

- If the animal has a `type` of `"MAMMAL"`, set the `category` value to `"LAND"` if the `habitat` is equal to `"LAND"`. If the habitat is equal to `"WATER"`, set the `category` to `"WATER"`.
- If the animal has a `type` of `"REPTILE"`, set the `category` value to `"SCALY"`.
- If the animal has a `type` of `"BIRD"`, set the `category` value to `"FLIGHT"`.
- If the animal has any other `type` than the above, set the `category` value to `"OTHER"`.

Then, return the overall array with all modified animals.

```js
// EXAMPLE:
const animals = [
  { type: "MAMMAL", habitat: "LAND" },
  { type: "REPTILE", habitat: "LAND" },
  { type: "BIRD", habitat: "FLIGHT" },
  { type: "FISH", habitat: "WATER" },
];
categorizeAnimals(animals);
//> [
//>   {
//>     type: "MAMMAL",
//>     habitat: "LAND",
//>     category: "LAND",
//>   },
//>   {
//>     type: "REPTILE",
//>     habitat: "LAND",
//>     category: "SCALY",
//>   },
//>   {
//>     type: "BIRD",
//>     habitat: "FLIGHT",
//>     category: "FLIGHT",
//>   },
//>   {
//>     type: "FISH",
//>     habitat: "WATER",
//>     category: "OTHER",
//>   },
//> ];
```
