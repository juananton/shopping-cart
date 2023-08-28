import { products } from '../mocks/products.json';

export const CATEGORIES = products.reduce((acc, curr) => {
  !acc.includes(curr.category) && acc.push(curr.category);
  return acc;
}, []);
