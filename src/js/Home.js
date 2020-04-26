import React from "react";
import { MDBJumbotron, MDBLink, MDBContainer, MDBRow, MDBCol, MDBCardTitle } from "mdbreact";
import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <MDBContainer fluid style={{ padding: 0, margin: 0 }}>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron fluid style={{ padding: 0, margin: 0 }}>
              <MDBCol
                className="text-white text-center py-5 px-5"
                style={{
                  backgroundImage: `url(images/home.jpg)`,
                  height: "100vh",
                  backgroundSize: "cover",
                  position: "relative"
                }}>
                <MDBCol className="py-1 jumboCard">
                  <MDBCardTitle className="h1-responsive pt-3 m-3 font-bold opaque"><strong>Metalúrgica GAF</strong> </MDBCardTitle>
                  <p className="mx-5 mb-3 opaque">
                    Somos una empresa que se dedica a la fabricación de piezas de primera calidad.
                  </p>
                </MDBCol>
                <MDBLink to="/work" className="homeLink btn-lg btn btn-unique" >
                  <strong>Ver Galería</strong>
                </MDBLink>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer >
    )
  }
}


export default Home;