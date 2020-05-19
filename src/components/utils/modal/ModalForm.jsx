import React, { Component } from "react";
import style from './ModalForm.module.css';
import { Button, Modal } from "@material-ui/core";
import InputField from "../inputs/inputField/InputField";
import { postStudent } from '../../AppService';


class ModalForm extends Component{

    constructor(props) {
        super(props);
    }
    render() {
        return<>
        <div className={style.fullScreen} onClick={this.props.closing}>k</div>
        <div className={style.container} >
            {
                !this.props.complete ? <>
                    <div className={style.form}>
                        {this.props.children}
                    </div>
                    </> : <div>
                        <p>{this.props.finishText}</p>
                    </div>
            }
            <button onClick={this.props.complete
                ? this.props.onComplete
                : this.props.closing}>{this.props.complete ? "Close" : this.props.text}</button>
        </div>
        </>
    }
}

export default ModalForm;