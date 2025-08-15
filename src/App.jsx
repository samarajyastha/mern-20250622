import Card from "./Card";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import ComponentA from "./components/ComponentA";
import ProductsTable from "./components/ProductsTable";

function App() {
  const [count, setCount] = useState(0);

  const titleRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(
    () => {
      console.log(count);

      console.log(titleRef);

      return () => {
        // cleanup
      };
    },
    [count] // dependencies (state variable)
  );

  return (
    <div>
      <ProductsTable />

      <span>count: {count}</span>

      <ComponentA />
      <hr />
      <button onClick={() => setCount(count + 1)}>click</button>

      <h1 ref={titleRef}>Hello world</h1>

      <input type="text" ref={inputRef} />

      <Card title="Samsung galaxy s24" brand="Samsung" price={1899} />
      <Card title="OnePlus Nord" brand="OnePlus" price={699} />
      <Card title="Iphone 14" brand="Apple" price={1499} />
      <Card title="Redmi Note 9 Pro" brand="MI" />
    </div>
  );
}

export default App;
