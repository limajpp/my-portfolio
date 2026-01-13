import "./NavBarItem.css";
import { useState, type ComponentType } from "react";

type IconProps = { className?: string };

interface IconItem {
  navPosition: "nav-left";
  icon: ComponentType<IconProps>;
}

interface CenterItem {
  navPosition: "nav-center";
  items: string[];
  reference: string;
}

interface ToggleItem {
  navPosition: "nav-right";
  icons: [ComponentType<IconProps>, ComponentType<IconProps>];
}

type NavBarItemProps = IconItem | CenterItem | ToggleItem;

export default function NavBarItem(props: NavBarItemProps) {
  const [toggleTheme, setToggleTheme] = useState(false);

  switch (props.navPosition) {
    case "nav-left": {
      const Icon = props.icon;
      return (
        <div id="nav-left">
          <Icon className="nav-item" />
        </div>
      );
    }

    case "nav-center":
      return (
        <div id="nav-center">
          {props.items.map((item) => (
            <a key={item} className="nav-item-anchor" href={props.reference}>
              {item}
            </a>
          ))}
        </div>
      );

    case "nav-right": {
      const [Off, On] = props.icons;
      return (
        <div id="nav-right">
          <span onClick={() => setToggleTheme((p) => !p)}>
            {toggleTheme ? (
              <On className="nav-item" />
            ) : (
              <Off className="nav-item" />
            )}
          </span>
        </div>
      );
    }
  }
}
