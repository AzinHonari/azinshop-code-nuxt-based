import {
  Card,
  products,
  Category,
  ShoeCategory,
  BagCategory,
  Properties,
  Image,
  SelectionList,
} from "@/data";

export const getAllProducts = (
  _category?: Category,
  _subCategory?: ShoeCategory | BagCategory
) => {
  const allProducts: Card[] = [];
  products
    .filter((x) => {
      if (_category === undefined) {
        return x;
      } else {
        return x.category === _category;
      }
    }, _category)
    .filter((x) => {
      if (_subCategory === undefined) {
        return x;
      } else {
        return x.subCategory === _subCategory;
      }
    }, _subCategory)
    .map((item) => {
      for (let i: number = 0; i < item.stockStatus.length; i++) {
        const currentColor = item?.stockStatus.find(
          (x, index) => index === i
        )?.color;
        allProducts.push({
          id: item?.id,
          name: item?.name,
          price: item?.stockStatus.find((x, index) => index === i)?.price,
          image:
            _subCategory == undefined
              ? item.images.find((x) => x.color === currentColor)?.url
              : `../${item.images.find((x) => x.color === currentColor)?.url}`,
          category: item?.category,
          subCategory: item?.subCategory,
          color: currentColor,
          stockNumber: item?.stockStatus.find((x, index) => index === i)
            ?.stockNumber,
          available: item?.stockStatus.find((x, index) => index === i)
            ?.available,
        } as Card);
      }
    });

  return allProducts;
};

export const getProductById = (_id: number) => {
  const allProducts: Card[] = [];
  products
    .filter((x) => x.id === _id, _id)
    .map((item) => {
      for (let i: number = 0; i < item.stockStatus.length; i++) {
        const currentColor = item?.stockStatus.find(
          (x, index) => index === i
        )?.color;
        allProducts.push({
          id: item?.id,
          name: item?.name,
          price: item?.stockStatus.find((x, index) => index === i)?.price,
          images: item.images.filter((x) => x.color === currentColor),
          category: item?.category,
          subCategory: item?.subCategory,
          color: currentColor,
          stockNumber: item?.stockStatus.find((x, index) => index === i)
            ?.stockNumber,
          available: item?.stockStatus.find((x, index) => index === i)
            ?.available,
          description: item.description,
          materials: item.materials,
          shippingAndReturn: item.shippingAndReturn,
          dimensions: item.dimensions,
          careInstructions: item.careInstructions,
        } as Properties);
      }
    });

  return allProducts;
};

export const getProductFromSelectionList = (_list: SelectionList[]) => {
  const arr: Card[] = [];
  let filteredProducts: {
    id: number;
    name: string;
    price: number;
    images: Image[];
    category: Category;
    subCategory: BagCategory | ShoeCategory;
  };

  _list.map((item) => {
    filteredProducts = getProductById(item.productId).find(
      (x) => x.color === item.productColor
    ) as Properties;
    arr.push({
      id: filteredProducts.id,
      name: filteredProducts.name,
      price: filteredProducts.price,
      image: filteredProducts.images[item.imageIndex].url,
      category: filteredProducts.category,
      subCategory: filteredProducts.subCategory,
    });
  });

  return arr;
};

export const getProductByFilter = (
  _category?: Category,
  _subCategory?: ShoeCategory | BagCategory,
  _priceFrom?: number,
  _priceTo?: number
) => {
  const isFilterByColor: string[] = [];

  useProductColor().value.filter((x) => {
    if (x.selected) {
      isFilterByColor.push(x.title!);
    }
  });

  let isFilterByAvailability: string = "";
  useProductAvailability().value.filter((x) => {
    if (x.selected) {
      isFilterByAvailability = x.title!;
    }
  });

  let isFilterByType: string[] = [];
  useProductType().value.filter((x) => {
    if (x.selected) {
      isFilterByType.push(x.title!);
    }
  });

  if (
    isFilterByColor.length &&
    isFilterByAvailability.length &&
    isFilterByType.length
  ) {
    const status =
      isFilterByAvailability === "In stock"
        ? true
        : isFilterByAvailability === "Out of stock"
        ? false
        : undefined;

    return getAllProducts(_category, _subCategory)
      .filter((item) => {
        if (status) {
          return item.available === true;
        } else if (!status) {
          return item.available === false;
        }
      })
      .filter((item) => {
        return isFilterByColor.find((c) => c === item.color);
      })
      .filter((item) => {
        return isFilterByType.find((c) => c === item.category);
      });
  } else if (isFilterByColor.length && isFilterByAvailability.length) {
    const status =
      isFilterByAvailability === "In stock"
        ? true
        : isFilterByAvailability === "Out of stock"
        ? false
        : undefined;

    return getAllProducts(_category, _subCategory)
      .filter((item) => {
        if (status) {
          return item.available === true;
        } else if (!status) {
          return item.available === false;
        }
      })
      .filter((item) => {
        return isFilterByColor.find((c) => c === item.color);
      });
  } else if (isFilterByColor.length && isFilterByType.length) {
    return getAllProducts(_category, _subCategory)
      .filter((item) => {
        return isFilterByColor.find((c) => c === item.color);
      })
      .filter((item) => {
        return isFilterByType.find((c) => c === item.category);
      });
  } else if (isFilterByType.length && isFilterByAvailability.length) {
    const status =
      isFilterByAvailability === "In stock"
        ? true
        : isFilterByAvailability === "Out of stock"
        ? false
        : undefined;

    return getAllProducts(_category, _subCategory)
      .filter((item) => {
        if (status) {
          return item.available === true;
        } else if (!status) {
          return item.available === false;
        }
      })
      .filter((item) => {
        return isFilterByType.find((c) => c === item.category);
      });
  } else if (isFilterByColor.length) {
    return getAllProducts(_category, _subCategory).filter((item) => {
      return isFilterByColor.find((c) => c === item.color);
    });
  } else if (isFilterByAvailability.length) {
    const status =
      isFilterByAvailability === "In stock"
        ? true
        : isFilterByAvailability === "Out of stock"
        ? false
        : undefined;

    return getAllProducts(_category, _subCategory).filter((item) => {
      if (status) {
        return item.available === true;
      } else if (!status) {
        return item.available === false;
      }
    });
  } else if (isFilterByType.length) {
    return getAllProducts(_category, _subCategory).filter((item) => {
      return isFilterByType.find((c) => c === item.category);
    });
  } else {
    return getAllProducts(_category, _subCategory);
  }
};
