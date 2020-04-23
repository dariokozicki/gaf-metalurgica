import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import '../css/App.css';

class Contact extends React.Component {
  render() {
    return (
      <section className="my-3">
        <h2 className="h1-responsive font-weight-bold text-center my-3 customTitle">
          Contacto
        </h2>
        <MDBRow>
          <MDBCol lg="8" style={{ padding: "0 50px 0 50px" }}>
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: "400px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9284.822658065965!2d-58.35982041702056!3d-34.637512652867095!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff49e34d20550289!2sMetal%C3%BArgica%20GAF!5e0!3m2!1ses!2sar!4v1587588274026!5m2!1ses!2sar"
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
          </MDBCol>
          <MDBCol lg="4" style={{ padding: "0 50px 0 55px" }}>
            <MDBRow>
              <a href="https://goo.gl/maps/aUm5i6QnVGDmCXtv5" target="_blank" rel="noopener noreferrer">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="map-marker-alt" />
                </MDBBtn>
              </a>
              <MDBCol>
                <a href="https://goo.gl/maps/aUm5i6QnVGDmCXtv5" target="_blank" rel="noopener noreferrer">
                  <p className="mb-md-0">Av. Almirante Brown 1423</p>
                  <p className="mb-md-0">Buenos Aires, Argentina</p>
                </a>
              </MDBCol>
            </MDBRow>
            <MDBRow md="4">
              <a href="tel:+54 11 15-6462-6571">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="phone" />
                </MDBBtn>
              </a>
              <MDBCol>
                <a href="tel:+54 11 15-6462-6571">
                  <p className="mb-md-0">011 15-6462-6571</p>
                </a>
                <p className="mb-md-0">Lun - Vie, 8:00-17:00</p>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <a href="mailto: fasciologuillermo@yahoo.com.ar">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="envelope" />
                </MDBBtn>
              </a>
              <MDBCol className="breakText">
                <a href="mailto: fasciologuillermo@yahoo.com.ar">
                  <p>fasciologuillermo @yahoo.com.ar</p>
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCol >
        </MDBRow >
      </section >
    );
  }
}


export default Contact;