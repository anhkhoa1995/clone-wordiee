import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import { RootState } from "../../stores/rootReducer";

interface IProps {
  square: string;
  squareIdx: number;
}

const Square: React.FC<IProps> = ({ square, squareIdx }) => {
  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
  };

  const correctWord = useSelector(
    (state: RootState) => state.squareMatrix.correctWord
  );

  const state = useSelector((state: RootState) => state.squareMatrix.try);

  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setwrong] = useState<boolean>(false);

  const findAllIndex = (str: string, value: string): number[] => {
    const array: number[] = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === value) {
        array.push(i);
      }
    }
    return array
  };
  
  useEffect(() => {
    if (square !== "" && correctWord.includes(square)) {
      const indexArray = findAllIndex(correctWord, square)
      indexArray.forEach(index => {
        if (index === squareIdx || index === squareIdx % 5) {
          setCorrect(true);
        } else {
          setAlmost(true);
        }
      })
    } else {
      setwrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setwrong(false);
    };
  }, [correctWord, square, squareIdx]);

  const divID: string = correct
    ? "correct"
    : almost
    ? "almost"
    : wrong
    ? "wrong"
    : "";

  return (
    <motion.div animate={square ? "filled" : "unfilled"} variants={variants}>
      <div
        id={Math.floor(squareIdx / 5) < state ? divID : undefined}
        className="square"
      >
        {square}
      </div>
    </motion.div>
  );
};

export default Square;
