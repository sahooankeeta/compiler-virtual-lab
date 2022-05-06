import * as React from "react";
import { useHistory, useParams } from "react-router-dom";
import aims from "./../../data/aim";
const Aim = () => {
  const history = useHistory();
  const { id } = useParams();

  return (
    <div>
      <h1>Aim</h1>
      <p style={{ fontSize: "20px" }}>{aims[`aim-${id}`]}</p>
    </div>
  );
};
export default Aim;
