import { useState } from "react";
import "./NavBarItem.css";
import { ToggleLeft, ToggleRight } from "lucide-react";

interface NavBarItemProps {
  navPosition: string;
  reference?: string;
  items?: string[];
  text?: string;
  isComponent?: boolean;
}

export default function NavBarItem({
  navPosition,
  reference,
  items,
  text,
  isComponent,
}: NavBarItemProps) {
  const [toggleTheme, setToggleTheme] = useState(false);
  let navItem = undefined;

  // Change the "Home" text into a "home" component from lucide-react later...
  if (
    (navPosition === "nav-left" || navPosition === "nav-right") &&
    !isComponent
  ) {
    navItem = (
      <div id={navPosition}>
        <a className="nav-item-anchor" href={reference}>
          {text}
        </a>
      </div>
    );
  } else if (navPosition === "nav-center") {
    navItem = (
      <div id={navPosition}>
        {items?.map((itemText, index) => {
          return (
            <a key={index} className="nav-item-anchor" href={reference}>
              {itemText}
            </a>
          );
        })}
      </div>
    );
  } else if (isComponent) {
    navItem = (
      <div id={navPosition}>
        <span onClick={() => setToggleTheme((prev) => !prev)}>
          {!toggleTheme ? (
            <ToggleLeft className="nav-item-switch" />
          ) : (
            <ToggleRight className="nav-item-switch" />
          )}
        </span>
      </div>
    );
  }

  return navItem;
}
