import React from "react";

const Numbers = () => {
  const buttons = Array.from({ length: 9 }, (value, index) => index + 1).map(
    (idx) => {
      return (
        <li>
          <button>{idx}</button>
        </li>
      );
    }
  );
  return (
    <div id="numbers">
      <ol>{buttons}</ol>
    </div>
  );
};

export default Numbers;
