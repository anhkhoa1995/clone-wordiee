interface ISquareMatrix {
  matrix: string[];
  try: number;
  pos: number;
  key: string;
  correctWord: string;
  number: number;
}

export interface IRoot {
  squareMatrix: ISquareMatrix;
}
