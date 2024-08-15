import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import { IRoot } from "../../types/square-matrix";

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
    (state: IRoot) => state.squareMatrix.correctWord
  );
  const position = useSelector((state: IRoot) => state.squareMatrix.pos);
  const state = useSelector((state: IRoot) => state.squareMatrix.try);

  let wordLastIndex = 4;
  let currentPos =
    position === 5
      ? wordLastIndex
      : position > 5 && position % 5 === 0
      ? wordLastIndex
      : (position % 5) - 1;

  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setwrong] = useState<boolean>(false);

  useEffect(() => {
    if (correctWord[currentPos] === square) {
      setCorrect(true);
    } else if (!correct && square !== "" && correctWord.includes(square)) {
      setAlmost(true);
    } else if (!correct && square !== "" && !correctWord.includes(square)) {
      setwrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setwrong(false);
    };
  }, [correctWord, currentPos, square, correct]);

  const divID: any = correct
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
