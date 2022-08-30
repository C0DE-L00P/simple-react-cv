import React from 'react'

function DesignCard(props) {
  return (
    <div className="card col-3 p-2 m-2 shadow" style={{width: "18rem",cursor:'pointer'}}>
        
      <img src={props.src} class="card-img-top" alt={props.type} />
      <div className="card-body">
        <p className="card-text">
            {props.type}
        </p>
      </div>
    </div>
  );
}

export default DesignCard