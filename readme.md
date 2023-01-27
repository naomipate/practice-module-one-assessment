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
 - Loyalty discounts are applied as a percentage off the base price. For  example, a user might have a loyalty discount of 10%.
 - Bulk discounts are applied based on the quantity of items a user is purchasing. For example, if a user purchases more than 10 items, they receive a 5% discount on each item.

 Write a JavaScript function that takes in the following parameters:
 - The _quantity_ of items a user is purchasing
 - The _coupon code_ a user is using (if any)
 - The _loyalty discount_ a user has (if any)

Return the final price of the items after all discounts have been applied.