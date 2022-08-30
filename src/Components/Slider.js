import React from "react";

function Slider(props) {
  return (
    <div className="d-flex m-2" style={{height: "44px"}}>
      <span className="h5 text-light bg-dark p-2 h-100">{props.courseName}</span>
      <div className="progress w-100 border-0 h-100" style={{borderRadius: '0'}}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{width: props.progress,backgroundColor: props.bgColor}}
          aria-valuenow={props.progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

// <div class="progress">
//   <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
// </div>
// <div class="progress">
//   <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
// </div>
// <div class="progress">
//   <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
// </div>

export default Slider;
