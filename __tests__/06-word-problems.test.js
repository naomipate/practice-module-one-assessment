const {
  calculateBulkPrice,
  calculateDiscountedPrice,
  categorizeAnimals,
} = require("../src/06-word-problems");

describe("calculateBulkPrice", () => {
  it("should return the original price if quantity is between 1 and 10", () => {
    const price = 10;
    const quantity = 5;
    const expected = 10 * 5;
    const result = calculateBulkPrice(price, quantity);
    expect(result).toEqual(expected);
  });

  it("should apply a 5% discount if quantity is between 11 and 25", () => {
    const price = 10;
    const quantity = 15;
    const expected = 10 * 15 * 0.95;
    const result = calculateBulkPrice(price, quantity);
    expect(result).toEqual(expected);
  });

  it("should apply a 10% discount if quantity is between 26 and 50", () => {
    const price = 10;
    const quantity = 40;
    const expected = 10 * 40 * 0.9;
    const result = calculateBulkPrice(price, quantity);
    expect(result).toEqual(expected);
  });

  it("should apply a 15% discount if quantity is more than 50", () => {
    const price = 10;
    const quantity = 55;
    const expected = 10 * 55 * 0.85;
    const result = calculateBulkPrice(price, quantity);
    expect(result).toEqual(expected);
  });

  it("should log an error if price is not provided", () => {
    const price = null;
    const quantity = 5;
    console.error = jest.fn();
    calculateBulkPrice(price, quantity);
    expect(console.log).toHaveBeenCalledWith("Price is required");
  });

  it("should log an error if quantity is not provided", () => {
    const price = 10;
    const quantity = null;
    console.error = jest.fn();
    calculateBulkPrice(price, quantity);
    expect(console.log).toHaveBeenCalledWith("Quantity is required");
  });
});

describe("calculateDiscountedPrice", () => {
  it("should return the original price if no coupon and no loyalty discount are used", () => {
    const quantity = 5;
    const coupon = null;
    const loyaltyDiscount = 0;
    const expected = 5;
    const result = calculateDiscountedPrice(quantity, coupon, loyaltyDiscount);
    expect(result).toEqual(expected);
  });

  it("should apply a coupon discount if coupon is provided", () => {
    const quantity = 5;
    const coupon = "5OFF";
    const loyaltyDiscount = 0;
    const expected = 5 * 0.95;
    const result = calculateDiscountedPrice(quantity, coupon, loyaltyDiscount);
    expect(result).toEqual(expected);
  });

  it("should apply a loyalty discount if user has loyalty discount", () => {
    const quantity = 5;
    const coupon = null;
    const loyaltyDiscount = 0.1;
    const expected = 5 * 0.9;
    const result = calculateDiscountedPrice(quantity, coupon, loyaltyDiscount);
    expect(result).toEqual(expected);
  });

  it("should apply both coupon and loyalty discounts if both are provided", () => {
    const quantity = 5;
    const coupon = "5OFF";
    const loyaltyDiscount = 0.1;
    const expected = 5 * 0.95 * 0.9;
    const result = calculateDiscountedPrice(quantity, coupon, loyaltyDiscount);
    expect(result).toEqual(expected);
  });
});

describe("categorizeAnimals", () => {
  it("should add a category key for each animal based on type and habitat", () => {
    const animals = [
      { type: "MAMMAL", habitat: "LAND" },
      { type: "REPTILE", habitat: "LAND" },
      { type: "BIRD", habitat: "FLIGHT" },
      { type: "FISH", habitat: "WATER" },
    ];
    const expected = [
      { type: "MAMMAL", habitat: "LAND", category: "LAND" },
      { type: "REPTILE", habitat: "LAND", category: "SCALY" },
      { type: "BIRD", habitat: "FLIGHT", category: "FLIGHT" },
      { type: "FISH", habitat: "WATER", category: "OTHER" },
    ];
    expect(categorizeAnimals(animals)).toEqual(expected);
  });

  it("should add 'OTHER' category for animals with unknown type", () => {
    const animals = [{ type: "UNKNOWN", habitat: "LAND" }];
    const expected = [{ type: "UNKNOWN", habitat: "LAND", category: "OTHER" }];
    expect(categorizeAnimals(animals)).toEqual(expected);
  });

  it("should add 'WATER' category for mammals in water habitat", () => {
    const animals = [{ type: "MAMMAL", habitat: "WATER" }];
    const expected = [{ type: "MAMMAL", habitat: "WATER", category: "WATER" }];
    expect(categorizeAnimals(animals)).toEqual(expected);
  });

  it("should return an error message if the input is an empty array", () => {
    const animals = [];
    const result = categorizeAnimals(animals);
    expect(result).toEqual("No animals provided.");
  });
});
