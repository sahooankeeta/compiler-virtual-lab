import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  nav: {},
  navItem: {
    listStyle: "none",
    color: "#b8c7ce",
    listStyle: "none",
    display: "block",
    textTransform: "capitalize",
    fontSize: "20px",
    letterSpacing: "1px",
    padding: "10px",
    paddingLeft: "20px",
    "&:hover": {
      backgroundColor: "#1e282c",
      color: "white",
      cursor: "pointer",
    },
  },
}));
