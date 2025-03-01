import React from 'react';
import '../index.css';

const About = () => {
    return (
        <section id="about" className="about">
            <h2>About</h2>
            <span></span>
            <p>
               Hey there, I am Rutisha Patel, a passionate web developer who is interested in learning things each and every day.
                I have completed my bachelor's of technology in the field of computer engineering and Ontario Grudaute Certificate in Web Development. 
                So I have a great understanding of website development, programming, digital marketing, and more. 
                My coding toolbox includes HTML, CSS, and JavaScript for the front end, and back-end development such as Node.js, MySQl, Mongodb. 
                Moreover, I have some experience and mastery of Shopify frameworks. 
                Join me as I explore the fascinating world of web development!
            </p>
            <div className="about-section">
                <div className="experience">
                    <h3>Experience </h3>
                    <span></span>
                    <ul>
                    <li>
                            <h4>Web Developer Intern</h4>
                            <p><i class="fa fa-map-marker" aria-hidden="true"></i><strong> Brand Glow Up</strong> - Toronto, Ontario </p>
                            <p><i class="fa fa-calendar" aria-hidden="true"></i> Sept 2024 - Dec 2024</p>
                            <p>- Developed and maintained responsive websites, ensuring optimal user experience across various devices and browsers.</p>
                           <p> - Implemented SEO best practices, resulting in a great improvement in search engine rankings for client websites. </p>
                           <p> - Created and maintain various blogs on WordPress site</p>
                        </li>
                        <li>
                            <h4>Web Developer </h4>
                            <p><i class="fa fa-map-marker" aria-hidden="true"></i><strong> WebPixel Technologies</strong> - Vastrapur,Gujarat, India </p>
                            <p><i class="fa fa-calendar" aria-hidden="true"></i> April 2023 - Nov 2023</p>
                            <p>- Developed and maintained responsive websites, ensuring optimal user experience across 
                            various devices and browsers.</p>
                            <p>- Collaborated with cross functional teams, including designers and back-end developers, to 
                            ensure seamless integrations of web applications</p>
                            <p>- Implemented SEO best practices, resulting in a great improvement in search engine rankings for 
                            client websites.</p>
                        </li>
                    </ul>
                </div>
                
                <div className="education">
                    <h3>Education </h3>
                    <span></span>
                    <ul>
                    <li>
                            <h4>Master's of Computer Science</h4>
                            <p><i class="fa fa-map-marker" aria-hidden="true"></i><strong> Algoma University</strong> - Toronto, Ontario, Canada</p>
                            <p>Present</p>
                            <p>Studying a program which focused on AI and Machine Learning products.With other software engineering subjects.</p>
                        </li>
                        <li>
                            <h4>Post-Graduate Diploma Certificate in Web Development</h4>
                            <p><i class="fa fa-map-marker" aria-hidden="true"></i><strong> Humber College </strong> - Toronto, Ontario, Canada</p>
                            <p>Passed in 2024 with 90 CGPA</p>
                            <p>Studying an intensive program focused on full-stack development using modern technologies.</p>
                        </li>
                        <li>
                            <h4>Bachelor of Technology in Computer Engineering</h4>
                            <p><i class="fa fa-map-marker" aria-hidden="true"></i><strong> Indus University </strong> - Rancharda, Gujarat, India</p>
                            <p><i class="fa fa-calendar" aria-hidden="true"></i> 2019 - 2023</p>
                            <p>Graduated with a strong foundation in software development, algorithms, and database management.</p>
                            <p>Passed in 2023 with 9.39 GPA</p>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
