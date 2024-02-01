import { combineReducers } from "@reduxjs/toolkit";

const authReducer = (state = { isAuthenticated: true, user: "", loading: true }) => {
  // Handle actions for the auth slice if needed
  return state;
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
