import React from "react";
import {deletePost, likePost} from "../../../actions/postsActions";
import {useAppDispatch} from "../../../store";
import {useNavigate} from 'react-router-dom'
import {setCurrentId} from "../../../features/currentId/currentId-slice";
import {BsThreeDots} from "react-icons/bs";
import {AiOutlineDelete, AiOutlineLike} from "react-icons/ai";


import './style.css'

export const Post = ({post}: any) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleEdit = () => {
        dispatch(setCurrentId(post._id));
        navigate('/form');
    }

    return (
        <div className='post'>
            <div className='header'>
                <h1>{post.title}</h1>
                <div className='editBtn' onClick={handleEdit}><BsThreeDots size={18}/></div>
            </div>
            <img src={post.selectedFile} alt={post.title}/>
            <div className='ico'>
                <div onClick={() => dispatch(likePost(post._id))}><AiOutlineLike size={24}/></div>
                <div onClick={() => dispatch(deletePost(post._id))}><AiOutlineDelete size={24}/></div>
            </div>
            <div className='likes'>Like count: {post.likes.length}</div>
            <div className='message'>{post.message}</div>
            <div className='tags'>{post.tags.map((tag: string) => `#${tag} `)}</div>
        </div>
    )
}