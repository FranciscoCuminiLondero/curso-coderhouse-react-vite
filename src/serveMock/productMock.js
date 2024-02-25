export const products = [
  {
    id: 1,
    name: "Producto 1",
    stock: 10,
    price: 25.99,
    category: "electronica",
    description: "Descripción del Producto 1",
    // image: "imagen1.jpg"
  },
  {
    id: 2,
    name: "Producto 2",
    stock: 15,
    price: 39.99,
    category: "ropa",
    description: "Descripción del Producto 2",
    // image: "imagen2.jpg"
  },
  {
    id: 3,
    name: "Producto 3",
    stock: 5,
    price: 49.99,
    category: "hogar",
    description: "Descripción del Producto 3",
    // image: "imagen3.jpg"
  },
  {
    id: 4,
    name: "Producto 4",
    stock: 20,
    price: 9.99,
    category: "libros",
    description: "Descripción del Producto 4",
    // image: "imagen4.jpg"
  },
  {
    id: 5,
    name: "Producto 5",
    stock: 8,
    price: 199.99,
    category: "electronica",
    description: "Descripción del Producto 5",
    // image: "imagen5.jpg"
  },
  {
    id: 6,
    name: "Producto 6",
    stock: 12,
    price: 29.99,
    category: "ropa",
    description: "Descripción del Producto 6",
    // image: "imagen6.jpg"
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length === 0) {
      reject(new Error("No existen productos"));
    }
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.find((product) => product.id.toString() === id.toString())
      );
    }, 2000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 2000);
  });
};
