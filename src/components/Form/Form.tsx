import React, {SyntheticEvent, useEffect, useState} from "react";

import './style.css'
import {createPost, updatePost} from "../../actions/postsActions";
import {RootState, useAppDispatch} from "../../store";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {CreatePostEntity} from "types";


export const Form = () => {
    const [postData, setPostData] = useState<CreatePostEntity>({
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    });
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const currentId = useSelector((state: RootState) => state.currentId)
    const post = useSelector((state: RootState) => currentId ? state.posts.find(post => post._id === currentId) : null);

    useEffect(() => {
        if(post) {
            setPostData(post)
        }
    }, [post])

    console.log(currentId)

    const toBase64 = (file: File) => new Promise(resolve => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
        });

    const handleImagetoBase64 = async (e: any) => {
        const file = e.target.files[0]
        const selectedFile = await toBase64(file) as string;
        setPostData({...postData, selectedFile})
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        if(currentId === null) {
            dispatch(createPost(postData));
        } else {
            dispatch(updatePost({currentId, postData}))
        }

        clear();
        navigate('/')
    }

    const clear = () => {
        setPostData({
            title: '',
            message: '',
            tags: '',
            selectedFile: '',
        });
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="labels">
                    <h1>Adding Photo</h1>
                    <p>
                        <label>
                            Title: <br/>
                            <input
                                type="text"
                                name="title"
                                maxLength={50}
                                value={postData.title}
                                onChange={e => setPostData({...postData, title: e.target.value})}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Message: <br/>
                            <textarea
                                cols={50}
                                rows={20}
                                name="message"
                                maxLength={50}
                                value={postData.message}
                                onChange={e => setPostData({...postData, message: e.target.value})}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Tags: <br/>
                            <input
                                type="text"
                                name="tags"
                                maxLength={50}
                                value={postData.tags}
                                onChange={e => setPostData({...postData, tags: e.target.value})}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Select File: <br/>
                            <input
                                type="file"
                                name="file"
                                onChange={handleImagetoBase64}
                            />
                        </label>
                    </p>
                </div>
                <div className="buttons">
                    <button type="submit">Send</button>
                    <button onClick={clear}>Clear</button>
                </div>
            </form>
        </div>
    )
}

