import React from "react";
import {Post} from "./Post/Post";


export const Posts = () => {

    return (
        <div>
            <ul>
                <li><Post/></li>
                <li><Post/></li>
                <li><Post/></li>
            </ul>
        </div>
    )
}