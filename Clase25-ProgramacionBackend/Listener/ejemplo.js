const color1 = (data) => console.log(`\x1b[34m%s\x1b[0m`, data);
const color2 = (data) => console.log(`\x1b[31m%s\x1b[0m`, data);

process.on("exit", (code) => {
  switch (code) {
    case 0: {
      color1("Termine satisfactoriamente");
      break;
    }

    case -4: {
      color2("Termine con errores");
      break;
    }

    default:
      break;
  }
});

const listNumbers = (...numbers) => {
  if (numbers.some((n) => isNaN(n))) {
    console.log("Invalid Param");
    console.log(numbers.map((n) => typeof n));
    process.exit(-4);
  } else {
    console.log(numbers);
  }
};

listNumbers(1, "a", 2, 3, 4);
