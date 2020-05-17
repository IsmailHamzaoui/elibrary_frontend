import React from 'react';
import style from './Sidebar.module.css';
import List from '../utils/list/List';

const Sidebar = (props) => {


    const Categories = [
        {
            url: "#",
            value: "Programming",
        },
        {
            url: "#",
            value: "Electronics",
        },
        {
            url: "#",
            value: "Telecommunication",
        },
        {
            url: "#",
            value: "Internet of things",
        }
    ];
    const Formats = [
        {
            url: "#",
            value: "Paper Exam",
        },
        {
            url: "#",
            value: "PDF",
        },
    ];

    return (
        <div className={style.sidebar}>
            <div>
                <p>Categories</p>
                <List items={Categories} />
            </div>

            <hr />

            <div>
                <p>Format</p>
                <List items={Formats} />
            </div>


        </div>



    )
};

export default Sidebar;