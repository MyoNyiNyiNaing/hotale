import React from "react";

const Button = ({ text, onClick, color, padding, bgColor, border }) => {
  return (
    <button
      className={`bg-${bgColor}-500 hover:bg-${color}-700 font-semibold text-[13px] tracking-[2px] border-${border} ${padding} text-white`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  onClick: () => {},
  bgColor: "transparent",
  padding: "px-5 py-3",
  border: "2",
  color: "blue",
};

export default Button;
