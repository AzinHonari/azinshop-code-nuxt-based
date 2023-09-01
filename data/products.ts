import { Category } from "./category";
import { BagCategory } from "./bagCategory";
import { ShoeCategory } from "./shoeCategory";
import { Colors } from "./colors";
import { Product } from "./product";

export const products: Product[] = [
  {
    id: 1,
    name: "Alborz",
    category: Category.BAGS,
    subCategory: BagCategory.BACKPACK,
    stockStatus: [
      {
        color: Colors.BROWN,
        stockNumber: 21,
        available: false,
        price: 145,
      },
      {
        color: Colors.GREEN,
        stockNumber: 0,
        available: false,
        price: 160,
      },
      {
        color: Colors.OLIVERLEAF,
        stockNumber: 10,
        available: true,
        price: 200,
      },
    ],
    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/bag-backpack-alborz-chocolate/bag-backpack-alborz-chocolate-01.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-backpack-alborz-chocolate/bag-backpack-alborz-chocolate-02.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-backpack-alborz-emerald/bag-backpack-alborz-emerald-01.jpg",
        color: Colors.GREEN,
      },
      {
        url: "img/products/bag-backpack-alborz-oliver-leaf/bag-backpack-alborz-oliver-leaf-01.jpg",
        color: Colors.OLIVERLEAF,
      },
      {
        url: "img/products/bag-backpack-alborz-oliver-leaf/bag-backpack-alborz-oliver-leaf-02.jpg",
        color: Colors.OLIVERLEAF,
      },
    ],
  },
  {
    id: 2,
    name: "Mary",
    category: Category.BAGS,
    subCategory: BagCategory.BACKPACK,
    stockStatus: [
      {
        color: Colors.BROWN,
        stockNumber: 21,
        available: true,
        price: 145,
      },
      {
        color: Colors.GREEN,
        stockNumber: 0,
        available: false,
        price: 160,
      },
      {
        color: Colors.PINK,
        stockNumber: 10,
        available: false,
        price: 200,
      },
    ],
    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/bag-backpack-mary-latte/bag-backpack-mary-latte-01.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-backpack-mary-emerald/bag-backpack-mary-emerald-01.jpg",
        color: Colors.GREEN,
      },
      {
        url: "img/products/bag-backpack-mary-pink/bag-backpack-mary-pink-01.jpg",
        color: Colors.PINK,
      },
      {
        url: "img/products/bag-backpack-mary-pink/bag-backpack-mary-pink-02.jpg",
        color: Colors.PINK,
      },
    ],
  },
  {
    id: 3,
    name: "Milan",
    category: Category.BAGS,
    subCategory: BagCategory.BACKPACK,
    stockStatus: [
      {
        color: Colors.BLUE,
        stockNumber: 2,
        available: true,
        price: 255,
      },
      {
        color: Colors.BROWN,
        stockNumber: 0,
        available: true,
        price: 258,
      },
    ],
    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/bag-backpack-milan-blue/bag-backpack-milan-blue-01.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/bag-backpack-milan-blue/bag-backpack-milan-blue-02.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/bag-backpack-milan-blue/bag-backpack-milan-blue-03.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/bag-backpack-milan-blue/bag-backpack-milan-blue-04.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/bag-backpack-milan-blue/bag-backpack-milan-blue-05.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/bag-backpack-milan-blue/bag-backpack-milan-blue-06.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/bag-backpack-milan-oyster/bag-backpack-milan-oyster-01.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-backpack-milan-oyster/bag-backpack-milan-oyster-02.jpg",
        color: Colors.BROWN,
      },
    ],
  },
  {
    id: 4,
    name: "Bubble",
    category: Category.BAGS,
    subCategory: BagCategory.MINI,
    stockStatus: [
      {
        color: Colors.BLACK,
        stockNumber: 5,
        available: true,
        price: 260,
      },
      {
        color: Colors.GOLD,
        stockNumber: 7,
        available: false,
        price: 270,
      },
    ],
    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/bag-mini-bubble-black/bag-mini-bubble-black-01.jpg",
        color: Colors.BLACK,
      },
      {
        url: "img/products/bag-mini-bubble-black/bag-mini-bubble-black-02.jpg",
        color: Colors.BLACK,
      },
      {
        url: "img/products/bag-mini-bubble-gold/bag-mini-bubble-gold-01.jpg",
        color: Colors.GOLD,
      },
      {
        url: "img/products/bag-mini-bubble-gold/bag-mini-bubble-gold-02.jpg",
        color: Colors.GOLD,
      },
    ],
  },
  {
    id: 5,
    name: "Sonja",
    category: Category.BAGS,
    subCategory: BagCategory.MINI,
    stockStatus: [
      {
        color: Colors.BROWN,
        stockNumber: 25,
        available: true,
        price: 305,
      },
      {
        color: Colors.WHITE,
        stockNumber: 70,
        available: true,
        price: 280,
      },
    ],
    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/bag-mini-sonja-earth/bag-mini-sonja-earth-01.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-mini-sonja-earth/bag-mini-sonja-earth-02.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-mini-sonja-earth/bag-mini-sonja-earth-03.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-mini-sonja-white/bag-mini-sonja-white-01.jpg",
        color: Colors.WHITE,
      },
      {
        url: "img/products/bag-mini-sonja-white/bag-mini-sonja-white-02.jpg",
        color: Colors.WHITE,
      },
    ],
  },
  {
    id: 6,
    name: "Chain",
    category: Category.BAGS,
    subCategory: BagCategory.SHOULDER,
    stockStatus: [
      {
        color: Colors.BLUE,
        stockNumber: 2,
        available: true,
        price: 335,
      },
      {
        color: Colors.PINK,
        stockNumber: 17,
        available: true,
        price: 345,
      },
    ],
    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/bag-shoulder-chain-blue/bag-shoulder-chain-blue-01.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/bag-shoulder-chain-blue/bag-shoulder-chain-blue-02.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/bag-shoulder-chain-blue/bag-shoulder-chain-blue-03.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/bag-shoulder-chain-blue/bag-shoulder-chain-blue-04.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/bag-shoulder-chain-pink/bag-shoulder-chain-pink-01.jpg",
        color: Colors.PINK,
      },
      {
        url: "img/products/bag-shoulder-chain-pink/bag-shoulder-chain-pink-02.jpg",
        color: Colors.PINK,
      },
      {
        url: "img/products/bag-shoulder-chain-pink/bag-shoulder-chain-pink-03.jpg",
        color: Colors.PINK,
      },
      {
        url: "img/products/bag-shoulder-chain-pink/bag-shoulder-chain-pink-04.jpg",
        color: Colors.PINK,
      },
    ],
  },
  {
    id: 7,
    name: "Zebra",
    category: Category.BAGS,
    subCategory: BagCategory.SHOULDER,
    stockStatus: [
      {
        color: Colors.BLACK,
        stockNumber: 12,
        available: true,
        price: 399,
      },
      {
        color: Colors.BROWN,
        stockNumber: 18,
        available: true,
        price: 300,
      },
    ],
    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/bag-shoulder-zebra-black/bag-shoulder-zebra-black-01.jpg",
        color: Colors.BLACK,
      },
      {
        url: "img/products/bag-shoulder-zebra-black/bag-shoulder-zebra-black-02.jpg",
        color: Colors.BLACK,
      },
      {
        url: "img/products/bag-shoulder-zebra-black/bag-shoulder-zebra-black-03.jpg",
        color: Colors.BLACK,
      },
      {
        url: "img/products/bag-shoulder-zebra-black/bag-shoulder-zebra-black-04.jpg",
        color: Colors.BLACK,
      },
      {
        url: "img/products/bag-shoulder-zebra-brown/bag-shoulder-zebra-brown-01.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-shoulder-zebra-brown/bag-shoulder-zebra-brown-02.jpg",
        color: Colors.BROWN,
      },
    ],
  },
  {
    id: 8,
    name: "leaf",
    category: Category.BAGS,
    subCategory: BagCategory.SHOULDER,

    stockStatus: [
      {
        color: Colors.BLUE,
        stockNumber: 32,
        available: true,
        price: 460,
      },
      {
        color: Colors.BROWN,
        stockNumber: 17,
        available: true,
        price: 470,
      },
      {
        color: Colors.GREEN,
        stockNumber: 0,
        available: false,
        price: 465,
      },
      {
        color: Colors.RED,
        stockNumber: 1,
        available: true,
        price: 444,
      },
    ],

    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/bag-shoulder-leaf-blue/bag-shoulder-leaf-blue-01.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/bag-shoulder-leaf-blue/bag-shoulder-leaf-blue-02.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/bag-shoulder-leaf-brown/bag-shoulder-leaf-brown-01.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-shoulder-leaf-brown/bag-shoulder-leaf-brown-02.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-shoulder-leaf-brown/bag-shoulder-leaf-brown-03.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-shoulder-leaf-green/bag-shoulder-leaf-green-01.jpg",
        color: Colors.GREEN,
      },
      {
        url: "img/products/bag-shoulder-leaf-red/bag-shoulder-leaf-red-01.jpg",
        color: Colors.RED,
      },
      {
        url: "img/products/bag-shoulder-leaf-red/bag-shoulder-leaf-red-02.jpg",
        color: Colors.RED,
      },
    ],
  },

  {
    id: 9,
    name: "Sara",
    category: Category.BAGS,
    subCategory: BagCategory.SHOULDER,
    stockStatus: [
      {
        color: Colors.BROWN,
        stockNumber: 11,
        available: true,
        price: 300,
      },
      {
        color: Colors.PINK,
        stockNumber: 0,
        available: false,
        price: 330,
      },
    ],
    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/bag-shoulder-sara-brown/bag-shoulder-sara-brown-01.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-shoulder-sara-brown/bag-shoulder-sara-brown-02.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-shoulder-sara-brown/bag-shoulder-sara-brown-03.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/bag-shoulder-sara-pink/bag-shoulder-sara-pink-01.jpg",
        color: Colors.PINK,
      },
      {
        url: "img/products/bag-shoulder-sara-pink/bag-shoulder-sara-pink-02.jpg",
        color: Colors.PINK,
      },
    ],
  },

  {
    id: 10,
    name: "Himaliya",
    category: Category.SHOES,
    subCategory: ShoeCategory.BOOT,
    stockStatus: [
      {
        color: Colors.BROWN,
        stockNumber: 1,
        available: false,
        price: 495,
      },
      {
        color: Colors.GREEN,
        stockNumber: 3,
        available: true,
        price: 500,
      },
    ],
    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/shoe-boot-himaliya-brown/shoe-boot-himaliya-brown-01.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/shoe-boot-himaliya-brown/shoe-boot-himaliya-brown-02.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/shoe-boot-himaliya-green/shoe-boot-himaliya-green-01.jpg",
        color: Colors.GREEN,
      },
      {
        url: "img/products/shoe-boot-himaliya-green/shoe-boot-himaliya-green-02.jpg",
        color: Colors.GREEN,
      },
      {
        url: "img/products/shoe-boot-himaliya-green/shoe-boot-himaliya-green-03.jpg",
        color: Colors.GREEN,
      },
    ],
  },
  {
    id: 11,
    name: "Rainbow",
    category: Category.SHOES,
    subCategory: ShoeCategory.BOOT,
    stockStatus: [
      {
        color: Colors.BROWN,
        stockNumber: 1,
        available: false,
        price: 380,
      },
      {
        color: Colors.RED,
        stockNumber: 3,
        available: true,
        price: 400,
      },
    ],
    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/shoe-boot-rainbow-brown/shoe-boot-rainbow-brown-01.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/shoe-boot-rainbow-brown/shoe-boot-rainbow-brown-02.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/shoe-boot-rainbow-brown/shoe-boot-rainbow-brown-03.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/shoe-boot-rainbow-brown/shoe-boot-rainbow-brown-04.jpg",
        color: Colors.BROWN,
      },
      {
        url: "img/products/shoe-boot-rainbow-red/shoe-boot-rainbow-red-01.jpg",
        color: Colors.RED,
      },
      {
        url: "img/products/shoe-boot-rainbow-red/shoe-boot-rainbow-red-02.jpg",
        color: Colors.RED,
      },
      {
        url: "img/products/shoe-boot-rainbow-red/shoe-boot-rainbow-red-03.jpg",
        color: Colors.RED,
      },
      {
        url: "img/products/shoe-boot-rainbow-red/shoe-boot-rainbow-red-04.jpg",
        color: Colors.RED,
      },
    ],
  },
  {
    id: 12,
    name: "Roxana",
    category: Category.SHOES,
    subCategory: ShoeCategory.BOOT,
    stockStatus: [
      {
        color: Colors.GOLD,
        stockNumber: 16,
        available: true,
        price: 510,
      },
      {
        color: Colors.RED,
        stockNumber: 3,
        available: true,
        price: 520,
      },
    ],
    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/shoe-boot-roxana-gold/shoe-boot-roxana-gold-01.jpg",
        color: Colors.GOLD,
      },
      {
        url: "img/products/shoe-boot-roxana-gold/shoe-boot-roxana-gold-02.jpg",
        color: Colors.GOLD,
      },
      {
        url: "img/products/shoe-boot-roxana-gold/shoe-boot-roxana-gold-03.jpg",
        color: Colors.GOLD,
      },
      {
        url: "img/products/shoe-boot-roxana-red/shoe-boot-roxana-red-01.jpg",
        color: Colors.RED,
      },
      {
        url: "img/products/shoe-boot-roxana-red/shoe-boot-roxana-red-02.jpg",
        color: Colors.RED,
      },
      {
        url: "img/products/shoe-boot-roxana-red/shoe-boot-roxana-red-03.jpg",
        color: Colors.RED,
      },
      {
        url: "img/products/shoe-boot-roxana-red/shoe-boot-roxana-red-04.jpg",
        color: Colors.RED,
      },
    ],
  },
  {
    id: 13,
    name: "Marjan",
    category: Category.SHOES,
    subCategory: ShoeCategory.SANDAL,
    stockStatus: [
      {
        color: Colors.BLUE,
        stockNumber: 9,
        available: true,
        price: 105,
      },
      {
        color: Colors.GREEN,
        stockNumber: 5,
        available: true,
        price: 110,
      },
    ],
    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/shoe-sandal-marjan-blue/shoe-sandal-marjan-blue-01.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/shoe-sandal-marjan-blue/shoe-sandal-marjan-blue-02.jpg",
        color: Colors.BLUE,
      },
      {
        url: "img/products/shoe-sandal-marjan-green/shoe-sandal-marjan-green-01.jpg",
        color: Colors.GREEN,
      },
      {
        url: "img/products/shoe-sandal-marjan-green/shoe-sandal-marjan-green-02.jpg",
        color: Colors.GREEN,
      },
    ],
  },
  {
    id: 14,
    name: "Melani",
    category: Category.SHOES,
    subCategory: ShoeCategory.SANDAL,
    stockStatus: [
      {
        color: Colors.RED,
        stockNumber: 6,
        available: true,
        price: 295,
      },
    ],
    description:
      "Our latest creation is designed and engineered with inspiration from the Streamline Moderne style of the Art Deco movement. A cylindrical form with gorgeously curved details. The collection has 3 designs: Bo Ivy and Bo Soft Strap, three sister bags having the same body with different straps. Specially developed in-house, the strap of the Bo Ivy is a piece of art. Emulating an ivy branch, the unique curvy strap has a laser-cut skeleton built from stainless steel underneath the leather and is shaped by hand as a last step of the production process.",
    materials: "Hand-designed from Pixels and Lines. Microsuede interior.",
    shippingAndReturn:
      "Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!",
    dimensions: "w:31.5 X h:15 X d:6.5 cm (12.5 X 6 X 2.5 in)",
    careInstructions:
      "Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.",
    images: [
      {
        url: "img/products/shoe-sandal-melani-red/shoe-sandal-melani-red-01.jpg",
        color: Colors.RED,
      },
      {
        url: "img/products/shoe-sandal-melani-red/shoe-sandal-melani-red-02.jpg",
        color: Colors.RED,
      },
      {
        url: "img/products/shoe-sandal-melani-red/shoe-sandal-melani-red-03.jpg",
        color: Colors.RED,
      },
      {
        url: "img/products/shoe-sandal-melani-red/shoe-sandal-melani-red-04.jpg",
        color: Colors.RED,
      },
    ],
  },
];
