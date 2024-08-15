import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import Button from "../../components/atoms/Button";
import Tag from "../../components/atoms/Tag";
import Input from "../../components/atoms/Input";
import Alert from "../../components/molecules/Alert";
import Keyboard from "../../components/organisms/Keyboard";
import SquareMatrix from "../../components/organisms/SquareMatrix";

import { IAlert } from "../../types/common";

import { RootState } from "../../stores/rootReducer";
import { setCorrectWord, resetMatrix } from "../../stores/actions/matrixAction";



const Board: React.FC = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const number = useSelector((state: RootState) => state.squareMatrix.number);
  const [finalResult, setFinalResult] = useState<string>("");

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [propAlert, setPropAlert] = useState<IAlert | null>(null);

  const getWordsByLength = async (length: number) => {
    try {
      const response = await fetch(
        `https://api.datamuse.com/words?sp=${"?".repeat(length)}&max=5000`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const fiveLetterWords = data.filter(
        (word: any) => word.word.length === length
      );
      let randomNum = Math.floor(Math.random() * fiveLetterWords.length);
      dispatch(setCorrectWord(fiveLetterWords[randomNum].word.toUpperCase()));
    } catch (error) {
      console.error("Error fetching words:", error);
    }
  };

  useEffect(() => {
    getWordsByLength(5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  // Board 5x5
  const matrix = useSelector((state: RootState) => state.squareMatrix.matrix);
  const correctWord = useSelector(
    (state: RootState) => state.squareMatrix.correctWord
  );

  console.log(3, correctWord);

  // const backHome = () => {
  //   navigate("/");
  // };

  const resetGame = () => {
    setFinalResult("");
    dispatch(resetMatrix(0));
  };

  const handleChangeResult = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFinalResult(e.target.value.toUpperCase());
  };

  const submitResult = () => {
    if (finalResult === correctWord) {
      setShowAlert(true);
      setPropAlert({
        type: "success",
        title: "Congratulation",
        children: (
          <Tag>
            Perfect! The word is <strong>{correctWord}</strong>
          </Tag>
        ),
      });
    } else {
      setShowAlert(true);
      setPropAlert({
        type: "danger",
        title: "Failed",
        children: <><Tag>Wrong!</Tag><Tag>Let's try again!</Tag></>,
      });
    }
  };

  const alertOK = () => {
    setShowAlert(false);
    setPropAlert(null);
    setFinalResult("");
    dispatch(resetMatrix(1));
  };

  const alertClose = () => {
    setShowAlert(false);
    setPropAlert(null);
  };

  const alertClickOutSide = () => {
    setShowAlert(false);
    setPropAlert(null);
  };

  return (
    <div className="board-container">
      <div className="round">
        <Tag tag="h3">
          Round {number + 1 < 10 ? `0${number + 1}` : number + 1}
        </Tag>
        {number + 1 >= 10 && (
          <Tag tag="label">If you play a lot, you will get addicted</Tag>
        )}
        <div className="final-result">
          <Tag tag="label">Final result</Tag>
          <Input value={finalResult} onChange={handleChangeResult} />
          <Button onClick={submitResult}>
            <i className="fa-solid fa-paper-plane"></i>
          </Button>
        </div>
      </div>
      <SquareMatrix matrix={matrix} />
      <Keyboard />
      <div className="panigation">
        {/* <Button onClick={backHome}>
          <i className="fa-solid fa-dice-d6"></i>Home
        </Button> */}
        <Button onClick={resetGame}>
          <i className="fa-solid fa-rotate"></i>Reset
        </Button>
      </div>
      {showAlert && propAlert && finalResult === correctWord && (
        <Alert
          type={propAlert?.type}
          title={propAlert?.title}
          button="single"
          handleOK={alertOK}
          handleOKTitle="Next round"
          handleClose={alertClose}
          handleClickOutside={alertClickOutSide}
        >
          {propAlert?.children}
        </Alert>
      )}
      {
        showAlert && propAlert && finalResult !== correctWord && (
          <Alert
            type={propAlert?.type}
            title={propAlert?.title}
            handleClose={alertClose}
            handleClickOutside={alertClickOutSide}
          >
            {propAlert?.children}
          </Alert>
        )
      }
    </div>
  );
};

export default Board;
