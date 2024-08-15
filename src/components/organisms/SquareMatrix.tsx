import Square from "../molecules/Square";

interface IProps {
  matrix: string[];
}

const SquareMatrix: React.FC<IProps> = ({ matrix }) => {
  return (
    <div className="square-matrix">
      {matrix.map((square, index) => (
        <Square key={index} square={square} squareIdx={index} />
      ))}
    </div>
  );
};

export default SquareMatrix;
