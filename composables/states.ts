import { FilterList, FilterRange } from "data";
import { getCategory } from "./../modules/product/category";
import { getSubMenuItems } from "./../modules/product/subCategory";

export const useProductColor = () =>
  useState<FilterList[]>("productColor", () => []);

export const useProductAvailability = () =>
  useState<FilterList[]>("productAvailability", () => []);

export const useProductType = () =>
  useState<FilterList[]>("productType", () => []);

export const useMainCategory = () =>
  useState<string[]>("mainCategory", () => getCategory());

export const useSubCategory = () =>
  useState<object[]>("subCategory", () => getSubMenuItems());

export const usePreviewImage = () => useState<string>("previewImage", () => "");

export const useProductPrice = () =>
  useState<FilterRange>("productPrice", () => {
    return { from: 1, to: 9999 };
  });
