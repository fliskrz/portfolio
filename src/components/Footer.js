import React from 'react';
import '../App.css';
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';
import mail from '../img/mail.png';
import phone from '../img/phone.png';

export default function Footer(props){
    return (
        <div className='footer'>
            <div><a href='https://www.linkedin.com/in/krzysztof-mariusz-flis/' target='_blank'>LinkedIn<img src={linkedin}/></a></div>
            <div><a href='https://github.com/fliskrz' target='_blank'>GitHub<img src={github}/></a></div>
            <div>flis.krz@gmail.com<img src={mail}/></div>
            <div>511 011 902<img src={phone}/></div>
        </div>
    )
}