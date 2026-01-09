import "./NavBar.css";
import NavBarItem from "./NavBarItem/NavBarItem";

interface NavBarProps {
  items: string[];
}

export default function NavBar({ items }: NavBarProps) {
  return (
    <nav id="navbar">
      <NavBarItem navPosition="nav-left" reference="/" text="Home" />
      <NavBarItem navPosition="nav-center" reference="#" items={items} />
      {/* Change "text" prop to "switch" symbol from lucide-react later... */}
      <NavBarItem navPosition="nav-right" text="Light/Dark Mode" />
    </nav>
  );
}
