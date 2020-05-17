import React from 'react';
import style from './Home.module.css';
import Books from "../features/books/Books";
import Exams from "../features/exams/Exams";
import Exercises from "../features/exercises/Exercises";
import Thesises from "../features/thesis/Thesises";
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

const Home = ({homeText}) => {

    return (
        <div className={style.home}>
            <Switch>
                <Route component={Books} exact={true} path="/" />
                <Route component={Exams} path="/exams" />
                <Route component={Exercises} path="/exercises" />
                <Route component={Thesises} path="/thesis" />
            </Switch>
        </div>
    )
};

export default Home;