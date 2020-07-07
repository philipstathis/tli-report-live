/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Nav } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
          </Nav>
          <div className="copyright">
            © {new Date().getFullYear()} made with{" "}
            <i className="tim-icons icon-heart-2" /> using the template from {" "}
            <a
              href="https://www.creative-tim.com/?ref=bdr-user-archive-footer"
              target="_blank"
            >
              Creative Tim
            </a>{" "}
            for a better web.
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
