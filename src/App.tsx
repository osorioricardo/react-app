import ListGroup from "./components/ListGroup";
import { AiFillAlipayCircle } from "react-icons/ai";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <AiFillAlipayCircle color="red" size="40px" />
    </div>
  );
}

export default App;
