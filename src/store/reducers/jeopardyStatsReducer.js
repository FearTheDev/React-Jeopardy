import {ADD_SCORE, SUBTRACT_SCORE, SET_USERNAME} from '../actions/';

const initState = {
    username: 'Player',
    usernameValid: false,
    playerScore: 0,
    correct: 0,
    wrong: 0,
};

export const jeopardyStatsReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return { ...state };


        case ADD_SCORE:
            return {
                ...state,
                hasSubmittedAnswer: true,
                correct: state.correct + 1,
                playerScore: state.playerScore + state.jeopardyCard.value,
            };

        case SUBTRACT_SCORE:
            return {
                ...state,
                hasSubmittedAnswer: true,
                wrong: state.wrong + 1,
                playerScore: state.playerScore - state.jeopardyCard.value,
            };

        case SET_USERNAME:
            console.log(`SET USERNAME: ${action.payload}`);
            return{
                ...state,
                usernameValid: true,
                username: action.payload,
            }
    }
}