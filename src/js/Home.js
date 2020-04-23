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
                className="text-white text-center py-5 px-4"
                style={{
                  backgroundImage: `url(images/home.jpg)`,
                  height: "100vh",
                  backgroundSize: "cover"
                }}>
                <MDBCol className="py-5 jumboCard">
                  <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold opaque"><strong>Metalúrgica GAF</strong> </MDBCardTitle>
                  <p className="mx-5 mb-5 opaque">
                    Acá pondrías tu texto inspirador. Somos una empresa que se dedica a...
                  </p>
                  <MDBLink to="/work" className="homeLink h3-responsive"><strong>Ver Galería</strong></MDBLink>
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer >
    )
  }
}


export default Home;