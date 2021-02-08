import { Reducer } from "redux";
import { ActionsTypes, ICartState } from "./types";
import produce from 'immer';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: []
};

const cart: Reducer<ICartState> = (state=INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type){
      case ActionsTypes.addProductToCartSuccess:
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item => 
          product.id === item.product.id)

        if(productInCartIndex >= 0){
          draft.items[productInCartIndex].quantity++;
        } else{
          draft.items.push({
            product,
            quantity: 1,
          })
        }
        break;
      case ActionsTypes.addProductToCartFailure:
        draft.failedStockCheck.push(action.payload.productId)
        break;
      default:
        return draft;
    }
  });
}

export default cart;