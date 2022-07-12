import React, {useState} from "react";
import {Post} from "./Post/Post";
import {useSelector} from "react-redux";
import {RootState} from "../../store";


export const Posts = () => {
    const [currentId, setCurrentId] = useState(null);
    const posts = useSelector((state: RootState) => state.posts);

    console.log(currentId)

    console.log('State uploaded', posts);

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}