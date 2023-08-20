import Button from "./components/Button.tsx";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
