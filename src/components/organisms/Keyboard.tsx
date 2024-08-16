import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tag from "../atoms/Tag";
import Key from "../molecules/Key";
import Alert from "../molecules/Alert";

import { IAlert } from "../../types/common";

import { RootState } from "../../stores/rootReducer";
import {
  decPos,
  incTry,
  setMatrix,
  setKey,
} from "../../stores/actions/matrixAction";
import Loader from "../atoms/Loader";

const Keyboard: React.FC = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [propAlert, setPropAlert] = useState<IAlert | null>(null);

  const state = useSelector((state: RootState) => state.squareMatrix.try);
  const matrix = useSelector((state: RootState) => state.squareMatrix.matrix);
  const position = useSelector((state: RootState) => state.squareMatrix.pos);
  const key = useSelector((state: RootState) => state.squareMatrix.key);

  let matrix5Words: string = `${matrix[position - 5]}${matrix[position - 4]}${
    matrix[position - 3]
  }${matrix[position - 2]}${matrix[position - 1]}`.toLowerCase();
  const rows = ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"];

  const [waiting, setWaiting] = useState<boolean>(false);

  const clickEnter = async () => {
    setWaiting(true);
    const check = await checkSpelling(matrix5Words);
    setTimeout(() => {
      if (key !== "Enter") {
        if (check) {
          if (
            position % 5 === 0 &&
            position !== 0 &&
            (position - 1) / 5 > state
          ) {
            dispatch(incTry());
          }
          dispatch(setKey("Enter"));
        } else {
          setShowAlert(true);
          setPropAlert({
            type: "warning",
            title: "Warning",
            children: (
              <>
                <Tag>Invalid words!</Tag>
                <Tag>Let's try again!</Tag>
              </>
            ),
          });
        }
      }
      setWaiting(false);
    }, 600);
  };

  const clickBack = () => {
    if (Math.floor((position - 1) / 5) < state) return;
    else {
      const newMatrix = [...matrix];
      newMatrix[position - 1] = "";
      dispatch(decPos());
      dispatch(setMatrix(newMatrix));
    }
  };

  const checkSpelling = async (word: string) => {
    const response = await fetch("https://api.languagetool.org/v2/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        text: word,
        language: "en-US",
      }),
    });

    const result = await response.json();
    return result.matches.length === 0;
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
    <div className="keyboard">
      {rows.map((row, index) => (
        <div className="row" key={index}>
          {index === 2 && (
            <div className="letter-row" onClick={clickBack}>
              <Tag tag="span" className="letter letter-keyback">
                <i className="fa-solid fa-delete-left"></i>
              </Tag>
            </div>
          )}
          {row.split(" ").map((letter, _index) => (
            <div className="letter-row" key={_index}>
              <Key letter={letter.toUpperCase()} />
            </div>
          ))}
          {index === 2 && (
            <div className="letter-row" onClick={clickEnter}>
              <Tag tag="span" className="letter letter-keyenter">
                Enter
              </Tag>
            </div>
          )}
        </div>
      ))}
      {showAlert && propAlert && (
        <Alert
          type={propAlert?.type}
          title={propAlert?.title}
          handleClose={alertClose}
          handleClickOutside={alertClickOutSide}
        >
          {propAlert?.children}
        </Alert>
      )}
      {waiting && <Loader />}
    </div>
  );
};

export default Keyboard;
