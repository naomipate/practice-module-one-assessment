// Sample Data - Feel free to create your own too!
let person = {
  name: "Sam",
  age: 49,
  hobbies: ["writing", "reading"],
};
let animal = {
  name: "Tiger",
  type: "Mammal",
  habitat: "Jungle",
};

/**
 * Creates an object of the specified type and assigns it the given name
 * @param {string} objectKey - The key to be created
 * @param {string} objectValue - The value to be assigned to the key
 * @returns {object} - The newly created object
 */
function createObject(objectKey, objectValue) {
  // code to create object
  let newObject = {};
  if (objectKey) {
    if (objectValue) {
      newObject[objectKey] = objectValue;
      return newObject;
    } else {
      return `Error: objectValue must be defined.`;
    }
  } else {
    return `Error: objectKey must be defined.`;
  }
}

/**
 * Adds a new property to the given object with the specified name and value
 * @param {object} obj - The object to which the property will be added
 * @param {string} propertyName - The name of the new property
 * @param {*} propertyValue - The value of the new property
 */
function addProperty(obj, propertyName, propertyValue) {
  // code to add property
  if (typeof obj === "object") {
    if (typeof propertyName === "string") {
      obj[propertyName] = propertyValue;
      return obj;
    } else {
      return `Error: second argument must be a string.`;
    }
  } else {
    return `Error: first argument must be an object.`;
  }
}

/**
 * Updates the value of an existing property on the given object
 * @param {object} obj - The object whose property will be updated
 * @param {string} propertyName - The name of the property to be updated
 * @param {*} newValue - The new value for the property
 * @returns {boolean} - True if the property was updated successfully, false otherwise
 */
function updateProperty(obj, propertyName, newValue) {
  // code to update property
  if (typeof obj === "object") {
    if (Object.keys(obj).includes(propertyName)) {
      obj[propertyName] = newValue;
      return !!(obj[propertyName] === newValue);
    } else {
      return `Error: property does not exist.`;
    }
  } else {
    return `Error: first argument must be an object.`;
  }
}

/**
 * Removes a property from the given object
 * @param {object} obj - The object from which the property will be removed
 * @param {string} propertyName - The name of the property to be removed
 * @returns {object} - The updated object
 */
function removeProperty(obj, propertyName) {
  // code to remove property
  if (typeof obj === "object") {
    if (Object.keys(obj).includes(propertyName)) {
      delete obj[propertyName];
      return obj;
    } else {
      return `Error: property does not exist.`;
    }
  } else {
    return `Error: first argument must be an object.`;
  }
}

/**
 * Returns the value of a property on the given object
 * @param {object} obj - The object whose property value will be returned
 * @param {string} propertyName - The name of the property whose value will be returned
 * @returns {*} - The value of the specified property
 */
function getProperty(obj, propertyName) {
  // code to return property value
  if (typeof obj === "object") {
    if (Object.keys(obj).includes(propertyName)) {
      return obj[propertyName];
    } else {
      return `Error: property does not exist.`;
    }
  } else {
    return `Error: first argument must be an object.`;
  }
}

/**
 * Returns the type of the given key's value
 * @param {object} obj - The object to search for the key
 * @param {*} key - The key to search for in the object
 * @returns {string} - The type of the value of the key
 */
function getKeyValueType(obj, key) {
  // code to return key value type
  return typeof obj[key];
}

/**
 * Returns the name of the given object
 * @param {object} obj - The object whose name will be returned
 * @returns {string} - The name of the object
 */
function getObjectName(obj) {
  // code to return object name
  return obj.name;
}

/**
 * Compares two objects and returns true if they have the same type and properties, false otherwise
 * @param {object} obj1 - The first object to compare
 * @param {object} obj2 - The second object to compare
 * @returns {boolean} - true if the objects have the same type and properties, false otherwise
 */
function compareObjects(obj1, obj2) {
  // code to compare objects
  if (typeof obj1 === typeof obj2) {
    if(obj1.every === obj2.every) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * Creates a new object with the same type and properties as the original object
 * @param {object} obj - The object to be cloned
 * @returns {object} - A new object with the same type and properties as the original object
 */
function cloneObject(obj) {
  // code to clone object
  if (typeof obj === "object") {
    if (obj !== null && obj !== undefined) {
      return JSON.parse(JSON.stringify(obj));
    } else {
      return `Error: argument must be an object.`;
    }
  } else {
    return `Error: argument must be an object.`;
  }
}

module.exports = {
  createObject,
  addProperty,
  updateProperty,
  removeProperty,
  getProperty,
  getKeyValueType,
  getObjectName,
  compareObjects,
  cloneObject,
};
