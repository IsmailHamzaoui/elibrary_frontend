import React from 'react';
import style from './Exam.module.css';
import Field from '../../../utils/listItems/field/Field';

const Exam = (props) => {
    return (<div className={style.exam}>
        <a href="#">
            <Field fuck= "Exam Subject" value={props.examSubject} isStatus={false} />
            <Field fuck= "Exam Date" value={props.examType} isStatus={false}/>
            <Field fuck= "Exam Type" value={props.examDate} isStatus={false}/>
        </a>
    </div>)
};

export default Exam;