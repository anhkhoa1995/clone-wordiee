export const getInitialState = () => {
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
  export default initialState;
  