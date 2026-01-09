import "./NavBarItem.css";

interface NavBarItemProps {
  navPosition: string;
  reference?: string;
  items?: string[];
  text?: string;
}

export default function NavBarItem({
  navPosition,
  reference,
  items,
  text,
}: NavBarItemProps) {
  return (
    <>
      {navPosition === "nav-center" ? (
        <div id={navPosition}>
          {items?.map((itemText, index) => {
            return (
              <button className="nav-button" key={index}>
                {/* Adjust the redirecting here later... */}
                <a className="nav-button-anchor" href="#">
                  {itemText}
                </a>
              </button>
            );
          })}
        </div>
      ) : (
        <div id={navPosition}>
          <button className="nav-button">
            <a className="nav-button-anchor" href={reference}>
              {text}
            </a>
          </button>
        </div>
      )}
    </>
  );
}
