//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();
const costumStyle = {
  color: " ",
};

let greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
  costumStyle.color = "red";
} else if (currentTime < 18) {
  greeting = " Good Afternoon";
  costumStyle.color = "green";
} else {
  greeting = "Good Night";
  costumStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={costumStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
