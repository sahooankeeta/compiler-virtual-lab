import * as React from "react";
import { useHistory } from "react-router-dom";
const References = () => {
  const history = useHistory();
  return (
    <div>
      <h1>References</h1>

      <ol>
        <li>System Programming - D M Dhamdhare</li>
        <li> Compilers - Aho, Ullman and Sethi</li>
        <li>Compiler Design - Shantanu Chattopadhyay</li>
      </ol>
    </div>
  );
};
export default References;
