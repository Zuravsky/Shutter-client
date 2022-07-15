import React, {SyntheticEvent, useState} from "react";

import './style.css';
import {MdOutlineAddAPhoto} from "react-icons/md";
import {BiSearch} from "react-icons/bi";
import {useAppDispatch} from "../../store";
import {searchFortags} from "../../actions/postsActions";

export const NavBar = () => {
    const [tag, setTag] = useState('');
    const dispatch = useAppDispatch()

    const handleSearch = (e: SyntheticEvent) => {
        e.preventDefault()

        if(tag !== '') {
            dispatch(searchFortags(tag))
        }
    }

    return (
        <div className="bar">
            <div className="app-bar">
                <div>
                    <a className="text" href="/">Shutter</a>
                </div>
                <div className='search'>
                    <input
                        className='searchBar'
                        type="text" name="search"
                        placeholder="search tag"
                        autoComplete="off"
                        value={tag} onChange={e => setTag(e.target.value)}
                    />
                    <div className='searchBtn' onClick={handleSearch}><BiSearch/></div>
                </div>
                <div>
                    <a className="text addForm" href="/form"><MdOutlineAddAPhoto/></a>
                </div>
            </div>
        </div>
    )
}