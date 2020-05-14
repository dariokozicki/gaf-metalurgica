import React from "react";
import { MDBMedia } from 'mdbreact';
import "../css/App.css";

class About extends React.Component {
  state = {
    img: "center",
    parragraphs: [
      {
        text: "El texto que está acá es de relleno, si querés podes escribir algo contando de vos. Praesent viverra pretium lacus, nec molestie velit varius ut. Sed tristique nisl a luctus congue. Pellentesque velit est, accumsan a elit ut, rutrum venenatis lacus. Morbi blandit libero at sem luctus, non eleifend dolor mattis. Etiam laoreet, ex congue scelerisque mattis, nulla diam tincidunt dolor, non elementum ante sapien vitae nunc. Suspendisse eget dolor lobortis leo iaculis ultricies eleifend vitae dui. Vivamus vel felis eget dui tempus sodales in in ex. Nulla non nulla vitae elit fringilla varius vitae sed augue. Etiam id feugiat metus. Curabitur dictum turpis metus. Cras justo nunc, congue nec sodales a, feugiat ac neque. Pellentesque interdum mollis sollicitudin. Mauris sodales libero ac laoreet imperdiet. Cras id massa dictum, porta ex in, luctus turpis. Sed rutrum justo neque, quis gravida nisi posuere non. "
      },
      {
        text: "Praesent commodo ante vitae ante hendrerit lacinia. Cras urna elit, dignissim quis malesuada quis, mollis nec velit. Morbi sapien orci, dictum vitae dolor et, consectetur imperdiet tortor. In a orci sit amet orci commodo eleifend sed in tortor. Phasellus nibh libero, fermentum vel ligula id, congue vulputate enim. Vestibulum a nunc libero. Duis at tincidunt nulla, sed mattis leo. Curabitur egestas tortor risus, vel pulvinar enim vehicula vel. Integer non massa dolor. Phasellus consequat tortor ante. Phasellus malesuada, eros a vulputate aliquet, lectus eros fringilla felis, eget volutpat ex tortor sed odio. Maecenas a pretium diam, eu scelerisque sem. Nulla felis dui, convallis non fringilla at, maximus vitae sapien. Nulla in mi id nulla commodo tristique. Fusce quis ipsum risus. "
      },
      {
        text: "Vestibulum nec leo rhoncus, euismod elit quis, rhoncus ex. In fermentum elementum varius. Vivamus pulvinar enim in semper dapibus. Praesent vulputate ligula a velit mattis ornare. Vivamus cursus elit vitae sem volutpat, a vulputate nibh pharetra. Aliquam porta convallis lorem, ut vulputate erat tincidunt sed. Aenean accumsan lacus nec nibh tempor, id luctus lorem maximus. Donec sit amet scelerisque neque, vitae luctus dolor. Pellentesque accumsan, quam ac ultrices faucibus, orci sem luctus massa, quis sollicitudin metus lacus at mi. Aliquam fringilla justo ut aliquet iaculis. "
      }
    ]
  }

  render() {
    return (

      <section className="my-3">
        <h2 className="h1-responsive font-weight-bold text-center my-3 customTitle">
          Acerca de Nosotros
        </h2>
        <MDBMedia object src="images/guillermo.jpg" alt="Guillermo Fasciolo" className="about-image" />
        <main style={{ margin: "0 50px 0 50px" }}>
          {this.state.parragraphs.map((parr, i) => <p className="indented-par" key={i}>{parr.text}</p>)}
        </main>

      </section>
    )
  }
}


export default About;