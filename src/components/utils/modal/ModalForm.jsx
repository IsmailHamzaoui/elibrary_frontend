import React, { Component } from "react";
import style from './ModalForm.module.css';
import { Button, Modal } from "@material-ui/core";
import InputField from "../inputs/inputField/InputField";
import { postStudent } from '../../AppService';


class ModalForm extends Component{

    constructor(props) {
        super(props);

        this.state = {
            complete: false,
            student:{
                username: "",
                phone_number: 0.0,
                email: "",
                password: "",
                rfid_tag: 0.0,
            }
        };

        this.onComplete = this.onComplete.bind(this);
        this.onChangeUsername= this.onChangeUsername.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onChangePhoneNumber= this.onChangePhoneNumber.bind(this);
    }

    onComplete = () => {
        postStudent(this.state.student)
            .then(res => {
                if (res.status === 200){
                    this.setState({complete: true})
                }
            });
    };

    onChangeUsername = (username) => {
        const newState = {...this.state.student};
        newState.username = username;
        this.setState({student: newState});
    };

    onChangePassword = (password) => {
        const newState = {...this.state.student};
        newState.password = password;
        this.setState({student: newState});
    };

    onChangeEmail = (email) => {
        const newState = {...this.state.student};
        newState.email = email;
        this.setState({student: newState});
    };

    onChangePhoneNumber = (phone) => {
        const newState = {...this.state.student};
        newState.phone_number = phone;
        this.setState({student: newState});
    };

    render() {
        return(
            <>
            <div className={style.fullScreen} onClick={this.props.closing}>k</div>
            <div className={style.container} >
                {
                    !this.state.complete ? (
                        <>
                        <h3>Creat account</h3>
                        <div className={style.form}>
                            <InputField type="text" onChange={this.onChangeUsername} lable="Username" />
                            <InputField type="number" onChange={this.onChangePhoneNumber} lable="Phone Number" />
                            <InputField type="text" onChange={this.onChangeEmail} lable="E-mail" />
                            <InputField type="password" onChange={this.onChangePassword} lable="Password" />
                        </div>
                        </>
                    ) : (
                        <div>
                            <p>Account created</p>
                        </div>
                    )
                }

                <button onClick={this.state.complete
                    ? this.onComplete
                    : this.props.closing}>{this.state.complete ? "Close" : "Signup"}</button>
            </div>
            </>
        )
    }
};

export default ModalForm;