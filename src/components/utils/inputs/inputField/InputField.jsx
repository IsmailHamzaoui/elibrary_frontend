import React from 'react';
import style from './InputField.module.css';
import { TextField } from "@material-ui/core";


const InputField = (props) => {

    return(
        <>
            <label>{props.lable}</label>
            <TextField
                id="outlined-basic"
                type={props.type}
                label={props.label}
                onChange={event => props.onChange(event.target.value)}
                variant="outlined"
            />
        </>
    )
};

export default InputField;