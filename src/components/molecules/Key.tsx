import { useDispatch, useSelector } from "react-redux";

import Tag from "../atoms/Tag";

import { RootState } from "../../stores/rootReducer";
import { incPos, setMatrix, setKey } from "../../stores/actions/matrixAction";


interface IProps {
  letter: string;
}

const Key: React.FC<IProps> = ({ letter }) => {
  const dispatch = useDispatch();
  const matrix = useSelector((state: RootState) => state.squareMatrix.matrix);
  const position = useSelector((state: RootState) => state.squareMatrix.pos);
  const key = useSelector((state: RootState) => state.squareMatrix.key);
  const state = useSelector((state: RootState) => state.squareMatrix.try);

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
