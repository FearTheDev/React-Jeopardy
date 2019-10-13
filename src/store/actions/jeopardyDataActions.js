import axios from 'axios';

export const START_QUESTIONS_FETCH = 'START_QUESTIONS_FETCH';
export const QUESTIONS_FETCH_SUCCESS = 'QUESTIONS_FETCH_SUCCESS';
export const QUESTIONS_FETCH_FAILURE = 'QUESTIONS_FETCH_FAILURE';

export const fetchJeopardyQuestions = () => dispatch =>{
    dispatch({type: START_QUESTIONS_FETCH});
    
    axios.get('http://jservice.io/api/random')
    .then(res => dispatch({type: QUESTIONS_FETCH_SUCCESS, payload: res.data[0]}))
    .catch(error => dispatch({type: QUESTIONS_FETCH_FAILURE, payload: error.response}));
};