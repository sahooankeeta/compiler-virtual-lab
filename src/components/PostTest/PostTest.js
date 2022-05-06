import * as React from "react";
import data from "./../../data/pre_post_qs";
import { useHistory, useParams } from "react-router-dom";
const PostTest = () => {
  const history = useHistory();
  const { id } = useParams();
  const [viewResult, setViewResult] = React.useState(false);

  let a = [];
  const q = data.postTest[id - 1];

  for (let i = 0; i < q.length; i++) a.push("false");
  const [ans, setAns] = React.useState(a);

  const selectOption = (e) => {
    let t = ans;
    t[e.target.name] = e.target.value;
    setAns(t);
  };
  const submit = () => {
    console.log(ans);
    setViewResult(true);
  };
  const reset = () => {
    setViewResult(false);
    setAns(a);
    const radio = document.querySelectorAll("input[type='radio']");
    radio.forEach((btn) => {
      if (btn.checked === true) btn.checked = false;
    });
    // console.log(radio);
  };
  return (
    <div>
      <h1>PostTest</h1>
      <ol>
        {q.map((item, index) => (
          <li key={`mcq-${index}`}>
            <p style={{ fontWeight: "700", fontSize: "18px" }}>
              {item.question}
            </p>
            {item.options.map((option, id) => (
              <p key={`mcq-qs-${id}`}>
                <input
                  type="radio"
                  name={index}
                  id={`${index}-${id}`}
                  value={option.isCorrect}
                  onClick={selectOption}
                />
                <label for={`${index}-${id}`}>{option.option}</label>
              </p>
            ))}
          </li>
        ))}
      </ol>
      <button
        onClick={submit}
        disabled={viewResult}
        style={{
          padding: "8px 12px",
          border: "none",
          outline: "none",
          backgroundColor: "#222d32",
          color: "white",
          borderRadius: "20px",
          fontWeight: "600px",
          letterSpacing: "1px",
          marginRight: "12px",
          cursor: "pointer",
        }}
      >
        SUBMIT
      </button>
      <button
        disabled={!viewResult}
        onClick={reset}
        style={{
          padding: "8px 12px",
          border: "none",
          outline: "none",
          backgroundColor: "#222d32",
          color: "white",
          borderRadius: "20px",
          fontWeight: "600px",
          letterSpacing: "1px",
          cursor: "pointer",
        }}
      >
        TRY AGAIN
      </button>
      {viewResult && (
        <div>
          <h2>Results :</h2>
          <ol style={{ fontSize: "20px" }}>
            {ans.map((item) => (
              <li>{item === "true" ? "Correct" : "Wrong"}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};
export default PostTest;
