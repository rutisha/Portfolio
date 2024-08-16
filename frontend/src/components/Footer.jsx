import React from 'react';
import '../index.css';

const Footer = () => {
    return (
        <footer id="footer">
        <div className="social-media">
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-skype"></i></a>
        </div>
         <div className="copyright">
             <p>&copy; 2024 Rutisha Patel. All Right Reserved.</p>
         </div>
     </footer> 
    );
};

export default Footer;
