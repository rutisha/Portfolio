import React from 'react';
import '../index.css';
import Myimage from '../assets/IMG-20200719-WA0322.jpg';
import About from './About'; 
import Skills from './Skills'; 
const Home = () => {
    return (
        <>
            <section className="main-container">
                <div className="intro">
                    <h1>Hello, I am</h1>
                    <h1 id="name">Rutisha Patel</h1>
                    <p>WEB DEVELOPER</p>
                    <a href="#">Know More</a>
                </div>
                <div className="image">
                    <img src={Myimage} alt="my-photo" />
                </div>
            </section>
            <section id="about" className="about">
            <h2>About</h2>
            <span></span>
            <p>
                Hey there, I am Rutisha Patel, a passionate web developer who is interested in learning things each and every day.
                I have completed my bachelor's of technology in the field of computer engineering. 
                So I have a basic understanding of website development, programming, digital marketing, and more. 
                My coding toolbox includes HTML, CSS, and JavaScript for the front end, and I'm still in the learning phase for back-end development. 
                Moreover, I have some experience and mastery of Shopify frameworks. 
                Join me as I explore the fascinating world of web development!
            </p>
        </section>
            <Skills />
        </>
    );
};

export default Home;