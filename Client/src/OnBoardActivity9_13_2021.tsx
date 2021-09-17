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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setInput({ value }));
  };

  const handleRot13Request = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(
      `Sending GET request on route http://localhost:8080/rot13/decode?message=${state.input}`
    );
    axios
      .get(`http://localhost:8080/rot13/decode?message=${state.input}`)
      .then((response) => {
        console.log("Response from server: ", response);
        const value = "Rot13 result: " + response.data;
        dispatch(setOutput({ value }));
      })
      .catch((err) => console.log("There was an error: " + err));
  };

  const handleDec2OctRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(
      `Sending GET request on route http://localhost:8080/dec2oct/convert?decString=${state.input}`
    );
    axios
      .get(`http://localhost:8080/dec2oct/convert?decString=${state.input}`)
      .then((response) => {
        console.log("Response from server: ", response);
        const value = "Dec2Oct result: " + response.data;
        dispatch(setOutput({ value }));
      });
  };

  const longestNonrepeatingSubstring = (str: string): string => {
    let answer = "";
    let candidate = "";
    let seen = new Set();
    str.split("").forEach((char, idx) => {
        if (!seen.has(char)) {
          seen.add(char);
          candidate += char;
          if (candidate.length > answer.length) {
            answer = candidate;
          }
        } else {
          seen = new Set();
          seen.add(char);
          candidate = char;
        }
    });
    return answer;
  };

  return (
    <React.Fragment>
      <div className={`${style.center} ${style.fitHeight}`}>
        <form>
          <label>Input Text:</label>
          <br></br>
          <input onChange={handleInputChange}></input>
          <br></br>
          <button onClick={handleRot13Request}>Java: Rot13</button>
          <button onClick={handleDec2OctRequest}>Java: Decimal2Octal</button>
          <br></br>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              const value =
                "Longest Non-repeating substring result is: " +
                longestNonrepeatingSubstring(state.input);
              dispatch(setOutput({ value }));
            }}
          >
            JavaScript: Longest Nonrepeating Substring
          </button>
          <br></br>
          <h1>{state.output}</h1>
          <br></br>
        </form>
      </div>
    </React.Fragment>
  );
};

export default OnBoardActivity9_13_2021;
