import * as React from "react";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
const ExperimentList = () => {
  const history = useHistory();
  const classes = useStyles();
  const n = [
    "Experiment 1",
    "Experiment 2",
    "Experiment 3",
    "Experiment 4",
    "Experiment 5",
  ];
  return (
    <Grid container justifyContent="center">
      <Grid item sm={12} md={6} lg={4}>
        {n.map((item, id) => (
          <h2
            key={`exp-${id}`}
            className={classes.list}
            onClick={() => history.push(`/exp/aim/${id + 1}`)}
          >
            {item}
          </h2>
        ))}
      </Grid>
    </Grid>
  );
};
export default ExperimentList;
