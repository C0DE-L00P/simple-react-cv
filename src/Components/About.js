import React from "react";
import Alert from 'react-bootstrap/Alert'

function About() {
  return (
    <div className="container d-flex my-4 p-4">
      <h2 className="col-3 text-center">About me</h2>
      <div className="mx-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          c orrupti optio, repudiandae vel a iure dolorem quis cum magnam
          assumenda vitae amet doloremque sed incidunt culpa facere nisi ea
          ratione?
        </p>
        <a href="/cv.pdf" download className="float-end">
          <button className="btn btn-dark">Download Resume</button>
        </a>
      </div>
    </div>
  );
}

export default About;
