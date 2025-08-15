import { useDispatch } from "react-redux";
import { incrementByValue } from "../redux/counterSlice";
import { useState } from "react";

const ComponentD = () => {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  function increaseByValue() {
    dispatch(incrementByValue(parseInt(value)));
  }

  console.log(value);

  return (
    <div style={{ border: "1px solid", padding: "1rem" }}>
      <h2>Component D</h2>
      <input
        type="number"
        name=""
        id=""
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={increaseByValue}>Increase by value</button>
    </div>
  );
};

export default ComponentD;
