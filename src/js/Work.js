import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBMedia } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../css/Lightbox.css";

class Work extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
      'images/engine.jpg',
      'images/2.jpg',
      'images/3.jpg',
      'images/4.jpg',
      'images/5.jpg',
      'images/6.jpg'
    ]
  }

  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

    return (
      images.map(imageSrc => {
        photoIndex++;
        const privateKey = photoIndex;
        return (
          <MDBCol md="4" key={photoIndex}>
            <figure style={{ height: "95%" }}>
              <MDBMedia
                style={{ height: "100%", width: "100%" }}
                object src={imageSrc}
                alt="Gallery"
                className="img-fluid"
                onClick={() =>
                  this.setState({ photoIndex: privateKey, isOpen: true })
                }
              />
            </figure>
          </MDBCol>
        );
      }))
  }

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <section className="my-3">
        <h2 className="h1-responsive font-weight-bold text-center my-3 customTitle">
          Galería de Trabajos
      </h2>
        <MDBContainer className="mt-3">
          <div className="mdb-lightbox no-margin">
            <MDBRow>
              {this.renderImages()}
            </MDBRow>
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageTitle={photoIndex + 1 + "/" + images.length}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}
        </MDBContainer>
      </section>
    );
  }
}

export default Work;