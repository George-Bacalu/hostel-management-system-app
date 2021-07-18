export const initialState = {
  studentsData: [],
  user: null,
};

const reducer = (state, action) => {
  // user case:
  // state - whether the user is logged in
  // action - action performed when the user logs in
  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.user,
    };
  } else if (action.type === "SET_STUDENTS_STORAGE") {
    return {
      ...state,
    };
  }
};

export default reducer;
