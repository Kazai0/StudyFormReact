/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import './PageWelcome.css'

export default () =>{
    return (
        <div className="Page">
            <h1>Welcome Back!</h1>

            <div className="Descripition">
                <p>to keeping connection us</p>
                <p>please login with you personal info</p>
            </div>

            <button>Sign in</button>
        </div>
    )

}