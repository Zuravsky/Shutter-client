import React, {useEffect} from 'react';
import { Form } from './components/Form/Form';
import { NavBar } from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Posts} from "./components/Posts/Posts";

import './App.css'
import {store} from "./store";
import {fetchPosts} from "./actions/postsActions";

export const App = () => {
    useEffect( () => {
        store.dispatch(fetchPosts())
    }, []);

    return (
        <BrowserRouter>
            <div className='container'>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Posts/>} />
                    <Route path="/form" element={<Form/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
