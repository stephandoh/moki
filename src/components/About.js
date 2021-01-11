import React from 'react';
import './About.css';
import Nav from './Nav';

export default function About() {
    return (
        <div className = 'about'>
            <Nav />
            <div className = 'about-info'>
                <h3>How to use Moki?</h3>
                <br></br>
                <ol>
                    <p>Use the Dropdown option to select a food type.</p>
                    <p>Select one food type from each section.</p>
                    <p>Set the quantities of unselected food typed to zero.</p>
                </ol>
                <br></br>
                <h3>How the servings are measured?</h3>
                <br></br>
                <ol>
                    <p>banku - a small ball.</p>
                    <p>fufu - a big ball.</p>
                    <p>rice - a rice spoon.</p>
                    <p>light soup - a ladle.</p>
                    <p>sauce - a ladle.</p>
                    <p>proteins - 3oz of meat.</p>
                </ol>
            </div>
        </div>
    )
}
