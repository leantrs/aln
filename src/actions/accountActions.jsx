export const ACCOUNT_SUCCESS = "@ACCOUNT/ACCOUNT_SUCCESS";

const signUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: ACCOUNT_SUCCESS,
      user,
    });
  };
};

export default signUser;
