import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  list: {
    backgroundColor: "#3a9eb7",
    marginBottom: "10px",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "20px",
    textAlign: "center",
    letterSpacing: "2px",
    color: "white",
    "&:hover": {
      backgroundColor: "#305760",
    },
  },
}));
