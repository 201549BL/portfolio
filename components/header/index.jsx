import React, { useEffect, useState } from "react";
import Button from "../shared/button";
import ExternalLink from "../shared/external-link";
import { useTheme } from "next-themes";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

const Header = ({ onContactClick }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <header className="h-16 flex justify-center gap-2 p-2 pr-8 ">
      <div className="flex gap-2 justify-end w-full max-w-screen-lg ">
        <ExternalLink
          style="default"
          className="h-full flex items-center"
          onClick={onContactClick}
          href="mailto:eirik.bjorndal@gmail.com"
        >
          Contact
        </ExternalLink>
        <Button
          style="hollow"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <div className="flex items-center gap-2">
            Theme{" "}
            {isMounted && theme === "dark" ? (
              <MoonIcon className="text-[1.5em]" />
            ) : (
              <SunIcon className="text-[1.5em]" />
            )}
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Header;
