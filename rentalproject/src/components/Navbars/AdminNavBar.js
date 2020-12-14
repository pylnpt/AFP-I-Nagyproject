import React, {Component} from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";


// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container
} from "reactstrap";


class AdminNavbar extends Component{

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render(){
    return(
    <Navbar
      className={classnames("fixed-top",this.navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
        <NavbarBrand
            data-placement="bottom"
            to="/car-list-page"
            tag={Link}
          >
            Autók listája
          </NavbarBrand>

          <NavbarBrand
            data-placement="bottom"
            to="/car-add-page"
            tag={Link}
          >
            Autó hozzáadása/szerkesztése
          </NavbarBrand>  

          <NavbarBrand
            data-placement="bottom"
            tag={Link}
            onClick={this.onLogoutClick}
          >
            Kijelentkezés
          </NavbarBrand>
                
          <button
            aria-expanded={this.navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: this.navbarCollapse
            })}
            onClick={this.toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
      </Container>
    </Navbar>
    )
  }
}

AdminNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(AdminNavbar);