import { useDispatch, useSelector } from "react-redux";
import ComponentD from "./ComponentD";
import { useEffect } from "react";
import { setCube } from "../redux/counterSlice";

const ComponentC = () => {
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCube(count * count * count));
  }, [count]);

  return (
    <div style={{ border: "1px solid", padding: "1rem" }}>
      <h2>Component C</h2>
      <p>Value of A: {count}</p>
      <p>Value of C: {count * count * count}</p>

      <ComponentD />
    </div>
  );
};

export default ComponentC;
