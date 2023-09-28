import { useState } from "react";

export default function TextControlsExample(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("UpperCase Was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    // console.log("LowerCase Was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCrClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          UPPER CASE
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          lower case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCrClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>Average time required to Read</p>
        <p>{0.08 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
