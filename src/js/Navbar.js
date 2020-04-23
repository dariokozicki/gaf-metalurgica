import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar color="elegant-color-dark" dark expand="md">
        <MDBNavbarBrand>
          <MDBIcon icon="tools" style={{ paddingRight: "10px" }} size="lg" />
          <strong className="white-text">GAF Metalúrgica</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            {this.props.routes.map(item => (
              <MDBNavItem
                active={this.props.activeRoute === item.content}
                onClick={() => this.props.onClick(item.content)}>
                <MDBNavLink to={item.to}>
                  <MDBIcon icon={item.icon} style={{ paddingRight: "10px" }} />
                  {item.content}
                </MDBNavLink>
              </MDBNavItem>
            ))}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;