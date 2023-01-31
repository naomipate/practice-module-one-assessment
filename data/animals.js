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
      habitat: {
        migration: {
          locations: ["Africa", "Middle East"],
        },
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
          locations: ["Antarctica"],
        },
      },
    },
  },
];

module.exports = {
  animals,
};
