import React from 'react';
import '../App.css';
import book1 from '../img/books/cover1.jpg';
import book2 from '../img/books/cover2.jpg';
import book3 from '../img/books/cover3.jpg';
import book4 from '../img/books/cover4.jpg';
import book5 from '../img/books/cover5.jpg';
import game1 from '../img/games/cover1.jpg';
import game2 from '../img/games/cover2.jpg';
import game3 from '../img/games/cover3.png';
import game4 from '../img/games/cover4.jpeg';
import game5 from '../img/games/cover5.jpg';

export default function Hobbies(props){
    return (
        <div id='hobbies' className='hobbies'>
            <div className='books'>
                <ul className='book_slider'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul className='booklist'>
                    <li><a href='https://en.wikipedia.org/wiki/The_Legend_of_Drizzt' target="_blank"><img src={book1}/></a></li>
                    <li><a href='https://en.wikipedia.org/wiki/The_Stormlight_Archive' target="_blank"><img src={book2}/></a></li>
                    <li><a href='https://en.wikipedia.org/wiki/Malazan_Book_of_the_Fallen' target="_blank"><img src={book3}/></a></li>
                    <li><a href='https://en.wikipedia.org/wiki/The_Lord_of_the_Rings' target="_blank"><img src={book4}/></a></li>
                    <li><a href='https://en.wikipedia.org/wiki/The_Broken_Empire_Trilogy' target="_blank"><img src={book5}/></a></li>
                </ul>
            </div>
            <div className='games'>
                <ul className='game_slider'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul className='gamelist'>
                    <li><a href='https://en.wikipedia.org/wiki/Baldur%27s_Gate_(series)' target="_blank"><img src={game1}/></a></li>
                    <li><a href='https://en.wikipedia.org/wiki/The_Witcher#Video_games' target="_blank"><img src={game2}/></a></li>
                    <li><a href='https://en.wikipedia.org/wiki/Pillars_of_Eternity' target="_blank"><img src={game3}/></a></li>
                    <li><a href='https://en.wikipedia.org/wiki/Gothic_(series)' target="_blank"><img src={game4}/></a></li>
                    <li><a href='https://en.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim' target="_blank"><img src={game5}/></a></li>
                </ul>
            </div>
        </div>
    )
}