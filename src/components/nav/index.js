import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ImageLoader from "../animation/imageloader";
import AppBar from "@material-ui/core/AppBar";
import MoreIcon from "@material-ui/icons/MoreVert";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

// Nav component
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
// Top navigation for all pages
function ButtonAppBar(props) {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  function change(e) {
    setTimeout(function () {
      if (props.handleSwitch) {
        console.log("hsh");
        props.handleSwitch(window.location.hash);
      }
    }, 10);
  }

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <div>
      {/* mobile start*/}
      <Menu
        id={mobileMenuId}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div>
          <NavLink
            exact
            id="home"
            className="mobile-navLink-btn navigation"
            activeClassName="active"
            to="/"
          >
            <MenuItem className="menuBg" onClick={handleClose}>
              Home
            </MenuItem>
          </NavLink>
          <NavLink
            id="About"
            className="mobile-navLink-btn"
            activeClassName="active"
            to="/about"
            onClick={change}
          >
            <MenuItem className="menuBg" onClick={handleClose}>
              About
            </MenuItem>
          </NavLink>
          {/* <NavLink
            id="web-development"
            className="mobile-navLink-btn"
            activeClassName="active"
            to="/gallery/web-development"
            onClick={change}
          >
            <MenuItem className="menuBg" onClick={handleClose}>
              Web Development
            </MenuItem>
          </NavLink> */}
          <NavLink
            id="contact-navigation"
            className="mobile-navLink-btn"
            activeClassName="active"
            to="/contact"
            onClick={change}
          >
            <MenuItem className="menuBg" onClick={handleClose}>
              Contact Us
            </MenuItem>
          </NavLink>
        </div>
      </Menu>
      {/* mobile end */}
    </div>
  );
  console.log(process.env);
  return (
    <div className={classes.root}>
      <AppBar id="navBar" className="plaid" position="static">
        <Toolbar className="navLink">
          <Typography id="title" variant="h3" className={classes.grow}>
            <NavLink exact className="navLink-title" to="/">
              <ImageLoader
                // src={process.env.PUBLIC_URL + "/images/png/sunbelt_logo.png"}
                src={"/images/png/sunbelt_logo.png"}
                alt="Sunbelt Patio Covers"
              />
            </NavLink>
          </Typography>
          <div className="sectionDesktop">
            <NavLink
              exact
              id="home"
              className="navLink-btn"
              activeClassName="active"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              id="About"
              className="mobile-navLink-btn"
              activeClassName="active"
              to="/about"
              onClick={change}
            >
              <MenuItem className="menuBg" onClick={handleClose}>
                About
              </MenuItem>
            </NavLink>
            <NavLink
              id="contact-navigation"
              className="mobile-navLink-btn"
              activeClassName="active"
              to="/contact"
              onClick={change}
            >
              <MenuItem className="menuBg" onClick={handleClose}>
                Contact Us
              </MenuItem>
            </NavLink>
            {/* <NavLink
              id="illustration"
              className="navLink-btn"
              activeClassName="active"
              to="/gallery/illustration"
              onClick={change}
            >
              Illustration
            </NavLink> */}
            {/* <NavLink
              id="web-development"
              className="navLink-btn"
              activeClassName="active"
              to="/gallery/web-development"
              onClick={change}
            >
              Web Development
            </NavLink> */}
          </div>
          <div className="sectionMobile">
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          {renderMobileMenu}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
