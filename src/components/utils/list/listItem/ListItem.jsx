import React from 'react';
import style from './ListItem.module.css';

const ListItem = (props) => {

    return(
        <li><a href={props.url}>{props.value}</a></li>
    )
};

export default ListItem;