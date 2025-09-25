const ek = {
  studerende: {
    Maria: {
      tema7: { karakter: 12 },
      tema8: { karakter: 10 },
    },
  },
  Jonas: {
    kursus: {
      tema7: { karakter: 7 },
      tema8: { karakter: 4 },
    },
  },
};

const hårfarve = {
  studerende: {
    Maria: {
      farve: { type: "brun" },
    },
  },
};

console.log(hårfarve.studerende.Maria.farve.type);
