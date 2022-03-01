import React from "react";
import "../Home2/Home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Tracks a change in which page currently is showing
  const location = useLocation();
  // // User is fetched from the dispatched data we stored at the local storage
  // // from the authReducer (reducers/auth.js)
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  // // A log in effecter, what happens after log in.
  // useEffect(() => {
  //   // If a token of a logged in user found
  //   const token = user?.token;

  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, [location]);

  // const logOut = () => {
  //   dispatch({ type: "LOGOUT" });
  //   navigate("/");
  //   setUser(null);
  // };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/");
  };

  const user = localStorage.getItem("token");

  return (
    <div>
      <header className="u-clearfix u-header u-header" id="sec-ddba">
        <div className="u-clearfix u-sheet u-sheet-1">
          <h1 className="u-align-left u-custom-font u-font-ubuntu u-text u-text-default u-text-palette-1-dark-1 u-text-1">
            &nbsp; <span className="u-icon u-icon-1"></span>Little
            Turing&nbsp;&nbsp;
            <span className="u-file-icon u-icon u-icon-2">
              <img src={require("./images/50245091.png")} alt="" />
            </span>
          </h1>
          <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
            <div
              className="menu-collapse u-custom-font u-font-raleway"
              style={{
                fontSize: "1rem",
                letterSpacing: "0px",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            ></div>
            <div className="u-custom-menu u-nav-container">
              <ul className="u-custom-font u-font-raleway u-nav u-spacing-30 u-unstyled u-nav-1">
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90"
                    href="/"
                    style={{ padding: "10px 28px" }}
                  >
                    Home
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90"
                    href="/topics"
                    style={{ padding: "10px 28px" }}
                  >
                    Topics
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90"
                    href="/playground"
                    style={{ padding: "10px 28px" }}
                  >
                    Code Sandbox
                  </a>
                </li>
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90"
                    href="/blog"
                    style={{ padding: "10px 28px" }}
                  >
                    Blog
                  </a>
                </li>

                {!user ? (
                  <li className="u-nav-item">
                    <a
                      className="u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90"
                      href="/login"
                      style={{ padding: "10px 28px" }}
                    >
                      Log In
                    </a>
                  </li>
                ) : (
                  <li className="u-nav-item">
                    <a
                      className="u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-grey-90"
                      href="javascript:"
                      onClick={handleLogout}
                      style={{ padding: "10px 28px" }}
                    >
                      Log Out
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
    // <AppBar
    //   className={classes.appBar}
    //   position="relative"
    //   color="inherit"
    //   maxwidth="lg"
    // >
    //   <div className={classes.brandContainer}>
    //     <Typography className={classes.heading} variant="h3" align="center">
    //       Little Ada
    //     </Typography>
    //   </div>
    //   {/* Toolbar will contain the logic and show whether an user is logged in or not */}
    //   <Toolbar className={classes.toolbar}>
    //     {
    //       // if the user is logged in, show a few user info.
    //       user ? (
    //         //  div of profile info
    //         <div className={classes.profile}>
    //           {/* Avatar is a user icon or picture to be shown*/}
    //           <Avatar
    //             className={classes.purple}
    //             alt={user.result.name}
    //             src={user.result.imageURL}
    //           >
    //             {user.result.name.charAt(0)}
    //           </Avatar>

    //           {/* Typography for the username */}
    //           <Typography className={classes.userName} variant="h6">
    //             {user.result.name}
    //           </Typography>

    //           {/* A logout button */}
    //           <Button
    //             className={classes.button2}
    //             variant="contained"
    //             onClick={logOut}
    //           >
    //             Log out
    //           </Button>
    //         </div>
    //       ) : (
    //         // If the user is nott logged in, the login button will redirect to the authentication
    //         // page. This button is not exactly a button, but rather a linker to another page.
    //         <Button
    //           component={Link}
    //           to="/signIn"
    //           className={classes.button1}
    //           variant="contained"
    //           disabled={user ? true : false}
    //         >
    //           Log in
    //         </Button>
    //       )
    //     }
    //   </Toolbar>
    // </AppBar>
  );
};

export default Navbar;
