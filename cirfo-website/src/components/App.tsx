import ListGroup from "./ListGroup";

// TIP: <ListGroup /> is equal to <ListGroup></ListGroup>
const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <ListGroup
        items={["Milan", "Rome", "Venice"]}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App; // export means that we can use the component somewhere else
