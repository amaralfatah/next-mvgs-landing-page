export interface Product {
  id: number;
  name: string;
  storage: string;
  color: string;
  price: string;
  condition: string;
  type: 'iPhone' | 'Android';
  image: string;
  features?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 13",
    storage: "128GB",
    color: "Starlight",
    price: "7.xxx.xxx",
    condition: "99% Like New",
    type: "iPhone",
    image: "/images/products/img-1.jpg",
    features: [
      "Inter All Operator",
      "Battery Health 96%",
      "True Tone & Face ID ON",
      "Kamera D/B Jernih",
      "Speaker Normal (No sember)",
      "No Simlock / No Bypass",
      "Fullset Original"
    ]
  },
  {
    id: 2,
    name: "iPhone 13 Pro",
    storage: "128GB",
    color: "Sierra Blue",
    price: "10.xxx.xxx",
    condition: "99% Like New",
    type: "iPhone",
    image: "/images/products/img-2.jpg",
    features: [
      "Inter All Operator",
      "Battery Health 98% 1:1",
      "True Tone & Face ID ON",
      "3uTools All Green (98%)",
      "Speaker A/B Normal",
      "No Simlock / No Bypass",
      "Fullset Original"
    ]
  },
  {
    id: 3,
    name: "iPhone Xs",
    storage: "256GB",
    color: "Gold",
    price: "4.xxx.xxx",
    condition: "93% Mulus",
    type: "iPhone",
    image: "/images/products/img-3.jpg",
    features: [
      "Inter All Operator",
      "Battery Health 80% Original",
      "Face ID & True Tone ON",
      "Kamera D/B Jernih",
      "iCloud Bebas Reset",
      "No Simlock / No Bypass",
      "Fullset OEM"
    ]
  },
  {
    id: 4,
    name: "iPhone Xr",
    storage: "64GB",
    color: "Coral",
    price: "2.850.000",
    condition: "97% Mulus",
    type: "iPhone",
    image: "/images/products/img-4.jpg",
    features: [
      "Inter All Operator",
      "Battery Health 100% 1:1",
      "True Tone & Face ID ON",
      "3uTools All Green (97%)",
      "Fungsional Aman Semua",
      "No Simlock / No Bypass",
      "Fullset Original"
    ]
  },
  {
    id: 5,
    name: "iPhone 13",
    storage: "128GB",
    color: "Pink",
    price: "5.364.000",
    condition: "80% (Banyak Dent)",
    type: "iPhone",
    image: "/images/products/img-5.jpg",
    features: [
      "All Operator",
      "Battery Health 77% Original",
      "True Tone ON",
      "Tombol Fungsional 100%",
      "iCloud Bebas Reset",
      "Kamera D/B Normal",
      "Speaker A/B Fungsi"
    ]
  },
  {
    id: 6,
    name: "iPhone 14",
    storage: "128GB",
    color: "Midnight",
    price: "9.xxx.xxx",
    condition: "90% Mulus",
    type: "iPhone",
    image: "/images/products/img-6.jpg",
    features: [
      "Ex iBox (Resmi Indonesia)",
      "Battery Health 76% Original",
      "True Tone & Face ID ON",
      "3uTools All Green 98%",
      "Minus: Lecet Pemakaian",
      "Dusbox Original",
      "Fungsional Semua Aman"
    ]
  }
];
