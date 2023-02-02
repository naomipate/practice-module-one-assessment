const {
  createObject,
  addProperty,
  updateProperty,
  removeProperty,
  getProperty,
  getKeyValueType,
  getObjectName,
  compareObjects,
  cloneObject,
} = require("../src/02-objects");

describe("createObject", () => {
  test("createObject creates an object with a string key and string value", () => {
    const result = createObject("name", "John");
    expect(result).toEqual({ name: "John" });
  });

  test("createObject creates an object with a numeric key and numeric value", () => {
    const result = createObject(1, 10);
    expect(result).toEqual({ 1: 10 });
  });

  test("returns an error message if objectKey is not defined", () => {
    const objectKey = undefined;
    const objectValue = "John Doe";
    const result = createObject(objectKey, objectValue);
    expect(result).toEqual("Error: objectKey must be defined.");
  });

  test("returns an error message if objectValue is not defined.", () => {
    const objectKey = "Person";
    const objectValue = undefined;
    const result = createObject(objectKey, objectValue);
    expect(result).toEqual("Error: objectValue must be defined.");
  });
});

describe("addProperty", () => {
  test("adds a new property to the object", () => {
    const obj = {};
    const propertyName = "age";
    const propertyValue = 30;
    addProperty(obj, propertyName, propertyValue);
    expect(obj).toHaveProperty(propertyName, propertyValue);
  });

  test("returns an error message if the first argument is not an object", () => {
    const obj = "not an object";
    const propertyName = "age";
    const propertyValue = 30;
    const result = addProperty(obj, propertyName, propertyValue);
    expect(result).toEqual("Error: first argument must be an object.");
  });

  test("returns an error message if the second argument is not a string", () => {
    const obj = {};
    const propertyName = 123;
    const propertyValue = 30;
    const result = addProperty(obj, propertyName, propertyValue);
    expect(result).toEqual("Error: second argument must be a string.");
  });
});

describe("updateProperty", () => {
  test("updates the value of an existing property on the object", () => {
    const obj = { name: "John Doe" };
    const propertyName = "name";
    const newValue = "Jane Doe";
    const result = updateProperty(obj, propertyName, newValue);
    expect(result).toBe(true);
    expect(obj[propertyName]).toEqual(newValue);
  });

  test("returns an error message if the property does not exist on the object", () => {
    const obj = { name: "John Doe" };
    const propertyName = "age";
    const newValue = 30;
    const result = updateProperty(obj, propertyName, newValue);
    expect(result).toBe("Error: property does not exist.");
  });

  test("returns an error message if the first argument is not an object", () => {
    const obj = "not an object";
    const propertyName = "name";
    const newValue = "Jane Doe";
    const result = updateProperty(obj, propertyName, newValue);
    expect(result).toEqual("Error: first argument must be an object.");
  });
});

describe("removeProperty", () => {
  test("removes a property from the object", () => {
    const obj = { name: "John Doe", age: 30 };
    const propertyName = "age";
    const result = removeProperty(obj, propertyName);
    expect(result).toStrictEqual({ name: "John Doe" });
    expect(obj).not.toHaveProperty(propertyName);
  });

  test("returns an error message if the property does not exist on the object", () => {
    const obj = { name: "John Doe" };
    const propertyName = "age";
    const result = removeProperty(obj, propertyName);
    expect(result).toBe("Error: property does not exist.");
  });

  test("returns an error message if the first argument is not an object", () => {
    const obj = "not an object";
    const propertyName = "name";
    const result = removeProperty(obj, propertyName);
    expect(result).toEqual("Error: first argument must be an object.");
  });
});

describe("getProperty", () => {
  test("returns the value of a property on the object", () => {
    const obj = { name: "John Doe", age: 30 };
    const propertyName = "age";
    const result = getProperty(obj, propertyName);
    expect(result).toBe(30);
  });

  test("returns an error message if the property does not exist on the object", () => {
    const obj = { name: "John Doe" };
    const propertyName = "age";
    const result = getProperty(obj, propertyName);
    expect(result).toBe("Error: property does not exist.");
  });

  test("returns an error message if the first argument is not an object", () => {
    const obj = "not an object";
    const propertyName = "name";
    const result = getProperty(obj, propertyName);
    expect(result).toEqual("Error: first argument must be an object.");
  });
});

describe("getKeyValueType", () => {
  test("returns the type of a string", () => {
    const obj = { name: "John Doe", age: 30 };
    const result = getKeyValueType(obj, "name");
    expect(result).toBe("string");
  });

  test("returns the type of a number", () => {
    const obj = { name: "John Doe", age: 30 };
    const result = getKeyValueType(obj, "age");
    expect(result).toBe("number");
  });

  test("returns the type of a boolean", () => {
    const obj = { name: "John Doe", age: 30, employed: true };
    const result = getKeyValueType(obj, "employed");
    expect(result).toBe("boolean");
  });
});

describe("getObjectName", () => {
  test("getObjectName returns correct name", () => {
    const obj = {};
    obj.name = "test object";
    expect(getObjectName(obj)).toBe("test object");
  });

  test("getObjectName returns undefined for object with no name", () => {
    const obj = {};
    expect(getObjectName(obj)).toBeUndefined();
  });

  test("getObjectName returns name of object with multiple properties", () => {
    const obj = {};
    obj.name = "test object";
    obj.property1 = "value1";
    obj.property2 = "value2";
    expect(getObjectName(obj)).toBe("test object");
  });
});

describe("compareObjects", () => {
  test("Compare two objects with the same properties", () => {
    const obj1 = { name: "John", age: 30 };
    const obj2 = { name: "John", age: 30 };
    expect(compareObjects(obj1, obj2)).toBe(true);
  });

  test("Compare two objects with different properties", () => {
    const obj1 = { name: "John", age: 30 };
    const obj2 = { name: "Jane", age: 25 };
    expect(compareObjects(obj1, obj2)).toBe(false);
  });

  test("Compare objects where either one or both of the objects are null or undefined", () => {
    const obj1 = { name: "John", age: 30 };
    const obj2 = null;
    expect(compareObjects(obj1, obj2)).toBe(false);
    expect(compareObjects(obj2, obj2)).toBe(true);
  });
});

describe("cloneObject", () => {
  test("Clone object with properties of different data types", () => {
    const obj = { name: "John", age: 30, isMarried: true };
    const clone = cloneObject(obj);
    expect(clone).toEqual(obj);
  });

  test("returns an error message if the argument is not an object", () => {
    const obj = "not an object";
    const result = cloneObject(obj);
    expect(result).toEqual("Error: argument must be an object.");
  });

  test("returns an error message if the argument is null or undefined", () => {
    const result1 = cloneObject(null);
    const result2 = cloneObject(undefined);
    expect(result1).toEqual("Error: argument must be an object.");
    expect(result2).toEqual("Error: argument must be an object.");
  });

  test("Clone object creates a new object, not just a reference to the original object", () => {
    const obj = { name: "John", age: 30 };
    const clone = cloneObject(obj);
    clone.age = 25;
    expect(clone.age).not.toEqual(obj.age);
  });
});
