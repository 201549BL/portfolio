import React, { useEffect, useState } from "react";
import Button from "../shared/button";
import ExternalLink from "../shared/external-link";
import { useTheme } from "next-themes";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

const Header = ({ onContactClick }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

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
        {isMounted ? (
          <Button
            style="hollow"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <div className="flex items-center gap-2">
              <span>Theme</span>
              {resolvedTheme === "dark" ? (
                <MoonIcon className="text-[1.5em] animate-fadein" />
              ) : (
                <SunIcon className="text-[1.5em] animate-fadein" />
              )}
            </div>
          </Button>
        ) : (
          <Button
            style="hollow"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <div className="flex items-center gap-2">
              <span>Theme</span>
              <MoonIcon className="text-[1.5em] opacity-0" />
            </div>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
