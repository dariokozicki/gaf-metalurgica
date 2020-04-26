import React from "react";
import {
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
  constructor(props) {
    super(props);
    const routes = [
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
    ]
    const activeRoute = this.getContentByRoute(routes);
    this.state = {
      routes: routes,
      activeRoute: activeRoute
    }
  }

  getContentByRoute(routes) {
    const route = routes.find(route => route.to === window.location.pathname);
    return route ? route.content : "Inicio";
  }


  setActiveRoute(routeContent) {
    this.setState({
      routes: this.state.routes,
      activeRoute: routeContent
    });
  }

  render() {
    return (
      <div>
        <header>
          <NavbarPage
            routes={this.state.routes}
            activeRoute={this.state.activeRoute}
            onClick={(content) => this.setActiveRoute(content)} />
        </header>
        <Switch>
          {this.state.routes.map(route => (
            <Route exact path={route.to} component={route.component} key={route.to} />
          ))}
        </Switch>
      </div>
    );
  }

}

export default App;
