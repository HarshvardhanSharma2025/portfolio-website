import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { PiArrowBendLeftUpFill } from "react-icons/pi";
import Scrool from './Scrool';

const Introduction = () => {

    const [text] = useTypewriter({
        words: ['Harsh', 'Vardhan', 'Sharma'],
        loop: true,
        delaySpeed: 1500,
    });

    return (
        <div className='intro'>
            <h1 style={{ margin: '0px', fontFamily: "'Bitter', serif", lineHeight: '1', fontSize: '60px' }}>
                Hi, my
            </h1>
            <h1 style={{ margin: '0', fontFamily: "'Bitter', serif", lineHeight: '1.2', fontSize: '60px' }}>
                name is{' '}
                <span style={{ fontWeight: 'bold', color: '#DC143C', fontFamily: "'Kodchasan', sans-serif", fontSize: '65px' }}>
                    {text}
                </span>
                <Cursor />
            </h1>
            <div>
                <span style={{ marginLeft: '0px', fontFamily: "'Bitter', serif", fontSize: '23px' }}>I am a {""}</span>
                <h1 style={{ display: 'inline', margin: '0', fontFamily: "'Bitter', serif", fontSize: '25px', display: 'inline-block' }}>
                    <strong>B.Tech Computer Science student</strong>
                </h1>
                <span style={{ marginLeft: '0px', fontFamily: "'Bitter', serif", fontSize: '23px' }}>passionate about innovation.</span>
            </div>
            <div className='main-logo'><img className='logo-set'
                src="\images\logo3.png"
            /></div>
            <div className='scrool'><Scrool></Scrool></div>
            
            

        </div>

    );
}

export default Introduction;