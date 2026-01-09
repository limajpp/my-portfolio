import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <main>
        <section>
          <NavBar items={["About", "Projects", "Contacts"]} />
        </section>
      </main>
    </>
  );
}

export default App;
