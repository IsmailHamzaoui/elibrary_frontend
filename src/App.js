import React, {useState} from 'react';
import style from './App.module.css';
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Books from "./components/features/books/Books";
import Exercises from "./components/features/exercises/Exercises";
import Exams from "./components/features/exams/Exams";
import Thesises from "./components/features/thesis/Thesises";
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

function App() {

    const [authenticated, setauthenticated] = useState(false);



  return (
    <div className={style.App}>
        <BrowserRouter>
            <Navbar text="" />
            <Home homeText="" />
            <Sidebar text="" />
            <Footer text="" />
            <switch>
                <Route path="/signup"
                       render={(props) => <Signup authenticated={authenticated} {...props} />}></Route>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
                <Route component={NotFound}></Route>
            </switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
