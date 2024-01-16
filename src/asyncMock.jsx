import tree from './assets/tree.jpeg';
import tree_2 from './assets/tree_2.jpeg';
import tree_3 from './assets/tree_3.jpeg';
import garland from './assets/garlands.jpeg'
import garland_2 from './assets/garland_2.jpeg'
import garland_3 from './assets/garland_3.jpeg'
import decoration from './assets/decoration.jpeg'
import decoration_2 from './assets/decoration_2.jpeg'
import decoration_3 from './assets/decoration_3.jpeg'

const products = [
  {
    id: '1',
    name: 'Raz 7.5 siempre iluminado verde cielo grande  sintetico ',
    price: 2000,
    category: 'trees',
    img: tree,
    stock: 10,
    description: 'Description',
  },
  {
    id: '2',
    name: 'Árbol de Navidad preiluminado de pino flocado Raz de 7.5" o 9"',
    price: 2300,
    category: 'trees',
    img: tree_2,
    stock: 8,
    description: 'Description',
  },
  {
    id: '3',
    name: 'Raz 7.5 siempre iluminado verde cielo grande',
    price: 1000,
    category: 'trees',
    img: tree_3,
    stock: 10,
    description: 'Description',
  },
  {
    id: '4',
    name: '6ft Cordless Prelit Crimson and Gold Holiday Garland',
    price: 2000,
    category: 'garlands',
    img: garland,
    stock: 20,
    description: 'Description',
  },
  {
    id: '5',
    name: '60” Real Touch Flocked Norfolk Garland',
    price: 1500,
    category: 'garlands',
    img: garland_2,
    stock: 20,
    description: 'Description',
  },
  {
    id: '6',
    name: '72” Real Touch Norfolk Pine Garland',
    price: 5000,
    category: 'garlands',
    img: garland_3,
    stock: 77,
    description: 'Description',
  },
  {
    id: '7',
    name: '7" Glass Weave and Holly Ball/Finial Ornament',
    price: 2900,
    category: 'decoration',
    img: decoration,
    stock: 30,
    description: 'Description',
  },
  {
    id: '8',
    name: '7" Red Glitter Onion Finial Ornament',
    price: 3000,
    category: 'decoration',
    img: decoration_2,
    stock: 10,
    description: 'Description',
  },
  {
    id: '9',
    name: '6” Shiny Diamond, Champagne Onion Finial Ornament - Box of 2',
    price: 1400,
    category: 'decoration',
    img: decoration_3,
    stock: 25,
    description: 'Description',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 500);
    });
  };
