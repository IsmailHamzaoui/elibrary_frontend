import React from 'react';

export const getAllBooks = () => {
    return fetch('/book/all')
        .then(res => res.json())
        .then(response => response);
};

export const getAllExams = () => {
    return fetch('/exam/all')
        .then(res => res.json())
        .then(response => response);
};

export const getAllExercises = () => {
    return fetch('/exercise/all')
        .then(res => res.json())
        .then(response => response);
};

export const postStudent = (student) => {
    return fetch('/student/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(student),
    })
};



export const getAllThesiss = () => {
    return fetch('/thesis/all')
        .then(res => res.json())
        .then(response => response);
};