import e from "express";
import { React, useState, useEffect } from "react";

function AddUser() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    position: "",
  });

//   const [errors, setErrors] = useState({
//     firstNameError: "",
//     lastNameError: "",
//     positionError: "",
//   });

//   const handleChange = (e) => {
//     setUserData({
//       ...userData,
//       [e.target.id]: e.target.value,
//     });
//     handleValidation(e.target.id, e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(userData);
//   };

//   const handleValidation = (field, value) => {
//     if (field == "firstName") {
    //   setErrors({
    //     ...errors,
    //     firstNameError:
    //       value.length === 0
    //         ? "This field is required"
    //         : value.length < 3
    //         ? "Too short"
    //         : null,
    //   });
//     }
//   };

  //NOTICE: getElementById === useRef() hook

  return (
    <div className={`container my-4 ${errors.firstNameError? "border-danger":""} `}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="in_first_name" class="form-label">
            First Name
          </label>
          <input    
            onChange={handleChange}
            value={userData.firstName}
            type="text"
            class="form-control"
            id="in_first_name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="in_last_name" class="form-label">
            Last Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            class="form-control"
            id="in_last_name"
            value={userData.lastName}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="in_position" class="form-label">
            Position
          </label>
          <input
            onChange={handleChange}
            type="text"
            class="form-control"
            id="in_position"
            value={userData.position}
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUser;
