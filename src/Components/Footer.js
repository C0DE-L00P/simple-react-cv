import React from "react";

function Footer(props){
    return(
        <div className='container-fluid p-4 text-light bg-dark'>
            <div className='d-flex'>
                <div className="col-3 offset-1">
                    <h4 className="my-4">GET IN TOUCH</h4>
                    <p>
                    <i className='fas fa-envelope mx-2'></i>
                    {props.email}
                    </p>
                    <p>
                    <i className='fas fa-phone mx-2'></i>
                    {props.number}
                    </p>
                    
                </div>

                <div className="col-4 d-flex align-items-center justify-content-center">
                    <button className='btn btn-outline-light'>CONTACT ME</button>
                </div>
                <div className="col-3 d-flex flex-column align-items-end justify-content-end">
                    <div>
                        <i className='fab fa-twitter mx-1'></i>
                        <i className='fab fa-facebook mx-1'></i>
                        <i className='fab fa-linkedin-in mx-1'></i>
                    </div>
                    <p>Copyright @2022</p>
                </div>
            </div>
        </div>
    )
}

export default Footer