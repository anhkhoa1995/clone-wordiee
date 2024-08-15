import { createSlice } from "@reduxjs/toolkit";

// Hàm để khởi tạo trạng thái ban đầu
const getInitialState = () => {
  return {
    matrix: new Array(25).fill(""),
    try: 0,
    pos: 0,
    key: "",
    correctWord: "",
    number: 0,
  };
};

const initialState = getInitialState();

export const matrixSlice = createSlice({
  name: "matrix",
  initialState,
  reducers: {
    setCorrectWord: (state, action) => {
      state.correctWord = action.payload;
    },
    setMatrix: (state, action) => {
      state.matrix = action.payload;
    },
    incTry: (state) => {
      state.try += 1;
    },
    incPos: (state) => {
      state.pos++;
    },
    decPos: (state) => {
      state.pos--;
    },
    setKey: (state, action) => {
      state.key = action.payload;
    },
    resetMatrix: (state, action) => {
      state.number += action.payload;
      state.matrix = new Array(25).fill("");
      state.try = 0;
      state.pos = 0;
      state.key = "";
      if (action.payload > 0) state.correctWord = "";
    },
  },
});

export const {
  setCorrectWord,
  setMatrix,
  setKey,
  incPos,
  decPos,
  incTry,
  resetMatrix,
} = matrixSlice.actions;
export default matrixSlice.reducer;
