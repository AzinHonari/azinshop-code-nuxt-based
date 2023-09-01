import {
  Card,
  FilterList,
  Category,
  ShoeCategory,
  BagCategory,
  Colors,
  FilterRange,
} from "@/data";
import { getAllProducts } from "./allProducts";

export const getColorByQuantity = (
  _category?: Category,
  _subCategory?: ShoeCategory | BagCategory
) => {
  return getAllProducts(_category, _subCategory).reduce(
    (accumulator: FilterList[], currentValue) => {
      const resultItem = accumulator.find(
        (x) => x.title === currentValue.color
      );

      if (resultItem) resultItem.quantity += 1;
      else
        accumulator.push({
          title: currentValue.color,
          quantity: 1,
          selected: false,
        });
      return accumulator;
    },
    []
  );
};

export const getAvailabilityByQuantity = (
  _category?: Category,
  _subCategory?: ShoeCategory | BagCategory
) => {
  const arr: FilterList[] = [];
  arr.push(
    { title: "In stock", quantity: 0, selected: false },
    { title: "Out of stock", quantity: 0, selected: false }
  );

  return getAllProducts(_category, _subCategory).reduce(
    (accumulator: FilterList[] = arr, currentValue) => {
      const resultItem = accumulator.find(
        (x) =>
          x.title === (currentValue.available ? "In stock" : "Out of stock")
      );

      if (resultItem) resultItem.quantity += 1;
      else
        accumulator.push({
          title: currentValue.available ? "In stock" : "Out of stock",
          quantity: 1,
          selected: false,
        });
      return accumulator;
    },
    []
  );
};

export const getTypeByQuantity = (
  _category?: Category,
  _subCategory?: ShoeCategory | BagCategory
) => {
  return getAllProducts(_category, _subCategory).reduce(
    (accumulator: FilterList[], currentValue, currentIndex, source) => {
      const resultItem = accumulator.find(
        (x) => x.title === currentValue.category
      );

      if (resultItem) resultItem.quantity += 1;
      else
        accumulator.push({
          title: currentValue.category,
          quantity: 1,
          selected: false,
        });
      return accumulator;
    },
    []
  );
};

export const getPriceRange = (
  _category?: Category,
  _subCategory?: ShoeCategory | BagCategory
) => {
  // const range: FilterRange = { from: 0, to: 9999 };
  // const prices: (number | undefined)[] = getAllProducts(
  //   _category,
  //   _subCategory
  // ).map((x) => x.price);
  // if (prices != undefined) {
  //   console.log(Math.min(...prices));
  //   console.log(Math.max(...prices));
  // }
};
