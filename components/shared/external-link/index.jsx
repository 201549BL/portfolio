import React from "react";

const styles = {
  default:
    "bg-th-contrast hover:bg-th-contrast-shaded text-th-background border border-th-contrast",
  hollow:
    "hover:bg-th-background-shaded text-th-contrast border border-th-contrast",
  borderless: "hover:underline underline-offset-4 text-th-contrast px-0",
};

const behaviors = {
  "same-tab": "",
  "new-tab": {
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

const ExternalLink = ({
  href,
  behavior = "new-tab",
  style = "default",
  className,
  children,
}) => {
  return (
    <a
      href={href}
      {...behaviors[behavior]}
      className={` ${styles[style]} rounded p-2 
      ${className}`}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
