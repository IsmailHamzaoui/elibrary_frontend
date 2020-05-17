import React, {useEffect, useState} from 'react';
import style from './Exercises.module.css';
import ListItems from "../../utils/listItems/ListItems";
import SearchInput from "../../utils/inputs/search/SearchInput";
import SortInput from "../../utils/inputs/sort/SortInput";
import {getAllExercises} from "../../AppService";
import Exercise from './exercise/Exercise';

const Exercises = () => {

    const defaultExercises = [
        {
            exercise_subject: "",
            exercise_date: "",

        }
    ];

    const [listOfExercises, setListOfExercises] = useState(defaultExercises);
    const [search, setSearch] = useState("");
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        getAllExercises()
            .then(exercises => setListOfExercises(exercises));
    }, []);

    useEffect(() => {
        if (search !== ""){
            const newExercises = listOfExercises.filter(exercise => exercise.exercise_subject.toLowerCase().includes(search))
            setListOfExercises(newExercises);
        }else{
            getAllExercises()
                .then(exercises => setListOfExercises(exercises));
        }
    }, [search]);

    const searchStyle = {
        width: "auto",
        marginRight: "100px",
    };

    const handleChange = (key) => {
        let listSorted = null;
        if (key === "title"){
            listSorted = listOfExercises.sort((a, b) => (a.exercise_subject.toLowerCase()) > (b.exercise_subject.toLowerCase()) ? 1 : -1)
        }else  if (key === "author"){
            listSorted = listOfExercises.sort((a, b) => (a.exercise_date.toLowerCase()) > (b.exercise_date.toLowerCase()) ? 1 : -1)
        }
        forceUpdate()
        setListOfExercises(listSorted);
    };
    return (
        <div className={style.Exercises}>
            <h1>Exercises</h1>
            <div className={style.search}>
                <SearchInput onChange={setSearch} style={searchStyle}/>
                <SortInput handleChange={handleChange} />
            </div>
            <ListItems >
                {
                    listOfExercises.map((exercise, i) => {
                        return <Exercise key={i} exercisesubject={exercise.exercise_subject} exercisedate={exercise.exercise_date}/>

                    })
                }
            </ListItems>

        </div>
    )
};

export default Exercises;