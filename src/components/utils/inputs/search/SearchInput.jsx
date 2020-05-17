import React from 'react';
import style from './Search.module.css';
import {Grid, TextField} from "@material-ui/core";
import {Search} from "@material-ui/icons";

const SearchInput = (props) => {
    return (
        <Grid style={props.style} container spacing={1} alignItems="flex-end">
            <Grid item>
                <Search />
            </Grid>
            <Grid item>
                <TextField onChange={event => props.onChange(event.target.value)} id="input-with-icon-grid" label="Search" fullWidth />
            </Grid>
        </Grid>
    )
}

export default SearchInput;