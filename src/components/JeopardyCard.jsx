import React from 'react';
import JeopardyForm from './JeopardyForm';

const JeopardyCard = ({fetchJeopardyQuestion, hasSubmittedAnswer, category, question, value, answer, validateAnswer}) =>{
    return(
        <div className="card">
            <div className="card-header">
                <h2>Category: {category.title}</h2>
                <h2>Points: {value}</h2>
            </div>
            <div className="card-body">
                <div className="question-container">
                    <h3>Question:</h3>
                    <p className="question">{question}</p>
                </div>
                <div className="answer-container">
                    <h3>Answer:</h3>
                    <p className="answer">{hasSubmittedAnswer && answer}</p>
                </div>
                {hasSubmittedAnswer ? <button className="answer-button jeopardy-form" onClick={fetchJeopardyQuestion}>Next Question</button> : <JeopardyForm validateAnswer={validateAnswer}/>}
            </div>
        </div>
    );
};

export default JeopardyCard;