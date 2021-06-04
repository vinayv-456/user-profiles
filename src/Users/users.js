import React,{ useEffect, useState } from "react"
import axiosInstance from '../api/client'
import {Link} from "react-router-dom";
import './users.css'

const Users = ({users}) => {

    return(
        <div className="main-container">
            <div class="custom-shape-divider-top-1622811132">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="users-container">
                <div className="title">Select an account </div>
                <div className="users-list">
                {
                    users.length>0
                    &&
                    users.map((user)=>{
                    const {id, name, profilepicture }= user 
                    return <li key={id} >
                        <Link to={`/home/${id}/profile`} className="link" style={{display:'flex'}}>
                            <img src={profilepicture} className="profile-pic-style"></img>
                            <div>{name}</div>
                        </Link>
                        <div className="line"></div>
                    </li>
                    })
                }
                </div>
            </div>
            {/* hello */}
        </div>
    ); 
}

export default Users;