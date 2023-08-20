import ListGroup from "./components/ListGroup";
import Button from "./components/Button/Button";
import { AiFillAlipayCircle } from "react-icons/ai";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>Hello</Button>
    </div>
  );
}

export default App;
