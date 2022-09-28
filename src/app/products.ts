export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Xiaomi 11T',
    price: 950,
    description:
      '128GB interne memorije, 8GB RAM-a, 108MP zadnja kamera, 67W punjenje (100% u 39min)',
  },
  {
    id: 2,
    name: 'iPhone 12 Pro',
    price: 1600,
    description:
      '256GB interne memorije, 8GB RAM-a, 48MP kamera kristalne slike, bežično punjenje.',
  },
  {
    id: 3,
    name: 'Samsung Galaxy S22',
    price: 2000,
    description:
      '256GB interne memorije, 8GB RAM-a, 50MP zadnja kamera, 25W i bežično punjenje',
  },
];


