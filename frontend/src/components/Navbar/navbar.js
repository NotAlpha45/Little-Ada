import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Typography, Toolbar, Button } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Tracks a change in which page currently is showing
  const location = useLocation();
  // User is fetched from the dispatched data we stored at the local storage
  // from the authReducer (reducers/auth.js)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  // A log in effecter, what happens after log in.
  useEffect(() => {
    // If a token of a logged in user found
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  return (
    <AppBar
      className={classes.appBar}
      position="relative"
      color="inherit"
      maxwidth="lg"
    >
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h3" align="center">
          Little Ada
        </Typography>
      </div>
      {/* Toolbar will contain the logic and show whether an user is logged in or not */}
      <Toolbar className={classes.toolbar}>
        {
          // if the user is logged in, show a few user info.
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
              <Typography className={classes.userName} variant="h6">
                {user.result.name}
              </Typography>

              {/* A logout button */}
              <Button
                className={classes.button2}
                variant="contained"
                onClick={logOut}
              >
                Log out
              </Button>
            </div>
          ) : (
            // If the user is nott logged in, the login button will redirect to the authentication
            // page. This button is not exactly a button, but rather a linker to another page.
            <Button
              component={Link}
              to="/signIn"
              className={classes.button1}
              variant="contained"
              disabled={user ? true : false}
            >
              Log in
            </Button>
          )
        }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
