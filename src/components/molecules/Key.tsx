import { useDispatch, useSelector } from "react-redux";

import Tag from "../atoms/Tag";

import { IRoot } from "../../types/square-matrix";

import { incPos, setMatrix, setKey } from "../../stores/matrixSlice";

interface IProps {
  letter: string;
}

const Key: React.FC<IProps> = ({ letter }) => {
  const dispatch = useDispatch();
  const matrix = useSelector((state: IRoot) => state.squareMatrix.matrix);
  const position = useSelector((state: IRoot) => state.squareMatrix.pos);
  const key = useSelector((state: IRoot) => state.squareMatrix.key);
  const state = useSelector((state: IRoot) => state.squareMatrix.try);

  const chooseLetter = () => {
    if (position >= 30) return;
    else if (key === "Enter") {
      const newMatrix = [...matrix];
      newMatrix[position] = letter;
      dispatch(setMatrix(newMatrix));
      dispatch(incPos());
      dispatch(setKey(""));
    } else {
      if (Math.floor(position / 5) > state) {
        return;
      }
      const newMatrix = [...matrix];
      newMatrix[position] = letter;
      dispatch(setMatrix(newMatrix));
      dispatch(incPos());
    }
  };

  return (
    <Tag tag="span" className="letter letter-normal" onClick={chooseLetter}>
      {letter}
    </Tag>
  );
};

export default Key;
