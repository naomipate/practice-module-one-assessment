const {
  printPersonData,
  updateAddress,
  addNewPerson,
  averageAge,
  countSharedHobbies,
  getAnimalDescription,
} = require("../src/05-complex-functions");

const { people, animals } = require("../data/data");

describe("printPersonData", () => {
  test("returns 'No data provided' when data is not an array", () => {
    const data = "not an array";
    expect(printPersonData(data)).toBe("No data provided");
  });

  test("returns 'No person data found' when the array is empty", () => {
    const data = [];
    expect(printPersonData(data)).toBe("No person data found");
  });

  test("correctly prints person data", () => {
    let expected =
      "Name: John\nAge: 25\nHobbies: reading, running\nAddress: 123 Main St, Anytown, CA, 98765\n\nName: Jane\nAge: 32\nHobbies: cooking, traveling\nAddress: 456 Elm St, Smallville, NY, 12345\n\nName: Bob\nAge: 18\nHobbies: gaming, hiking\nAddress: 789 Oak St, Bigcity, TX, 67890\n\n";
    expect(printPersonData(people)).toBe(expected);
  });
});

describe("updateAddress", () => {
  test("updates the address of a person", () => {
    let name = "John";
    let newAddress = {
      street: "000 Main St",
      city: "Nowhere",
      state: "NA",
      zip: "00000",
    };

    updateAddress(people, name, newAddress);

    expect(people[0].address).toEqual(newAddress);
  });

  test("does not update address if person not found", () => {
    let name = "Noname";
    let newAddress = {
      street: "111 Main St",
      city: "Somewhere",
      state: "SA",
      zip: "11111",
    };
    let originalPeople = [...people];

    updateAddress(people, name, newAddress);

    expect(people).toEqual(originalPeople);
  });
});

describe("addNewPerson", () => {
  test("adds a new person to the data array", () => {
    const newPerson = {
      name: "Sally",
      age: 28,
      hobbies: ["painting", "yoga"],
      address: {
        street: "246 Maple St",
        city: "Midtown",
        state: "IL",
        zip: "56789",
      },
    };
    addNewPerson(
      people,
      newPerson.name,
      newPerson.age,
      newPerson.hobbies,
      newPerson.address
    );
    expect(people).toContainEqual(newPerson);
  });

  test("correctly adds the correct properties to the new person object", () => {
    const newPerson = {
      name: "Tom",
      age: 45,
      hobbies: ["fishing", "golfing"],
      address: {
        street: "369 Pine St",
        city: "Downtown",
        state: "FL",
        zip: "45678",
      },
    };
    addNewPerson(
      people,
      newPerson.name,
      newPerson.age,
      newPerson.hobbies,
      newPerson.address
    );
    const addedPerson = people.find((person) => person.name === newPerson.name);
    expect(addedPerson).toEqual({
      name: newPerson.name,
      age: newPerson.age,
      hobbies: newPerson.hobbies,
      address: newPerson.address,
    });
  });
});

describe("averageAge", () => {
  test("calculates the average age of all people correctly", () => {
    expect(averageAge(people)).toBe(24);
  });

  test("returns 0 if the data array is empty", () => {
    expect(averageAge([])).toBe(0);
  });
});

describe("countSharedHobbies", () => {
  test("should return an object with the count of shared hobbies", () => {
    const result = countSharedHobbies(people);
    expect(result).toEqual({
      reading: 1,
      hiking: 2,
      cooking: 1,
      traveling: 3,
      gaming: 1,
    });
  });

  test("should return an empty object when data is an empty array", () => {
    const result = countSharedHobbies([]);
    expect(result).toEqual({});
  });
});

describe("getAnimalDescription()", () => {
  test("returns correct animal description for Lion", () => {
    const expected =
      "A Lion is a Mammal that lives in the Savannah. It is a Carnivore that eats gazelles, zebras, buffaloes. It has a Golden color, is 4 ft tall, and weighs 400 lbs. It has a mane, tail, and large paws. It lives in Pride and hunts in stalking, chasing way. It migrates to Africa, Middle East";
    const result = getAnimalDescription("Lion", animals);
    expect(result).toBe(expected);
  });

  test("returns correct animal description for Penguin", () => {
    const expected =
      "A Penguin is a Bird that lives in the Antarctica. It is a Carnivore that eats krill, fish, squid. It has a Black and White color, is 2 ft tall, and weighs 20 lbs. It has a tuxedo-like feathers, flippers, and webbed feet. It lives in Colony and hunts in diving, swimming way. It migrates to Antarctica";
    const result = getAnimalDescription("Penguin", animals);
    expect(result).toBe(expected);
  });

  test("returns correct animal description for Elephant", () => {
    const expected =
      "An Elephant is a Mammal that lives in the Savannah. It is a Herbivore that eats Grass, Trees, Bushes. It has a Gray color, is 10 ft tall, and weighs 7000 lbs. It has a Long Trunk, Large Ears, Thick Skin. It lives in Herd and hunts in Grazing way. It migrates to Africa and Asia";
    const result = getAnimalDescription("Elephant", animals);
    expect(result).toBe(expected);
  });

  test("returns 'Animal not found' for unknown animal", () => {
    const result = getAnimalDescription("giraffe", animals);
    expect(result).toEqual("Animal not found");
  });
});
