import React from 'react';

export const getAllBooks = () => {
    return fetch('/book/all', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(response => response);
};

export const getAllExams = () => {
    return fetch('/exam/all', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(response => response);
};

export const getAllExercises = () => {
    return fetch('/exercise/all', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(response => response);
};

export const postStudent = (student) => {
    return fetch('/student/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
    })
};



export const getAllThesiss = () => {
    return fetch('/thesis/all', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(response => response);
};