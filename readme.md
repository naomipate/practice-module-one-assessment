# Module One Assessment Practice

Welcome to the Module One Assessment Practice!

In this set of exercises, you will put your Javascript skills to the test. To help you along the way, we have provided example data for you to use in your solutions. We highly encourage you to use this data to test your work and make sure that your solutions are working correctly.

Additionally, we encourage you to add your own data to the examples provided. This will give you a chance to see how your solutions work with different inputs, and it will help you solidify your understanding of the material.

> Adding your own data may break some of the tests. That's ok! See if you can adjust the test to account for the new data; maybe even write your own if you're feeling up to the challenge.

Finally, we encourage you to stretch your knowledge and use materials that you may not be fully comfortable with. This is a great opportunity to explore new areas and see how far you can push your skills. So get ready to dive in and have fun!

---

## Getting Started

1. Fork this repository
2. Clone your forked repo
3. `npm install`
4. Open in Code

---

## Testing

There are tests provided for each file, here's how you can run tests for all the files at once.

- `npm test` will run all tests, but won't watch them.
- `npm watch` will run all tests and watch them.

The following commands will watch for changes in the noted file and run tests each time you save.

- `npm run test-1` &nbsp;&nbsp; 01-arrays.js
- `npm run test-2` &nbsp;&nbsp; 02-objects.js
- `npm run test-3` &nbsp;&nbsp; 03-simple-functions.js
- `npm run test-4` &nbsp;&nbsp; 04-accumulator-pattern.js
- `npm run test-5` &nbsp;&nbsp; 05-complex-functions.js
- `npm run test-6` &nbsp;&nbsp; 06-word-problems.js

These commands will run each file without watching for changes. They're good for those of you who like to solve the problem first, then test it.

- `npm test arrays`
- `npm test objects`
- `npm test simple-functions`
- `npm test accumulator-pattern`
- `npm test complex-functions`
- `npm test word-problems`

---

## Array Manipulation

### createArray(number)

Creates an array of the specified size.

- Input: `5`
- Output: `[null, null, null, null, null]`

### addElement(array, element)

Adds an element to the end of the given array.

- Input: `[1, 2, 3], 4`
- Output: `4`

### removeElement(array, index)

Removes an element from the given array at the specified index.

- Input: `[1, 2, 3], 1`
- Output: `true`

### getElement(array, index)

Returns the element at the specified index in the given array.

- Input: `[1, 2, 3], 1`
- Output: `2`

### getArrayLength(array)

Returns the number of elements in the given array.

- Input: `[1, 2, 3]`
- Output: `3`

### findElement(array, element)

Finds the index of the first occurrence of a specified element in the given array.

- Input: `[1, 2, 3], 2`
- Output: `1`

### reverseArray(array)

Reverses the order of the elements in the given array.

- Input: `[1, 2, 3]`
- Output: `[3, 2, 1]`

### sortArray(array)

Sorts the elements in the given array in ascending order.

- Input: `[3, 2, 1]`
- Output: `[1, 2, 3]`

### removeDuplicates(array)

Removes duplicate elements from the given array.

- Input: `[1, 2, 2, 3]`
- Output: `[1, 2, 3]`

### selectElements(array, n)

Returns a new array that contains a specified number of elements from the given array.

- Input: `[1, 2, 3, 4, 5], 3`
- Output: `[1, 2, 3]`

---

## Object Manipulation

### createObject(objectType, objectName)

Creates an object of the specified type and assigns it the given name

- Input: `"name", "John"`
- Output: `{ name: "John" }`

### addProperty(obj, propertyName, propertyValue)

Adds a new property to the given object with the specified name and value

- Input: `{}, "age", 30`
- Output: `{ age: 30 }`

### updateProperty(obj, propertyName, newValue)

Updates the value of an existing property on the given object

- Input: `{ name: "John Doe" }, "name", "Jane Doe"`
- Output: `{ name: "Jane Doe" }`

### removeProperty(obj, propertyName)

Removes a property from the given object

- Input: `{ name: "John Doe" }, "name"`
- Output: `{}`

### getProperty(obj, propertyName)

Returns the value of a property on the given object

- Input: `{ name: "John Doe" }, "name"`
- Output: `"John Doe"`

### getKeyValueType(obj, key)

Returns the type of the given key's value

- Input: `{ name: "John Doe" }, "name"`
- Output: `"string"`

### getObjectName(obj)

Returns the name of the given object

- Input: `{ name: "John Doe" }`
- Output: `"John Doe"`

### compareObjects(obj1, obj2)

Compares two objects and returns true if they have the same type and properties, false otherwise

- Input: `{ name: "John Doe" }, { name: "Jane Doe" }`
- Output: `false`

### cloneObject(obj)

Creates a new object with the same type and properties as the original object

- Input: `{ name: "John Doe" }`
- Output: `{ name: "John Doe" }`

---

## Simple Functions

The set of simple functions performs the following tasks:

1. `calculateSum()` &nbsp; Calculates the sum of two numbers.
2. `getNumberOfVowels()` &nbsp; Returns the number of vowels in a string.
3. `getLargestNumber()` &nbsp; Returns the largest number in an array.
4. `getLargestKeyValuePair()` &nbsp; Returns the key-value pair with the largest value from an object.
5. `convertToUppercase()` &nbsp; Converts all strings in an array to uppercase.
6. `isOddOrEven()` &nbsp; Returns "even" if a number is even and "odd" if a number is odd.
7. `reverseString()` &nbsp; Reverses a string.
8. `calculateAverage()` &nbsp; Calculates the average of numbers in an array.
9. `switchFirstAndLastLetter()` &nbsp; Switches the first and last letter of a string.
10. `removeDuplicates()` &nbsp; Removes duplicates from an array of strings.

---

## Accumulator Pattern

Get hands-on with the accumulator pattern by solving a series of challenges with some sample data (sampleArray, sampleArray2) that you can use to test the functions.

However, feel free to **_create your own sample data_** as well.

### sumArray(arr)

Calculates the sum of all numbers in an array.

- Input: `[1, 2, 3, 4, 5]`
- Output: `15`

### findLargest(arr)

Finds the largest number in an array.

- Input: `[1, 2, 3, 4, 5]`
- Output: `5`

### findAverage(arr)

Finds the average of all numbers in an array.

- Input: `[1, 2, 3, 4, 5]`
- Output: `3`

### countValue(arr, value)

Counts the number of occurrences of a specific value in an array.

- Input: `[1, 2, 3, 2, 1], 2`
- Output: `2`

### concatenateStrings(arr)

Concatenates all strings in an array into a single string.

- Input: `['Hello', 'World']`
- Output: `'HelloWorld'`

### allPositive(arr)

Determines if all elements in an array are positive numbers.

- Input: `[1, 2, 3, 4, 5]`
- Output: `true`

### multiplyArray(arr)

Calculates the product of all numbers in an array.

- Input: `[1, 2, 3, 4, 5]`
- Output: `120`

### countOdd(arr)

Counts the number of odd numbers in an array.

- Input: `[1, 2, 3, 4, 5]`
- Output: `3`

### reverseArray(arr)

Reverses the order of elements in an array.

- Input: `[1, 2, 3, 4, 5]`
- Output: `[5, 4, 3, 2, 1]`

### isPalindrome(str)

Determines if a string is a palindrome (the same forwards and backwards).

- Input: `'racecar'`
- Output: `true`

---

## Complex Functions

### printPersonData(data)

Prints out the name, age, hobbies, and address of each person in the data array.

- `@param {Array} data` - An array of objects representing people with name, age, hobbies and address properties

### updateAddress(data, name, newAddress)

Updates the address of a person in the data array

- `@param {Array} data` - An array of objects representing people with name, age, hobbies and address properties
- `@param {string} name` - The name of the person to update
- `@param {Object} newAddress` - The new address of the person, containing street, city, state, and zip properties

### addNewPerson(data, name, age, hobbies, address)

Adds a new person object to the data array

- `@param {Array} data` - An array of objects representing people with name, age, hobbies and address properties
- `@param {string} name` - The name of the new person
- `@param {number} age` - The age of the new person
- `@param {Array} hobbies` - The hobbies of the new person
- `@param {Object} address` - The address of the new person, containing street, city, state, and zip properties

### averageAge(data)

Calculates the average age of all people in the data array

- `@param {Array} data` - An array of objects representing people with name, age, hobbies and address properties
- `@returns {number}` - The total age of all people in the data array

### countSharedHobbies(data)

Counts how many people share the same hobbies in the data array

- `@param {Array} data` - An array of objects representing people with name, age, hobbies and address properties
- `@returns {Object}` - An object with the hobbies as keys and the number of people who have that hobby as the value

### getAnimalDescription(animalName, animalData)

Returns a string describing the animal that matches the given name

- `@param {string} animalName` - The name of the animal to look for
- `@param {Object} animalData` - The object containing the animal data
- `@return {string}` - A string describing the animal

Format:

```text
A Lion is a Mammal that lives in the Savannah. It is a Carnivore that eats gazelles, zebras, buffaloes. It has a Golden color, is 4 ft tall, and weighs 400 lbs. It has a mane, tail, and large paws. It lives in Pride and hunts in stalking, chasing way. It migrates to Africa, Middle East
```

### getAllBookAuthors(books)

Returns all of the authors from an array of books. If the inputted books array is empty, return [].

- `@param {Object[]} books` - An array of books.
- `@returns {string[]}` An array of strings, which are book authors.

---

## Word Problems

### Calculating a Bulk Price

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

### Calculating a Discounted Price

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

### Categorizing Animals

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

---

## Bonus Test

Congrats! You've made it to the end. Here's a secret bonus for you... create a new file called `07-secret.js` in the `src` folder.

Add the following function to this file:

```js
function giveMeThosePoints() {
  return "Give me those bonus points! 💪";
}
```

1. Save the file
2. Commit the changes
3. Open a pull request

Your pull request should only include this change, if it does, you will earn a bonus point added to your lowest score.

If it does not, sorry, but you won't earn anything 😭
