import React, {useState} from 'react';
import style from './Book.module.css';
import Field from '../../../utils/listItems/field/Field';

const Book = (props) => {

    const [showMore, setShowMore] = useState(false);

    const onMouseEnter = () => {
        setShowMore(true);
    };

    const onMouseLeave = () => {
        setShowMore(false);
    };

    return (<div className={style.book}

    >
        <a href="#">
            <Field fuck= "Title" value={props.titleUsedInBook}  isStatus={false} />
            <Field fuck= "Author" value={props.authorUsedInBook} isStatus={false}/>
            <Field fuck= "Status" value={props.statusUsedInBook} isStatus={true}/>


        </a>
    </div>)
};

export default Book;