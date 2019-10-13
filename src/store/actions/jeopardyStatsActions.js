export const ADD_SCORE = 'ADD_SCORE';
export const SUBTRACT_SCORE = 'SUBTRACT_SCORE';

export const SET_USERNAME = 'SET_USERNAME';



export const setUsername = username =>{
    return ({type: SET_USERNAME, payload: username});
}

export const addScore = score =>
{
    return({type: ADD_SCORE, payload: score});
};

export const subtractScore = score =>
{
    return({type: SUBTRACT_SCORE, payload: score});
};