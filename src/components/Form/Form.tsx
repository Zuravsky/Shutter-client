import React, {SyntheticEvent, useEffect, useState} from "react";

import './style.css'
import {createPost, updatePost} from "../../actions/postsActions";
import {RootState, useAppDispatch} from "../../store";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {setCurrentId} from "../../features/currentId/currentId-slice";
import {AiOutlineUpload} from "react-icons/ai";



export const Form = () => {
    const [sizeExceeded, setSizeExceeded] = useState(false);
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: [''],
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

    const fileToBase64 = (file: Blob) => new Promise(resolve => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
        });

    const handleUploadImage = async (e: any) => {
        const file = e.target.files[0];

        if(file.size > 2097152) {
            setSizeExceeded(true);
        }

        const selectedFile = await fileToBase64(file) as string;
        setPostData({...postData, selectedFile})
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        if(currentId === null) {
            await dispatch(createPost(postData));
        } else {
            await dispatch(updatePost({currentId, postData}))
        }

        navigate('/')
    }

    const clear = (e: SyntheticEvent) => {
        e.preventDefault()

        if(currentId) {
            dispatch(setCurrentId(null))
        }
        setPostData({
            title: '',
            message: '',
            tags: [''],
            selectedFile: '',
        });
        setSizeExceeded(false);
    }

    return (
        <div className="form">
            <form
                autoComplete='off'
                onSubmit={handleSubmit}
            >
                <div className="labels">
                    <h1>{currentId ? 'update post' : 'add new post'}</h1>
                    <p>
                        <label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                required
                                maxLength={50}
                                value={postData.title}
                                onChange={e => setPostData({...postData, title: e.target.value})}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            <textarea
                                name="message"
                                placeholder='Messsage'
                                maxLength={500}
                                value={postData.message}
                                onChange={e => setPostData({...postData, message: e.target.value})}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="text"
                                name="tags"
                                placeholder='Tags'
                                maxLength={50}
                                value={postData.tags}
                                onChange={e => setPostData({...postData, tags: e.target.value.split(',')})}
                            />
                        </label>
                    </p>
                    <p>
                        <label className='fileUpload'>
                            <input
                                type="file"
                                name="file"
                                required={!currentId && true}
                                onChange={handleUploadImage}
                            />
                            <AiOutlineUpload size={32}/>
                            add photo
                            <label style={{fontSize: 10}}>
                                {sizeExceeded ? 'Maximum file size is 2mb. Please change file size.' : ''}
                            </label>
                        </label>
                    </p>
                </div>
                <div className="buttons">
                    <label>
                        <button
                            type="submit"
                            disabled={sizeExceeded}
                        />
                        send
                    </label>
                    <label>
                        <button onClick={clear}/>
                        clear
                    </label>
                </div>
            </form>
        </div>
    )
}

