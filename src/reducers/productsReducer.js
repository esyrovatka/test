import { ADD_TO_SHOP } from "../actionsTypes";

const initialState = {
  productsList: []
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SHOP:
      const newProductsList = [...state.productsList];
      newProductsList.push(action.payload);
      return { ...state, productsList: newProductsList };
    default:
      return state;
  }
};

export default product;
