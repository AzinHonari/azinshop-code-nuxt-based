import { Category } from "./category";
import { BagCategory } from "./bagCategory";
import { ShoeCategory } from "./shoeCategory";
import { Colors } from "./colors";

export interface Image {
  url: string;
  color: Colors;
}

export interface StockStatus {
  color: Colors;
  stockNumber?: number;
  available?: boolean;
  price?: number;
}

export interface Product {
  id: number;
  name: string;
  category: Category;
  subCategory: BagCategory | ShoeCategory;
  stockStatus: StockStatus[];
  description: string;
  materials: string;
  shippingAndReturn: string;
  dimensions: string;
  careInstructions: string;
  images: Image[];
}

export interface Card {
  id?: number;
  name?: string;
  price?: number;
  category: Category;
  subCategory: BagCategory | ShoeCategory;
  image?: string;
  color?: Colors;
  stockNumber?: number;
  available?: boolean;
}

export interface Properties {
  id: number;
  name: string;
  price: number;
  category: Category;
  subCategory: BagCategory | ShoeCategory;
  images: Image[];
  color?: Colors;
  stockNumber?: number;
  available?: boolean;
  description?: string;
  materials?: string;
  shippingAndReturn?: string;
  dimensions?: string;
  careInstructions?: string;
}

export interface SelectionList {
  productId: number;
  productColor: Colors;
  imageIndex: number;
}
