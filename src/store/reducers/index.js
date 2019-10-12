import {START_QUESTION_FETCH, QUESTION_FETCH_SUCCESS, QUESTION_FETCH_FAILURE, ADD_SCORE, SUBTRACT_SCORE} from '../actions';

const initState = {
    playerScore: 0,
    correct: 0,
    wrong: 0,
    hasSubmittedAnswer: false,
    isFetchingQuestion: false,
    succeededFetchingQuestion: false,
    error: '',
    jeopardyCard: {
        answer: "because..",
        category: {
            title: "Dummy Data"
        },
        question: "What does it have to do?",
        value: 200,
    },
};


export const jeopardyReducer = (state = initState, action) =>{
    switch(action.type){

        case START_QUESTION_FETCH:
            return{
                ...state,
                isFetchingQuestion: true,
                succeededFetchingQuestion: false,
                error: '',
            }

        case QUESTION_FETCH_SUCCESS:
            console.log(action.payload);
            return{
                ...state,
                hasSubmittedAnswer: false,
                isFetchingQuestion: false,
                error: '',
                succeededFetchingQuestion: true,
                jeopardyCard: {...action.payload},
            }

        case QUESTION_FETCH_FAILURE:
            return{
                ...state,
                isFetchingQuestion: false,
                error: action.payload,
            }

        case ADD_SCORE:
            return{
                ...state,
                hasSubmittedAnswer: true,
                correct: state.correct + 1,
                playerScore: state.playerScore + state.jeopardyCard.value,
            };

        case SUBTRACT_SCORE:
            return{
                ...state,
                hasSubmittedAnswer: true,
                wrong: state.wrong + 1,
                playerScore: state.playerScore - state.jeopardyCard.value,
            };                


        default:
            return {...state};
    }
};