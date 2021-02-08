import { ActionsTypes, IProduct } from "./types";

export const addProductToCartRequest = (product: IProduct) => {
  return {
    type: ActionsTypes.addProductToCartRequest,
    payload: {
      product
    }
  }
};

export const addProductToCartSuccess = (product: IProduct) => {
  return {
    type: ActionsTypes.addProductToCartSuccess,
    payload: {
      product
    }
  }
};

export const addProductToCartFailure = (productId: number) => {
  return {
    type: ActionsTypes.addProductToCartFailure,
    payload: {
      productId
    }
  }
};
