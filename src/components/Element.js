import React, { useState } from "react";

export default function Element(props) {
  // let mystyle= {
  //     color:'red'
  // }
  const handleclick = () => {
    console.log("button clicked");
    let newText = text.toUpperCase();
    settext(newText);
  };
  const handColor = () => {
    console.log("button clicked");
    if (mystyle.color === "black") {
      setmystyle({
        color: "red",
      });
    } else {
      setmystyle({
        color: "black",
      });
    }
    props.showAlert("colour has changed.", "success");
  };
  const handleOnchange = (event) => {
    console.log("on change calling");
    settext(event.target.value);
  };
  const handclear = () => {
    settext("");
    props.showAlert("Cleared.", "success");
  };
  const handCopy = () => {
    var text = document.getElementById("text");
    text.select();
    text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Tect cpied to clipboard.", "success");
  };

  const [text, settext] = useState("Enter name here");
  const [mystyle, setmystyle] = useState({
    color: "black",
  });
  return (
    <div>
      <div
        className={`container text-${props.mode === "light" ? "dark" : "light"} my-3`}
      >
        <h4>Enter Text:</h4>
        <textarea
          type="text"
          className={`form-control text-${props.mode === "light" ? "dark" : "light"} bg-${props.mode === "light" ? "light" : "dark"}`}
          value={text}
          style={mystyle}
          name="text"
          id="text"
          onChange={handleOnchange}
          rows="8"
        />
        <br />
        <button className="btn btn-primary mx-1 my-2" onClick={handleclick}>
          To Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handColor}>
          Change colour
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handclear}>
          Clear text
        </button>
        <div className="container my-3">
          <h1>Text summry</h1>
          <p>
            text contains {text.split(" ").length} words and {text.length}{" "}
            characters.
          </p>
        </div>
      </div>
    </div>
  );
}
