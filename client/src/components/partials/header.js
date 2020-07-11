import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import tulogoright from "../../../src/resources/tulogoright.png";
import nssicon from "../../../src/resources/nsslogoright.png";
import {
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { connect } from "react-redux";

const Component = ({ user }) => {
  return <Header user={user} />;
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    let user = this.props.user;
    return (
      <div id="main_header_tusc">
        {user.login === undefined ||
        user.login.error === true ||
        user.login.isAuth === null ? (
          <div className="admin1">
            <Link className="container" to="/login">
              Admin Login
            </Link>
          </div>
        ) : (
          <div className="admin2">
            <Link className="container" to="/logout">
              Admin LogOut
            </Link>
            <Link className="container" to="/add-admin">
              Add Admin
            </Link>
            <Link className="container" to="/registration">
              Registration
            </Link>
          </div>
        )}

        <div className="jumbotron1">
          

          <a
            className="ieeelogo"
            href="https://nss.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          > 
              <img
                src={nssicon}
                alt="ieee logo"
                height="90px"
                width="90px"
              />
          </a>

          <div class="tusc_main_header">
            <p>Welcome to NSS Tezpur University</p>
          </div>
         
          <a
            className="logoright"
            href="http://www.tezu.ernet.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={tulogoright}
              alt="tu logo"
              height="80px"
              width="80px"
            />
          </a>
          
          
        </div>
        <div className="tabs">
          <Nav tabs id="navtabs">
            <NavItem className="navItemNavbar">
              <NavLink id="home">
                <Link className="container" id="home1" to="/">
                  {" "}
                  HOME{" "}
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="navItemNavbar">
              <NavLink id="events">
                <Link className="container" id="events1" to="/events">
                  EVENTS
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="navItemNavbar">
              <NavLink id="gallery">
                <Link className="container" id="gallery1" to="/gallery">
                  GALLERY
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="navItemNavbar">
              <NavLink id="events">
              <Link className="container" id="contact1" to="/working-team">
                    MEMBERS
                  </Link>
              </NavLink>
            </NavItem>
            <NavItem className="navItemNavbar">
              <NavLink id="contact">
                <Link className="container" id="contact1" to="/contact">
                  CONTACT
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Component);
