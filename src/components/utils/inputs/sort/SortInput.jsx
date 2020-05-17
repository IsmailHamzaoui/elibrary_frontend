import React from 'react';
import style from './SortInput.module.css';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const SortInput = (props) => {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();
    const [state, setState] = React.useState({
        filter: '',
        name: 'Sort by',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        props.handleChange(value);
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="filter-native-simple">{state.name}</InputLabel>
            <Select
                native
                value={state.name}
                onChange={handleChange}
                inputProps={{
                    name: 'filter',
                    id: 'filter-native-simple',
                }}
            >

                <option aria-label="None" value="" />
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="status">Status</option>
            </Select>
        </FormControl>
    )
}

export default SortInput;