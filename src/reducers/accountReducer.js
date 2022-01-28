import { ACCOUNT_SUCCESS } from "../actions/accountActions";

const INITIAL_STATE = {
  user: { id: 1 },
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCOUNT_SUCCESS:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default accountReducer;
