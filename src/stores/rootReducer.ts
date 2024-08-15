// stores/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import squareMatrixReducer from "./reducers/matrixReducer";

const rootReducer = combineReducers({
  squareMatrix: squareMatrixReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
