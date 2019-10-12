import axios from 'axios';

export const START_QUESTION_FETCH = 'START_QUESTION_FETCH';
export const QUESTION_FETCH_SUCCESS = 'QUESTION_FETCH_SUCCESS';
export const QUESTION_FETCH_FAILURE = 'QUESTION_FETCH_FAILURE';

export const ADD_SCORE = 'ADD_SCORE';
export const SUBTRACT_SCORE = 'SUBTRACT_SCORE';


export const addScore = score =>
{
    return({type: ADD_SCORE, payload: score});
};

export const subtractScore = score =>
{
    return({type: SUBTRACT_SCORE, payload: score});
};


export const fetchJeopardyQuestion = () => dispatch =>{
    dispatch({type: START_QUESTION_FETCH});
    
    axios.get('http://jservice.io/api/random')
    .then(res => dispatch({type: QUESTION_FETCH_SUCCESS, payload: res.data[0]}))
    .catch(error => dispatch({type: QUESTION_FETCH_FAILURE, payload: error.response}));
};