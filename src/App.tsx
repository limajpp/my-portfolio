import BaseLayout from "./components/layout/BaseLayout/BaseLayout";

function App() {
  return (
    <BaseLayout>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "auto" }}>My Portfolio</h1>
      </main>
    </BaseLayout>
  );
}

export default App;
