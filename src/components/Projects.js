import React from 'react';
import '../App.css';
import zombie from '../img/zombie.png';
import pokedex from '../img/pokedex.png';

export default function Projects(props){
    return (
        <div id='projects' className='projects'>
            <div className='project_thumbnail zombiegame'>
                <img src={zombie}/>
                <div className='zombie_btns'>
                    <a href='https://github.com/fliskrz/Zombie-Game' target='_blank' className='zombie_btn'>Source Code</a>
                    <a href='https://fliskrz.github.io/Zombie-Game/' target='_blank' className='zombie_btn'>Play</a>
                </div>
                <h2 style={{fontFamily: 'Creepster', fontWeight: 'bold', fontSize:'30px'}}>Zombie Game</h2>
            </div>
            <div className='project_thumbnail pokedex'>
                <img src={pokedex}/>
                <div className='poke_btns'>
                    <a href='https://github.com/fliskrz/PokedexReact' target='_blank' className='poke_btn'>Source Code</a>
                    <a href='https://fliskrz.github.io/PokedexReact/' target='_blank' className='poke_btn'>Open</a>
                </div>
                <h2>PokeDex</h2>
            </div>
        </div>
    )
}