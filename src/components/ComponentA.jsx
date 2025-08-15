import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const dispatch = useDispatch();

  const { count, cube } = useSelector((state) => state.counter);

  function increaseCounter() {
    dispatch(increment());
  }

  function decreaseCounter() {
    dispatch(decrement());
  }

  return (
    <div style={{ border: "1px solid", padding: "1rem" }}>
      <h2>Component A</h2>
      <p>Value of A: {count}</p>
      <p>Value of C: {cube}</p>

      <div style={{ border: "1px solid", padding: "1rem" }}>
        <button onClick={increaseCounter}>Increase counter</button>
        <button onClick={decreaseCounter}>Decrease counter</button>
      </div>

      <ComponentB />
    </div>
  );
};

export default ComponentA;
