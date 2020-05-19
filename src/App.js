import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import SignUp from "./components/signup/SignUp";

function App() {

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState("");


    const loadCurrentlyLoggedInUser = () => {
        setLoading(true);
        setAuthenticated(true);
        setCurrentUser("user1");
    }

    useEffect(() => {
        loadCurrentlyLoggedInUser();
    }, [])

    const handleLogout = () => {
        setAuthenticated(false);
        setCurrentUser(null);
        console.log("logout is great");
    }


  return (
    <div className={style.App}>
        <BrowserRouter>
            <Navbar text="" />
            <Home homeText="" />
            <Sidebar text="" />
            <Footer text="" />
        </BrowserRouter>
    </div>
  );
}

export default App;
