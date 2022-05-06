import * as React from "react";
import { useHistory, useParams } from "react-router-dom";
import useStyles from "./styles";
const Navbar = ({ id }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div
      style={{
        width: "230px",
        minHeight: "100%",
        backgroundColor: "#222d32",
      }}
    >
      <ul className={classes.nav} style={{ padding: "0" }}>
        <li
          className={classes.navItem}
          onClick={() => history.push(`/exp/aim/${id}`)}
        >
          aim
        </li>
        <li
          className={classes.navItem}
          onClick={() => history.push("/exp/theory/" + id)}
        >
          theory
        </li>
        <li
          className={classes.navItem}
          onClick={() => history.push("/exp/preTest/" + id)}
        >
          Pre-test
        </li>
        <li
          className={classes.navItem}
          onClick={() => history.push("/exp/procedure/" + id)}
        >
          procedure
        </li>
        <li
          className={classes.navItem}
          onClick={() => history.push("/exp/simulation/" + id)}
        >
          simulation
        </li>
        <li
          className={classes.navItem}
          onClick={() => history.push("/exp/postTest/" + id)}
        >
          Post-Test
        </li>
        <li
          className={classes.navItem}
          onClick={() => history.push("/exp/references/" + id)}
        >
          references
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
