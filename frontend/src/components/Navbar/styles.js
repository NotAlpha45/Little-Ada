import { makeStyles } from "@material-ui/core/styles";

// This is an entire configuration of a theme. For every component, we can use a
// theme component defined here as the className attribute. Example: className = {classes.AppBar}
// Here we imported the makeStyles as useStyles() and gave classes = useStyles()
export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
