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
      <NavBarItem navPosition="nav-right" isComponent={true} />
    </nav>
  );
}
