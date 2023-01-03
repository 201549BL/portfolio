import React from "react";

const styles = {
  default:
    "bg-th-contrast hover:bg-th-contrast-shaded text-th-background border border-th-contrast",
  hollow:
    "hover:bg-th-background-shaded text-th-contrast border border-th-contrast",
  borderless: "hover:bg-th-background-shaded text-th-contrast",
};

const noOnClickCallbackGiven = () => {
  console.warn("No Callback supplied to the button onClickHandler");
};

const Button = ({
  style = "default",
  onClick = noOnClickCallbackGiven,
  children,
}) => {
  return (
    <button
      className={`${styles[style]} rounded p-2 `}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
