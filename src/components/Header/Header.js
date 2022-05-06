import * as React from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div style={{ cursor: "pointer" }} onClick={() => history.push("/")}>
      <header className={classes.header}>
        <img
          src="https://www.iemcrp.com/iemEn/Logo_iem280718.jpg"
          alt="iem-logo"
        />
        <h2 className={classes.h2}>COMPILER DESIGN LAB</h2>
      </header>
    </div>
  );
};
export default Header;
