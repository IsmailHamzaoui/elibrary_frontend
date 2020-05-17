import React, {useEffect, useState} from 'react';
import style from './Thesises.module.css';
import {getAllThesiss} from "../../AppService";
import SearchInput from "../../utils/inputs/search/SearchInput";
import SortInput from "../../utils/inputs/sort/SortInput";
import ListItems from "../../utils/listItems/ListItems";
import Thesis from "./thesis/Thesis";

const Thesises = (props) => {

    const defaultThesises = [
        {
            thesis_title: "",
            thesis_date: null,
            thesis_student:""
        }
    ];

    const [listOfThesises, setListOfThesises] = useState(defaultThesises);
    const [search, setSearch] = useState("");
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        getAllThesiss()
            .then(thesises => setListOfThesises(thesises));
    }, []);

    useEffect(() => {
        if (search !== ""){
            const newThesises = listOfThesises.filter(thesis => thesis.thesis_title.toLowerCase().includes(search))
            setListOfThesises(newThesises);
        }else{
            getAllThesiss()
                .then(thesises => setListOfThesises(thesises));
        }
    }, [search]);

    const searchStyle = {
        width: "auto",
        marginRight: "100px",
    };

    const handleChange = (key) => {
        let listSorted = null;
        if (key === "thesis_title"){
            listSorted = listOfThesises.sort((a, b) => (a.thesis_title.toLowerCase()) > (b.thesis_title.toLowerCase()) ? 1 : -1)
        }else  if (key === "thesis_date"){
            listSorted = listOfThesises.sort((a, b) => (a.thesis_date.toLowerCase()) > (b.thesis_date.toLowerCase()) ? 1 : -1)
        } else {
            listSorted = listOfThesises.sort((a) => (a.thesis_student) ? 1 : -1)
        }
        forceUpdate()
        setListOfThesises(listSorted);
    };

    return <div className={style.thesises}>
        <h1>Thesises</h1>
        <div className={style.search}>
            <SearchInput onChange={setSearch} style={searchStyle}/>
            <SortInput handleChange={handleChange} />
        </div>
        <ListItems>
            {
                listOfThesises.map(thesis => {
                    return <Thesis thesisTitle={thesis.thesis_title} thesisDate={thesis.thesis_date} thesisStudent={thesis.thesis_student} />
                })
            }
        </ListItems>
    </div>
};

export default Thesises;