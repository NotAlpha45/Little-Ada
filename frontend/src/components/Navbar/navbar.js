import React from "react";
import { AppBar, Avatar, Typography, Toolbar, Button } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  const user = null; // A mock user.

  return (
    <AppBar className={classes.AppBar} position="static" color="inherit">
      <div>
        <Typography className={classes.heading} variant="h2" aligh="center">
          Navbar
        </Typography>
      </div>
      {/* Toolbar will contain the logic and show whether an user is logged in or not */}
      <Toolbar className={classes.toolbar}>
        {// if the user is logged in, show a few user info.
        user ? (
          //  div of profile info
          <div className={classes.profile}>
            {/* Avatar is a user icon or picture to be shown*/}
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageURL}
            >
              {user.result.name.charAt(0)}
            </Avatar>

            {/* Typography for the username */}
            <Typography className={classes.username} variant="h6">
              {user.result.name}
            </Typography>

            {/* A logout button */}
            <Button
              className={classes.logout}
              variant="contained"
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          // If the user is nott logged in, the login button will redirect to the authentication
          // page. This button is not exactly a button, but rather a linker to another page.
          <Button component={Link} to="/auth" color="primary">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
