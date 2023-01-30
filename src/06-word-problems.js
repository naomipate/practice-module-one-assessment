/**
 * @function calculateBulkPrice
 * @param {number} price - The base price of the item being purchased
 * @param {number} quantity - Quantity of items user is purchasing
 * @returns {number} Final price of the items after bulk discount has been applied.
 *
 * This function takes in the quantity of items a user is purchasing and returns the final price of the items after the bulk discount has been applied. The bulk discounts are applied based on the quantity of items a user is purchasing. For example, if a user purchases more than 10 items, they receive a 5% discount on each item.
 */
function calculateBulkPrice() {}

/**
 * @function calculateDiscountedPrice
 * @param {number} quantity - Quantity of items user is purchasing
 * @param {string} coupon - Coupon code user is using (if any)
 * @param {number} loyaltyDiscount - Loyalty discount user has (if any)
 * @returns {number} Final price of the items after all discounts have been applied.
 *
 * This function takes in the quantity of items a user is purchasing, the coupon code a user is using (if any) and the loyalty discount a user has (if any) and returns the final price of the items after all discounts have been applied.
 */
function calculateDiscountedPrice() {}

/**
 * @function categorizeAnimals
 * @param {Object[]} animals - An array of animal objects.
 * @param {string} animals[].type - The type of animal. Could be "MAMMAL", "REPTILE", "BIRD", or another value.
 * @param {string} animals[].habitat - The habitat of the animal. Could be "LAND", "WATER", or another value.
 * @returns {Object[]} The original array of animal objects, with a new key of `category` added to each object.
 *
 * This function categorizes an array of animal objects based on the type and habitat of each animal and adds a category key to each object, then returns the modified array.
 */
function categorizeAnimals(animals) {}
