import * as React from "react";
import { useHistory, useParams } from "react-router-dom";
const Procedure = () => {
  const history = useHistory();
  const { id } = useParams();
  if (id === "1")
    return (
      <div style={{ fontSize: "20px" }}>
        <ol>
          <li>Read the input string.</li>
          <li>
            Check whether the string is starting with &#96;/&#96; and check next
            character is &#96;/&#96; or&#96;*&#96;.
          </li>
          <li>If condition satisfies print comment.</li>
          <li>Else not a comment. </li>
        </ol>
      </div>
    );
  if (id === "2")
    return (
      <div style={{ fontSize: "20px" }}>
        <ol>
          <li>Read the input Expression.</li>
          <li>
            Check whether input is alphabet or digits then store it as
            identifier.
          </li>
          <li>If the input is an operator store it as a symbol.</li>
          <li>Check the input for keywords. </li>
        </ol>
      </div>
    );
  if (id === "3")
    return (
      <div style={{ fontSize: "20px" }}>
        <ol>
          <li>By using the transition diagram we verify input of the state.</li>
          <li>If the state recognize the given pattern rule.</li>
          <li>Then print string is accepted under a*/ a*b+/ abb..</li>
          <li>Else print string not accepted. </li>
        </ol>
      </div>
    );
  if (id === "4")
    return (
      <div style={{ fontSize: "20px" }}>
        <ol>
          <li>Read the given input string.</li>
          <li>
            Check the initial character of the string is numerical or any
            special character except &#96;_&#96; then print it is not a valid
            identifier.
          </li>
          <li>
            Otherwise print it as valid identifier if remaining characters of
            string does not contains any special characters except &#96;_&#96;.
          </li>
        </ol>
      </div>
    );
  if (id === "5")
    return (
      <div style={{ fontSize: "20px" }}>
        <ol>
          <li>The root node is always a node indicating start symbols.</li>
          <li>The derivation is read from left to right.</li>
          <li>The leaf node is always terminal nodes.</li>
          <li>The interior nodes are always the non-terminal nodes.</li>
        </ol>
      </div>
    );
};
export default Procedure;
