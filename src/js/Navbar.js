import React, { Component } from "react";
import {
  MDBNavbar, MDBLink, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
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
        <MDBLink to="/" style={{ margin: 0, padding: 0 }}>
          <MDBNavbarBrand>
            <MDBIcon className="white-text" icon="tools" style={{ paddingRight: "10px" }} size="lg" />
            <strong className="white-text">GAF Metalúrgica</strong>
          </MDBNavbarBrand>
        </MDBLink>
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