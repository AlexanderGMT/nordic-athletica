import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../service.css'


const Services = () => {
const navigate = useNavigate();
const [cookies, removeCookie] = useCookies([]);
const [username, setUsername] = useState('');

useEffect(() => {
    const verifyCookie = async () => {
        if (!cookies.token) {
        navigate('/login');
    }
        const { data } = await axios.post(
        'http://localhost:4000/',
        {},
        { withCredentials: true }
    );
    const { status, user } = data;
    setUsername(user);
    return status
        ? toast(`Hello ${user}`, {
            position: 'top-right',
        })
        : (removeCookie('token'), navigate('/login'));
    };
    verifyCookie();
}, [cookies, navigate, removeCookie]);

const Logout = () => {
    removeCookie('token');
    navigate('/signup');
};

return (
    <>
    <div className="parallax parallax4">
    <div>
        <Navbar logoutHandler={Logout} />
    </div>

      {/* Your content for the Services page goes here */}
    <div>
        <h1 className='Service-header'>Premium Services</h1>
        <p className='Service-description'> Whether you are seeking personal improvement or looking to train with a group, our 
            <br />services cater to all kinds of users. Our facilities offer a wide range of options, allowing you to  
            <br />reach your full potential with the guidance of our expert personal trainers and nutritionists.</p>
    </div>

    <div class="service-container">
        <div class="box">
    <h2 className='service-title'>Gym Access</h2>
    <p>For 21,99€ a month you will have access to our state-of-the-art fitness facility and sauna's.
        <br /><br />This is perfect for any user that just wants to work-out by them selves.</p>
    <p className='service-text'> <br /><br /><br />∙ Gym access</p>
    </div>
        <div class="box">
    <h2 className='service-title'>Group Activities Access</h2>
    <p>For 35.99€ a month you can go a step further to be granted you access to a diverse range of group activities. A great
        deal for those who want to also work-out with a group of people.<br /><br /> It also includes
        access to the gym and the saunas.</p>
    <p className='service-text'>∙ Gym access<br /><br />∙ Group activities</p>
    </div>
        <div class="box">
    <h2 className='service-title'>Premium Access</h2>
    <p>For 70.99€ a month you can have access to the great deal, our premium package is designed to unlock your full potential, by granting you access to a personal trainer and nutritionist.</p>
    <p className='service-text'><br /><br /><br />∙ Gym access<br /><br />∙ Group activities<br /><br />∙ Personal Trainner/Nutritionist</p>
    </div>
</div>
    </div>
    <div className="offer-container">
        <div>
            <h1>Contact us</h1>
            <br />
        </div>
        <div className="offer-box left-box">
            <h2>Reach to us!</h2>
                <article>
                    We are delighted to hear from you! Our dedicated team at Nordic Athletica is here to assist you with<br />
                    any inquiries or information you may need. Please feel free to reach out to us through any of the following method.<br />
                    <br /><br />
                    Phone: +00 000 000 000<br /><br />
                    Email: NordicAthletica@gmail.com<br /><br />
                    Address: Hannikaisenkatu 11, Jyväskylä<br /><br />
                </article>
        </div>
    </div>
    <div className="home-footer">
        <div className="footer-nav">
            <p className="copy-footer gym-name-footer">Nordic Athletica</p>
            <p className="contact-footer">Hannikaisenkatu 11, Jyväskylä</p>
            <p className="Icons">Contact: NordicAthletica@gmail.com</p>
        </div>
        <div className="footer-nav2">
            <p className="copy-footer">© Copyright 2023 NordicAthletic. All rights reserved.</p>
        </div>
    </div>
    </>
);
};

const Navbar = ({ logoutHandler }) => {
    return (
    <div className="navbar">
        <a href="/">Home</a>
        <a href="/Services">Services</a>
        <button className="logout-btn" onClick={logoutHandler}>
        LOGOUT
        </button>
    </div>
);
};

export default Services;