import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 20,
    margin: "20px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 30px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
    fontFamily: "cursive",
    fontSmooth: "auto",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    color: "black",
    fontFamily: "cursive",
    padding: "5px",
    textAlign: "left",
    fontSize: "16px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  button1: {
    backgroundColor: "Orange",
    fontFamily: "cursive",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "darkorange",
    },
  },

  button2: {
    backgroundColor: "lightblue",
    fontFamily: "cursive",
    borderRadius: "10px",
    color: "black",
    "&:hover": {
      backgroundColor: "darkblue",
      color: "white",
    },
  },
}));
