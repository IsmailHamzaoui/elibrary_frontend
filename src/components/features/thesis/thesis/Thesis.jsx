import React from 'react';
import style from './Thesis.module.css';
import Field from '../../../utils/listItems/field/Field';

const Thesis = (props) => {
    return (<div className={style.thesis}>
        <a href="#">
            <Field fuck= "Thesis Title" value={props.thesisTitle} isStatus={false} />
            <Field fuck= "Thesis Date" value={props.thesisDate} isStatus={false}/>
            <Field fuck= "Thesis Student" value={props.thesisStudent} isStatus={false}/>
        </a>
    </div>)
};

export default Thesis;