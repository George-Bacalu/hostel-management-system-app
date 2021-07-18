export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  // state - whether the user is logged in
  // action - action performed when the user logs in
  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.user,
    };
  }
};

export default reducer;
