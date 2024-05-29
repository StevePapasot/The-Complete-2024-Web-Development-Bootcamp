import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img src={img + "?greyscale"} />
      <img
        className="food-img"
        src="https://tse1.mm.bing.net/th?id=OIP.BGnKbVqAc2LUwq5akAHv3wHaE8&pid=Api&P=0&h=220"
      />
      <img
        className="food-img"
        src="https://tse3.mm.bing.net/th?id=OIP.TsjX5R6YQjq8bSqSVW3qyQHaE7&pid=Api&P=0&h=220"
      />
      <img
        className="food-img"
        src="https://tse3.mm.bing.net/th?id=OIP.8UeIFPMYwIErE1ShRYB9QAHaEo&pid=Api&P=0&h=220"
      />
    </div>
  </div>,
  document.getElementById("root")
);
