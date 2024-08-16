import React from 'react';
import '../index.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <span></span>
            <form id="contact-form">
                <div className="name-field">
                    <div className="field">
                        <label htmlFor="fname">First Name:</label>
                        <input type="text" id="fname" name="fname" />
                    </div>
                    <div className="field">
                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" id="lname" name="lname" />
                    </div>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="msg">Message:</label>
                    <textarea id="msg" name="msg"></textarea>
                </div>
                <input type="submit" id="send-me" value="Send Me" name="send-me" />
            </form>
        </section>
    );
};

export default Contact;
