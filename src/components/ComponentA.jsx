import ComponentB from "./ComponentB";

const ComponentA = ({ numA = 0 }) => {
  return (
    <div>
      Value: {numA + 5}
      <ComponentB numB={numA + 5} />
    </div>
  );
};

export default ComponentA;
