const suma = (...args) => {
  if (!args.length) return 0;
  if (args.some((a) => typeof a !== "number")) return null;
  return args.reduce((acc, n) => acc + n, 0);
};

export default suma;
