import React from "react";

import './style.css';
import {IoAddCircleOutline} from "react-icons/io5";
import {RiCameraLensFill} from "react-icons/ri";

export const NavBar = () => {

    return (
       <div className="app-bar">
           <div>
               <a className="text" href="/">Shutter<RiCameraLensFill className="icon"/></a>
           </div>
           <div>
               <a className="text" href="/form"><IoAddCircleOutline className="icon"/></a>
           </div>
       </div>
    )
}