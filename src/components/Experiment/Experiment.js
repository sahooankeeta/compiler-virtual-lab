import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Container from "@mui/material/Container";
import {
  Aim,
  Theory,
  Navbar,
  PreTest,
  Simulation,
  PostTest,
  References,
  Procedure,
} from "./../";

import { useHistory, useParams } from "react-router-dom";
const Experiment = () => {
  const history = useHistory();
  const { id } = useParams();
  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "60vh" }}>
        <Navbar id={id} />
        <div style={{ flex: "1", padding: "15px" }}>
          <Switch>
            <Route path={`/exp/theory/:id`} exact component={Theory} />

            <Route path={`/exp/simulation/:id`} exact component={Simulation} />
            <Route path={`/exp/preTest/:id`} exact component={PreTest} />
            <Route path={`/exp/postTest/:id`} exact component={PostTest} />
            <Route path={`/exp/procedure/:id`} exact component={Procedure} />
            <Route path={`/exp/references/:id`} exact component={References} />

            <Route path="/exp/aim/:id" exact component={Aim} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Experiment;
