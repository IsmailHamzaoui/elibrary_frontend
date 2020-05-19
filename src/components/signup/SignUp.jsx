import React, {useEffect, useState} from "react";
import style from './Signup.module.css'
import InputField from "../utils/inputs/inputField/InputField";
import ModalForm from "../utils/modal/ModalForm";
import {postStudent} from "../AppService";
import { Link, Redirect } from 'react-router-dom'


const SignUp = (props) => {

    const defaultStudent = {
        username: "",
        phone_number: 0.0,
        email: "",
        password: "",
        rfid_tag: 0.0,
    };

    const [complete, setComplete] = useState(false);
    const [student, setStudent] = useState(defaultStudent);

    const onChangeUsername = (username) => {
        const newStudent = {...student};
        newStudent.username = username;
        setStudent(newStudent);
    };

    const onChangePassword = (password) => {
        const newStudent = {...student};
        newStudent.password = password;
        setStudent(newStudent);
    };

    const onChangeEmail = (email) => {
        const newStudent = {...student}
        newStudent.email = email;
        setStudent(newStudent);
    };

    const onChangePhoneNumber = (phone) => {
        const newStudent = {...student};
        newStudent.phone_number = phone;
        setStudent(newStudent);
    };

    const onComplete = () => {
        postStudent(student)
            .then(res => {
                if (res.status === 200){
                    setComplete(true)
                }
            });
    };


    return(
        <div className={style.signUp}>
            <ModalForm finishText="Account created" closing={props.closing} complete={complete} onComplete={onComplete} text="Signup">
                <h3>Creat account</h3>
                <InputField type="text" onChange={onChangeUsername} lable="Username" />
                <InputField type="number" onChange={onChangePhoneNumber} lable="Phone Number" />
                <InputField type="text" onChange={onChangeEmail} lable="E-mail" />
                <InputField type="password" onChange={onChangePassword} lable="Password" />
            </ModalForm>
        </div>
    )
}

export default SignUp;