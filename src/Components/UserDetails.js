//This is gonna be a functional component
import React from 'react'

function UserDetails(props){
    return (
        <>
            <p>Name: {props.name}</p>
            <p>Colledge: {props.coll}</p>
        </>
    )
}
//Another way to make functional component
// const UserDetails = ()=> { return (<> </>) }

export default UserDetails;