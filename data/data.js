// Array of People
let people = [
  {
    name: "John",
    age: 25,
    hobbies: ["reading", "running"],
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "98765",
    },
  },
  {
    name: "Jane",
    age: 32,
    hobbies: ["cooking", "traveling"],
    address: {
      street: "456 Elm St",
      city: "Smallville",
      state: "NY",
      zip: "12345",
    },
  },
  {
    name: "Bob",
    age: 18,
    hobbies: ["gaming", "hiking"],
    address: {
      street: "789 Oak St",
      city: "Bigcity",
      state: "TX",
      zip: "67890",
    },
  },
];

// Array of Animals
const animals = [
  {
    name: "Lion",
    type: "Mammal",
    habitat: "Savanna",
    diet: {
      type: "Carnivorous",
      prey: ["Zebras", "Gazelles", "Buffalo"],
    },
    physical_characteristics: {
      color: "Golden",
      height: "4 ft",
      weight: "330 lb",
    },
    behavior: {
      social: "Pride",
      hunting: {
        tactics: ["Coordination", "Stealth"],
      },
    },
  },
  {
    name: "Elephant",
    type: "Mammal",
    habitat: "Savanna",
    diet: {
      type: "Herbivorous",
      prey: ["Grass", "Fruits", "Vegetables"],
    },
    physical_characteristics: {
      color: "Gray",
      height: "13 ft",
      weight: "13,000 lb",
    },
    behavior: {
      social: "Herd",
      habitat: {
        migration: {
          locations: ["Africa", "Asia"],
        },
      },
    },
  },
  {
    name: "Penguin",
    type: "Bird",
    habitat: "Antarctic",
    diet: {
      type: "Carnivorous",
      prey: ["Fish", "Squid"],
    },
    physical_characteristics: {
      color: "Black and White",
      height: "2 ft",
      weight: "40 lb",
    },
    behavior: {
      social: "Colony",
      habitat: {
        migration: {
          locations: ["Antarctic"],
        },
      },
    },
  },
];

module.exports = {
  people,
  animals,
};
