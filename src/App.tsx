import React, {useEffect, useState} from 'react';
import { Form } from './components/Form/Form';
import { NavBar } from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Posts} from "./components/Posts/Posts";

import './App.css'

export const App = () => {

    return (
        <BrowserRouter>
            <div className='container'>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Posts/>}/>
                    <Route path="/form" element={<Form/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
