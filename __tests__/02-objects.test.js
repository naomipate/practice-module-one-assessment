const {
  createObject,
  addProperty,
  updateProperty,
  removeProperty,
  getProperty,
  getObjectType,
  getObjectName,
  getObjectProperties,
  compareObjects,
  cloneObject,
} = require("../src/02-objects");

describe("createObject", () => {
  test("creates an object with the specified type and name", () => {
    const objectType = "Person";
    const objectName = "John Doe";
    const object = createObject(objectType, objectName);
    expect(object.type).toEqual(objectType);
    expect(object.name).toEqual(objectName);
  });

  test("returns an error message if objectType is not a string", () => {
    const objectType = 123;
    const objectName = "John Doe";
    const result = createObject(objectType, objectName);
    expect(result).toEqual("Error: objectType must be a string.");
  });

  test("returns an error message if objectName is not a string", () => {
    const objectType = "Person";
    const objectName = 123;
    const result = createObject(objectType, objectName);
    expect(result).toEqual("Error: objectName must be a string.");
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
    expect(result).toBe(true);
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

describe("getObjectType", () => {
  test("returns the type of an object", () => {
    const obj = { name: "John Doe", age: 30 };
    const result = getObjectType(obj);
    expect(result).toBe("object");
  });

  test("returns the type of a string", () => {
    const obj = "hello";
    const result = getObjectType(obj);
    expect(result).toBe("string");
  });

  test("returns the type of a number", () => {
    const obj = 42;
    const result = getObjectType(obj);
    expect(result).toBe("number");
  });

  test("returns the type of a boolean", () => {
    const obj = true;
    const result = getObjectType(obj);
    expect(result).toBe("boolean");
  });

  test("returns the type of a function", () => {
    const obj = function () {};
    const result = getObjectType(obj);
    expect(result).toBe("function");
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

describe("getObjectProperties", () => {
  const object = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3",
  };

  test("returns a dictionary of properties and their values for a plain object", () => {
    const properties = getObjectProperties(object);
    expect(properties).toEqual({
      prop1: "value1",
      prop2: "value2",
      prop3: "value3",
    });
  });

  test("returns an error message if no object is passed", () => {
    const properties = getObjectProperties();
    expect(properties).toEqual("Error: no object provided.");
  });

  test("returns an error message if the argument is not an object", () => {
    const obj = "not an object";
    const result = getObjectProperties(obj);
    expect(result).toEqual("Error: argument must be an object.");
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
    const result = getObjectProperties(obj);
    expect(result).toEqual("Error: argument must be an object.");
  });

  test("returns an error message if the argument is null or undefined", () => {
    const result1 = getObjectProperties(null);
    const result2 = getObjectProperties(undefined);
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
