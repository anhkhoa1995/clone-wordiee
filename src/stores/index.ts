import { configureStore } from "@reduxjs/toolkit";
import matrixReducer from "./matrixSlice";

export default configureStore({
  reducer: {
    squareMatrix: matrixReducer,
  },
});
