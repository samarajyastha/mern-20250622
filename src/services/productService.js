import fs from "fs";

const getProducts = () => {
  const rawData = fs.readFileSync("./src/data/products.json", "utf8");

  const products = JSON.parse(rawData);

  const filteredProducts = products.filter((product) => product.price < 100000);

  return filteredProducts;
};

export default { getProducts };
