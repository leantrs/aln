export const CART_SUCCESS = "@CART/CART_SUCCESS";

const cartkrn = (listaCarrinho) => {
  //.log(listaCarrinho);
  return async (dispatch) => {
    dispatch({
      type: "CART_SUCCESS",
      listaCarrinho,
    });
  };
};

export default cartkrn;
