import React, {useEffect, useState} from "react";
import {Post} from "./Post/Post";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../store";
import {fetchPosts} from "../../actions/postsActions";


export const Posts = () => {
    const dispatch = useAppDispatch()
    useEffect( () => {
        dispatch(fetchPosts())
    }, [dispatch]);

    const posts = useSelector((state: RootState) => state.posts);
    console.log('State uploaded', posts);

    return (
        !posts.length ? <h1>loading</h1> : (
            <div>
                <ul>
                    {posts.map(post => (
                        <li key={post._id}>
                            <Post post={post}/>
                        </li>
                    ))}
                </ul>
            </div>
            )
    )
}