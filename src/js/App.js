import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home"
import Work from "./Work"
import Contact from "./Contact"
import NavbarPage from "./Navbar";
import About from "./About"
import '../css/App.css';

class App extends React.Component {
  state = {
    routes: [
      {
        to: "/",
        content: "Inicio",
        icon: "home",
        component: Home
      },
      {
        to: "/about",
        content: "Nosotros",
        icon: "info-circle",
        component: About
      },
      {
        to: "/work",
        content: "Galería",
        icon: "cogs",
        component: Work
      },
      {
        to: "/contact",
        content: "Contacto",
        icon: "map-marker-alt",
        component: Contact
      }
    ],
    activeRoute: "Inicio"
  }

  setActiveRoute(routeContent) {
    this.setState({
      routes: this.state.routes,
      activeRoute: routeContent
    });
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            <NavbarPage
              routes={this.state.routes}
              activeRoute={this.state.activeRoute}
              onClick={(content) => this.setActiveRoute(content)} />
          </header>
          <Switch>
            {this.state.routes.map(route => (
              <Route exact path={route.to} component={route.component} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
