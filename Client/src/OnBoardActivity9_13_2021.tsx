import React from "react";
import style from "./style.module.css";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import {
  setInput,
  setOutput,
  selectActivity,
} from "./features/activity/activitySlice";

const OnBoardActivity9_13_2021 = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectActivity);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setInput({ value }));
  };

  const handleRot13Request = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/rot13/decode?message=${state.input}`)
      .then((response) => {
        console.log(response);
        const value = "Rot13 result: " + response.data;
        dispatch(setOutput({ value }));
      })
      .catch((err) => console.log("There was an error: " + err));
  };

  return (
    <React.Fragment>
      <div className={`${style.center} ${style.fitHeight}`}>
        <form>
          <label>Input Text:</label>
          <br></br>
          <input onChange={handleChange}></input>
          <br></br>
          <button onClick={handleRot13Request}>Java: Rot13</button>
          <br></br>
          <button onClick={() => {}}>JavaScript: Decimal to Hex</button>
          <br></br>
          <h1>{state.output}</h1>
          <br></br>
        </form>
      </div>
    </React.Fragment>
  );
};

export default OnBoardActivity9_13_2021;
