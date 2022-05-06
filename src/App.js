import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Container from "@mui/material/Container";

import { useHistory, useParams, useLocation } from "react-router-dom";
import { Header, Experiment, ExperimentList } from "./components";

const App = () => {
  const history = useHistory();

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/exp/:page/:id" component={Experiment} />

        <Route path="/" component={ExperimentList} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
