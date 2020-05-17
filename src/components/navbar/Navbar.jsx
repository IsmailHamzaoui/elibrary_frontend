import React, {useState} from 'react';
import style from './Navbar.module.css';
import {Button, Modal} from "@material-ui/core";
import ModalForm from "../utils/modal/ModalForm";

const Navbar = (props) => {

    const [show, setShow] = useState(false);

    const opening = () => {
        setShow(true);
    };

    const closing = () => {
        setShow(false);
    };

    return (
        <div className={style.navbar}>
            <ul>
                <li><Button className={style.btn} href="/">Books</Button></li>
                <li><Button className={style.btn} href="/exams">Exams</Button></li>
                <li><Button className={style.btn} href="/exercises">Exercises</Button></li>
                <li><Button className={style.btn} href="/thesis">Thesis</Button></li>
            </ul>


            <div className={style.account}>
                <Button>Login</Button>
                <Button className={style.signup} type="Button" onClick={opening}>Sign up</Button>
            </div>
            {
                show && (
                    <ModalForm closing={closing} />
                )
            }


        </div>
    )
};

export default Navbar;