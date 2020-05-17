import React from 'react';
import style from './Field.module.css';

const Field = (props) => {

    return (
        <div className={style.Field}>
            {
                props.isStatus ? (
                    <div className={props.value ? style.available : style.taken}>{props.value ? "Available" : "Taken"}</div>
                ) : (
                    <><span className={style.default}>{props.fuck}  : </span>{props.value}</>
                )
            }

        </div>
    )

}

export default Field;