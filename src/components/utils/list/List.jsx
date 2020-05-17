import React from 'react';
import style from './List.module.css';
import ListItem from './listItem/ListItem';

const List = (props) => {

    return(
        <ul>
            {props.items.map((item, i) =>{
                return<ListItem key={i} url={item.url} value={item.value} />
            })}
        </ul>
    )
};

export default List;