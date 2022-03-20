/* eslint-disable import/no-anonymous-default-export */

import React from "react";

import './NewCard.css'

export default props =>
    <div className="NewCard">
        <div className="NewForm">
        {props.children}
        </div>
    </div>


