import { Card, Product, products, Colors, SelectionList } from "@/data";
import { getProductFromSelectionList } from "./allProducts";

export const getSuggestionList = () => {
  const suggestionList: SelectionList[] = [
    {
      productId: 7,
      imageIndex: 0,
      productColor: Colors.BLACK,
    },

    {
      productId: 14,
      imageIndex: 3,
      productColor: Colors.RED,
    },

    {
      productId: 13,
      imageIndex: 0,
      productColor: Colors.BLUE,
    },
    {
      // chain
      productId: 6,
      imageIndex: 0,
      productColor: Colors.BLUE,
    },
    {
      productId: 10,
      imageIndex: 2,
      productColor: Colors.GREEN,
    },
    {
      productId: 2,
      imageIndex: 0,
      productColor: Colors.GREEN,
    },
    {
      productId: 12,
      imageIndex: 0,
      productColor: Colors.GOLD,
    },
    {
      productId: 8,
      imageIndex: 0,
      productColor: Colors.BROWN,
    },
  ];

  return getProductFromSelectionList(suggestionList);
};
