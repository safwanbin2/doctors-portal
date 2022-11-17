import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className="px-10 mt-20 text-black"
            style={{ background: `url(${footer})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
        >
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/' className="link link-hover">Branding</a>
                    <a href='/' className="link link-hover">Design</a>
                    <a href='/' className="link link-hover">Marketing</a>
                    <a href='/' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/' className="link link-hover">About us</a>
                    <a href='/' className="link link-hover">Contact</a>
                    <a href='/' className="link link-hover">Jobs</a>
                    <a href='/' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/' className="link link-hover">Terms of use</a>
                    <a href='/' className="link link-hover">Privacy policy</a>
                    <a href='/' className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <p className='text-center mt-20 mb-4'><small>Copyright 2022 All Rights Reserved</small></p>
        </footer>
    );
};

export default Footer;