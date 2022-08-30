import React from 'react'

function Header() {

  return (
    <div
      style={{
        color: "white",
        height: "700px",
        width: "100%",
        background:
          'url("https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg")',
      }}
    >
      <div className="container d-flex" style={{
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
      }}>
        <h1>Gamal Raheem</h1>
        <h3 className="display-6">Web Developer & Designer</h3>
        <div>
        <button className="btn btn-outline-light mt-4 d-md-block">CONTACT ME</button>
        </div>
      </div>
    </div>
  );
}
export default Header;
