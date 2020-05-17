import React, {useEffect, useState} from 'react';
import style from './Exams.module.css';
import {getAllExams} from "../../AppService";
import SearchInput from "../../utils/inputs/search/SearchInput";
import SortInput from "../../utils/inputs/sort/SortInput";
import ListItems from "../../utils/listItems/ListItems";
import Exam from "./exam/Exam";

const Exams = (props) => {

    const defaultExams = [
        {
            exam_subject: "",
            exam_date: "",
            exam_type:""
        }
        ];

    const [listOfExams, setListOfExams] = useState(defaultExams);
    const [search, setSearch] = useState("");
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        getAllExams()
            .then(exams => setListOfExams(exams));
    }, []);

    useEffect(() => {
        if (search !== ""){
            const newExams = listOfExams.filter(exam => exam.exam_subject.toLowerCase().includes(search))
            setListOfExams(newExams);
        }else{
            getAllExams()
                .then(exams => setListOfExams(exams));
        }
    }, [search]);

    const searchStyle = {
        width: "auto",
        marginRight: "100px",
    };

    const handleChange = (key) => {
        let listSorted = null;
        if (key === "exam_subject"){
            listSorted = listOfExams.sort((a, b) => (a.exam_subject.toLowerCase()) > (b.exam_subject.toLowerCase()) ? 1 : -1)
        }else  if (key === "exam_date"){
            listSorted = listOfExams.sort((a, b) => (a.exam_date.toLowerCase()) > (b.exam_date.toLowerCase()) ? 1 : -1)
        } else {
            listSorted = listOfExams.sort((a) => (a.exam_type) ? 1 : -1)
        }
        forceUpdate()
        setListOfExams(listSorted);
    };

    return <div className={style.exams}>
        <h1>Exams</h1>
        <div className={style.search}>
            <SearchInput onChange={setSearch} style={searchStyle}/>
            <SortInput handleChange={handleChange} />
        </div>
        <ListItems>
            {
                listOfExams.map(exam => {
                    return <Exam examSubject={exam.exam_subject} examType={exam.exam_type} examDate={exam.exam_date} />
                })
            }
        </ListItems>
    </div>
};

export default Exams;