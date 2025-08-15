import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div style={{ border: "1px solid", padding: "1rem" }}>
      <h2>Component B</h2>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
