import React from "react";

/*'^','√' "←"(backspace) 버튼을 추가함*/
const Buttons = ({ onButtonClick }) => {
  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
    ["√", "^", "←", "AC"]
  ];

  //operator button인지 확인하는 함수
  const isOperator = (btn) =>
    ["+", "-", "*", "/", "=", "^", "√", "."].includes(btn);//기호 추가

  //special button 인지 확인하는 함수
  const isSpecial = (btn) => btn === "AC" || btn === "←";

  return (
    <div>
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", justifyContent: "center" }}>
          {row.map((btn) => (
            <button
              key={btn}
              onClick={() => onButtonClick(btn)}
              className={
                isSpecial(btn) //special button 클래스: AC, ←
                  ? "special-button"
                  : isOperator(btn)
                  ? "operator-button" //operator button 클래스: +, -, *, /, =, ^, √
                  : ""
              }
            >
              {btn}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Buttons;



