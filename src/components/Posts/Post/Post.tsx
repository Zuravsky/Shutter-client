import React from "react";

export const Post = ({post, setCurrentId}: any) => {
    const handleLike = () => {

    }

    const handleDelete = () => {

    }

    return (
        <div>
            <div>{post.title}</div>
            <div>{post.message}</div>
            <div>{post.tags}</div>
            <img src={post.selectedFile} width={500}/>
            <button onClick={setCurrentId(post._id)}>Edit</button>
            <button onClick={handleLike}>like</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}