import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup(props: ListGroupProps) {
  const items = props.items;
  const heading = props.heading;
  //useState is a Hook for the state of ListGroup, I can now use the above variables in the code below
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("");

  //const message = items.length === 0 ? <p>No item found</p> : null;
  const getMessage = () => {
    //return items.length === 0 ? <p>No item found</p> : null;
    return items.length === 0 && <p>No item found</p>;
  };

  const printItem = (item: string) => {
    console.log(`Clicked: ${item}`);
  };

  const handleClick = (event: MouseEvent) => console.log(event); // handler for mouse event

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          //<li className="list-group-item" key={item} onClick={handleClick}>
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //onClick={() => printItem(item)}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
/*function ListGroup() { import { Fragment } from "react/jsx-runtime";
    return (
      // fragment avoids having another element in the dom
      <Fragment>
        <h1>List</h1>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </Fragment>
    );
  }*/

export default ListGroup;
