import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Introduction = () => {

    const [text] = useTypewriter({
        words: ['Harsh', 'Vardhan', 'Sharma'],
        loop: true,
        delaySpeed: 1500,
    });

    return (
        <div className='intro'>
            <h1 style={{ margin: '0px', fontFamily: "'Bitter', serif", lineHeight: '1' }}>
                Hi, my
            </h1>
            <h1 style={{ margin: '0', fontFamily: "'Bitter', serif", lineHeight: '1.2' }}>
                name is{' '}
                <span style={{ fontWeight: 'bold', color: '#DC143C', fontFamily: "'Kodchasan', sans-serif" }}>
                    {text}
                </span>
                <Cursor />
            </h1>
        </div>

    );
}

export default Introduction;