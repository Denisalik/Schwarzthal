import React  from "react";
import { DataSet, Network } from "vis-network";
import { useAppSelector } from "../../lib/hooks";

const Statistics: React.FC = () => {
  const graph = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const history = useAppSelector((state) => state.history);
  // const nodes = new DataSet([
  //   { id: 1, label: "Node 1" },
  //   { id: 2, label: "Node 2" },
  //   { id: 3, label: "Node 3" },
  //   { id: 4, label: "Node 4" },
  //   { id: 5, label: "Node 5" },
  // ]);
  //
  // // create an array with edges
  // const edges = new DataSet([
  //   { from: 1, to: 3 },
  //   { from: 1, to: 2 },
  //   { from: 2, to: 4 },
  //   { from: 2, to: 5 },
  //   { from: 3, to: 3 },
  // ]);
  //
  // // create a network
  // const container = graph.current;
  // const data = {
  //   nodes,
  //   edges,
  // };
  // const options = {};
  // const network = new Network(container, data, options);
  return (
    <div
      ref={graph}
      style={{
        width: "600px",
        height: "400px",
        border: "1px solid lightgray",
      }}
    />
  );
};

export default Statistics;
