import "./NavBar.css";
import NavBarItem from "./NavBarItem/NavBarItem";
import { House, ToggleLeft, ToggleRight } from "lucide-react";

export default function NavBar() {
  return (
    <nav id="navbar">
      <NavBarItem navPosition="nav-left" icon={House} />
      <NavBarItem
        navPosition="nav-center"
        reference="#"
        items={["About", "Projects", "Contacts"]}
      />
      <NavBarItem navPosition="nav-right" icons={[ToggleLeft, ToggleRight]} />
    </nav>
  );
}
