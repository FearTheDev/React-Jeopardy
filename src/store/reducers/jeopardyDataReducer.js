import {START_QUESTIONS_FETCH, QUESTIONS_FETCH_SUCCESS, QUESTIONS_FETCH_FAILURE} from '../actions';

const initState = {
    isFetchingQuestions: false,
    error: '',
    jeopardyCard: [],
    categories: [
        {
            "id": 5412,
            "title": "prehistoric times",
            "clues_count": 10
            },
            {
            "id": 7580,
            "title": "animal words & phrases",
            "clues_count": 15
            },
            {
            "id": 11538,
            "title": "early american history",
            "clues_count": 5
            },
            {
            "id": 11539,
            "title": "it's all in the game",
            "clues_count": 5
            },
            {
            "id": 10181,
            "title": "let's eat",
            "clues_count": 15
            },
            {
            "id": 11533,
            "title": "the great state of...",
            "clues_count": 5
            },
            {
            "id": 11535,
            "title": "cookbooks for kids",
            "clues_count": 5
            },
            {
            "id": 11537,
            "title": "words for youngsters",
            "clues_count": 5
            },
            {
            "id": 11527,
            "title": "kids rule!",
            "clues_count": 5
            },
            {
            "id": 11557,
            "title": "song titles' missing beginnings",
            "clues_count": 5
            },
            {
            "id": 10646,
            "title": "james bond",
            "clues_count": 10
            },
            {
            "id": 11576,
            "title": "scrambled gods & goddesses",
            "clues_count": 5
            },
            {
            "id": 11579,
            "title": "tasty ad slogans",
            "clues_count": 5
            },
            {
            "id": 11603,
            "title": "shakespeare quotes",
            "clues_count": 5
            },
            {
            "id": 11604,
            "title": "ben & jerry's flavors",
            "clues_count": 15
            },
            {
            "id": 11584,
            "title": "movie remakes",
            "clues_count": 5
            },
            {
            "id": 754,
            "title": "anagrams",
            "clues_count": 91
            },
            {
            "id": 11699,
            "title": "presidents & vice presidents",
            "clues_count": 15
            },
            {
            "id": 11690,
            "title": "celebrity anecdotes",
            "clues_count": 5
            },
            {
            "id": 11718,
            "title": "their first top 10 solo hit",
            "clues_count": 5
            },
            {
            "id": 11740,
            "title": "fictional games",
            "clues_count": 5
            },
    ],
};


export const jeopardyDataReducer = (state = initState, action) =>{
    switch(action.type){

        case START_QUESTIONS_FETCH:
            return{
                ...state,
                isFetchingQuestions: true,
                error: '',
            }

        case QUESTIONS_FETCH_SUCCESS:
            console.log(action.payload);
            return{
                ...state,
                isFetchingQuestions: false,
                error: '',
                jeopardyCard: [...action.payload],
            }

        case QUESTIONS_FETCH_FAILURE:
            return{
                ...state,
                isFetchingQuestions: false,
                error: action.payload,
            }             

        default:
            return {...state};
    }
};