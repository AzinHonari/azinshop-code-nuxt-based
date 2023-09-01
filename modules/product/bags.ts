import { Card, products, Category, BagCategory } from "@/data";

export const getAllBags = () => {
  const arr: Card[] = [];

  products
    .filter((item) => {
      return item.category === Category.BAGS;
    })
    .map((item) => {
      arr.push({
        id: item?.id,
        name: item?.name,
        price: item.stockStatus.find((x) => x.color === item.images[0].color)
          ?.price,
        image: item.images[0].url,
        category: item?.category,
        subCategory: item?.subCategory,
      });
    });

  return arr;
};

export const getBagsByCategory = (bagCategory: BagCategory) => {
  return products
    .filter((item) => {
      return item.category === Category.BAGS;
    })
    .filter((item) => {
      return item.subCategory === bagCategory;
    })
    .map((item) => {
      return {
        id: item?.id,
        name: item?.name,
        price: item?.stockStatus.find((x) => x.color === item?.images[0].color)
          ?.price,
        image: item?.images[0].url,
        category: item?.category,
        subCategory: item?.subCategory,
      };
    });
};

export const getBagById = (bagCategory: BagCategory, id: number) => {
  return products
    .filter((item) => {
      return item.category === Category.BAGS;
    })
    .filter((item) => {
      return item.subCategory === bagCategory;
    })
    .filter((item) => {
      return item.id === id;
    })
    .map((item) => item);
};
