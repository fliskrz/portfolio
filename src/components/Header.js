import React from 'react';
import '../App.css';

export default function Header(props){
    return (
        <div className='header'>
            <div className='img'></div>
            <ul className='navbar'>
                <li><a href='#about'>About</a></li>
                <li><a href='#education'>Education</a></li>
                <li><a href='#technologies'>Tech</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#hobbies'>Hobbies</a></li>
            </ul>
        </div>
    )
}


