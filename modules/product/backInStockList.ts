import { Colors, SelectionList } from "@/data";
import { getProductFromSelectionList } from "./allProducts";

export const getBackinstockList = () => {
  const backinstockList: SelectionList[] = [
    {
      productId: 6,
      productColor: Colors.PINK,
      imageIndex: 1,
    },

    {
      productId: 6,
      productColor: Colors.PINK,
      imageIndex: 2,
    },

    {
      productId: 14,
      productColor: Colors.RED,
      imageIndex: 0,
    },
  ];

  return getProductFromSelectionList(backinstockList);
};
