import React from 'react';
import style from './Exercise.module.css';
import Field from '../../../utils/listItems/field/Field';

const Exercise = (props) => {
    return (<div className={style.exercise}>
        <a href="#">
            <Field fuck= "Exercise Sbject" value={props.exercisesubject} isStatus={false} />
            <Field fuck= "Exercise Date" value={props.exercisedate} isStatus={false}/>
        </a>
    </div>)
};

export default Exercise;