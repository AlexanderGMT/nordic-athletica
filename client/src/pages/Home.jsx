import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";




const Home = () => {
const navigate = useNavigate();
const [cookies, removeCookie] = useCookies([]);
const [username, setUsername] = useState("");
useEffect(() => {
    const verifyCookie = async () => {
    if (!cookies.token) {
        navigate("/login");
    }
    const { data } = await axios.post(
        "http://localhost:4000/",
        {},
        { withCredentials: true }
    );
    const { status, user } = data;
    setUsername(user);
    return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
        })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
}, [cookies, navigate, removeCookie]);
const Logout = () => {
    removeCookie("token");
    navigate("/signup");
};

return (
    <>
    <div className="parallax parallax1">
        <Navbar logoutHandler={Logout} />
        <div className="home_page_image">
            <div className="gym-name">Nordic Athletica</div>
                <p className="image_text">Unleash Your Potential<br /><br /> Run Towards Greatness!</p>
        </div>
    </div>


    <div className="offer-container">
        <div>
            <h1>Why us?</h1>
            <br />
        </div>
        <div className="offer-box left-box">
            <h2>Nordic Athletica</h2>
                <p>Welcome to Nordic Athelica, where health and vitality intertwine with Nordic inspiration to create a unique fitness haven.
                As you step into our world, you'll find a gym that goes beyond exercise, it's a holistic sanctuary designed to elevate your body, mind, and spirit.</p>
        </div>
    </div>

    <div className="offer-container">
        <div className="offer-box right-box">
            <h2>Personal trainer</h2>
                <p>At Nordic Athelica, we understand that every individual is on a distinct journey. Our expert trainers are committed to crafting personalized fitness experiences
                that cater to your goals and preferences. Whether you're seeking strength, flexibility, or a boost in overall energy, we have the tools to help you succeed.</p>
        </div>
    </div>


    <div className="parallax parallax2"></div>


    <div className="offer-container">
        <div>
            <h1>Our plans</h1>
            <br />
        </div>
        <div className="offer-box left-box">
            <h2>Services</h2>
                <p>Whether you are seeking personal improvement or looking to train with a group, our 
            <br />services cater to all kinds of users. Our facilities offer a wide range of options, allowing you to  
            <br />reach your full potential with the guidance of our expert personal trainers and nutritionists.</p>
        </div>
    </div>

    <div className="offer-container">
        <div className="offer-box right-box service-home">
            <h2>Check our plans!</h2>
                <button className="services-btn" onClick={() => window.location.href = '/services'}>Services</button>
        </div>
    </div>


    <div className="parallax parallax3"></div>

    <div className="offer-container">
        <div className="offer-box left-box">
            <h2>Wellness and Recovery</h2>
            <p>Step into the warmth of our premium sauna, where soothing heat envelops your body, promoting muscle relaxation and easing tension.
                The therapeutic benefits of sauna sessions extend beyond the physical; they offer a moment of respite for your mind,
                allowing you to escape the stresses of daily life and find a tranquil sanctuary within our walls.</p>
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

















const Navbar = ({ logoutHandler}) => {
    return (
    <div className="navbar">
        <a href="/">Home</a>
        <a href="/Services">Services</a>
        <button className="logout-btn" onClick={logoutHandler}>LOGOUT</button>
    </div>
    );
};


export default Home;