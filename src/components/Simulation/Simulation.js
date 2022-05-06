import * as React from "react";
import CodeMirror from "@uiw/react-codemirror";
import roleParser from "./../../images/role-parser.PNG";
import theoryGrammar from "./../../images/theory-grammar.PNG";
import thoerySentence from "./../../images/theory-sentence.PNG";
import { useHistory, useParams } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Simulation = () => {
  const history = useHistory();
  const { id } = useParams();
  const [data, setData] = React.useState("");
  // console.log("simu", id);
  React.useEffect(() => {
    if (id && id !== "5") {
      const code = require(`./../../data/code/${id}.txt`);
      fetch(code)
        .then((r) => r.text())
        .then((text) => {
          setData(text);
        });
    }
  });
  return (
    <div>
      <h1>Simulation</h1>
      {id === "5" ? (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={6}
          style={{
            padding: "10px",
            width: "800px",
            margin: "0 auto",
            backgroundColor: "#3a9eb7",
            marginBottom: "20px",
          }}
        >
          <Slider style={{ height: "500px" }}>
            <Slide index={0}>
              <h2
                style={{
                  color: "white",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                phase 1
              </h2>
              <img
                src={require("./../../images/parse-1.jpeg")}
                style={{ width: "100%", height: "400px" }}
                alt="ij"
              />
            </Slide>
            <Slide index={1}>
              <h2
                style={{
                  color: "white",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                phase 2
              </h2>
              <img
                style={{ width: "100%", height: "400px" }}
                src={require("./../../images/parse-2.jpeg")}
                alt="ij"
              />
            </Slide>
            <Slide index={2}>
              <h2
                style={{
                  color: "white",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                phase 3
              </h2>
              <img
                style={{ width: "100%", height: "400px" }}
                src={require("./../../images/parse-3.jpeg")}
                alt="ij"
              />
            </Slide>
            <Slide index={3}>
              <h2
                style={{
                  color: "white",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                phase 4
              </h2>
              <img
                style={{ width: "100%", height: "400px" }}
                src={require("./../../images/parse-4.jpeg")}
                alt="ij"
              />
            </Slide>
            <Slide index={4}>
              <h2
                style={{
                  color: "white",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                phase 5
              </h2>
              <img
                style={{ width: "100%", height: "400px" }}
                src={require("./../../images/parse-5.jpeg")}
                alt="ij"
              />
            </Slide>
            <Slide index={5}>
              <h2
                style={{
                  color: "white",
                  textAlign: "center",
                  textTransform: "capitalize",
                }}
              >
                phase 6
              </h2>
              <img
                style={{ width: "100%", height: "400px" }}
                src={require("./../../images/parse-6.jpeg")}
                alt="ij"
              />
            </Slide>
          </Slider>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <ButtonBack
              style={{
                padding: "10px 15px",
                border: "none",
                outline: "none",
                fontWeight: "600",
                letterSpacing: "1px",
                borderRadius: "10px",
              }}
            >
              Back
            </ButtonBack>
            <ButtonNext
              style={{
                padding: "10px 15px",
                border: "none",
                outline: "none",
                fontWeight: "600",
                letterSpacing: "1px",
                borderRadius: "10px",
                marginLeft: "15px",
              }}
            >
              Next
            </ButtonNext>
          </div>
        </CarouselProvider>
      ) : (
        <>
          <h2>Source code</h2>
          <CodeMirror
            value={data}
            readOnly="true"
            height="400px"
            width="700px"
            margin="0 auto"
          />
          <h2>Output</h2>
          <img
            height="400px"
            src={require(`./../../images/output-${id}.jpeg`)}
            alt="hi"
          />
        </>
      )}
    </div>
  );
};
export default Simulation;
