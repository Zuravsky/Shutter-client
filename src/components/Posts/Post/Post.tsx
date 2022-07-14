import React from "react";
import {deletePost} from "../../../actions/postsActions";
import {useAppDispatch} from "../../../store";
import {useNavigate} from 'react-router-dom'
import {setCurrentId} from "../../../features/currentId/currentId-slice";

export const Post = ({post}: any) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleEdit = () => {
        dispatch(setCurrentId(post._id));
        navigate('/form');
    }

    return (
        <div>
            <div>{post.title}</div>
            <div>{post.message}</div>
            <div>{post.tags}</div>
            <img src={post.selectedFile} width={500}/>
            <button onClick={handleEdit}>Edit</button>
            <button>like</button>
            <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
        </div>
    )
}