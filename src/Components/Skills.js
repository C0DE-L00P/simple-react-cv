import Slider from "./Slider";
import React from 'react'

function Skills() {
  return (
  <div className="d-flex bg-light py-4">
    <div className="col-6 d-flex align-items-center">
        <div style={{margin:'auto',boredr:'none'}}>
            <h3 className="display-5">
                My Focus
            </h3>
            <hr/>
            <p className="mx-2">Web Design</p>
            <p className="mx-2">Responsive Design</p>
            <p className="mx-2">Single Page Applications</p>
        </div>
    </div>
    
    <div className=" col-5">
        <Slider courseName="HTML" progress='100%' bgColor="#a89ec2"/>
        <Slider courseName="CSS" progress='90%' bgColor="#a89ec2"/>
        <Slider courseName="JS" progress='78%' bgColor="#958cac"/>
        <Slider courseName="JQuery" progress='90%' bgColor="#827b97"/>
        <Slider courseName="Bootstrap" progress='65%' bgColor="#706981"/>
        <Slider courseName="Angular" progress='70%' bgColor="#5d586c"/>
        <Slider courseName="React" progress='5%' bgColor="#4a4656"/>
    </div>
  </div>
  );
}

export default Skills