import ComponentC from "./ComponentC";

const ComponentB = ({ numB = 0 }) => {
  return (
    <div>
      <ComponentC numC={numB} />
    </div>
  );
};

export default ComponentB;
