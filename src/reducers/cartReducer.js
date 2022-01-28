const INITIAL_STATE = {
  listaCarrinho: { id: 1 },
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CART_SUCCESS":
      return {
        ...state,
        listaCarrinho: action.listaCarrinho,
      };

    default:
      return state;
  }
};

export default cartReducer;
