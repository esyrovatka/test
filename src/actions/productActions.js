import { ADD_TO_SHOP } from "../actionsTypes";

export const addToShop = (name, price, count) => dispatch => {
  dispatch({
    type: ADD_TO_SHOP,
    payload: {
      name,
      price,
      count
    }
  });
};
