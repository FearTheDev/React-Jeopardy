import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJeopardyQuestion, addScore, subtractScore } from '../store/actions';
import JeopardyCard from './JeopardyCard';
import logo from '../logo.svg';
import '../styles/app.scss';


const App = ({ jeopardyCard, hasSubmittedAnswer, addScore, subtractScore, fetchJeopardyQuestion, isFetchingQuestion, playerScore, error, correct, wrong }) => {

  useEffect(() => {
    fetchJeopardyQuestion();
  }, [fetchJeopardyQuestion]);

  const validateAnswer = answer => {
    if (!hasSubmittedAnswer) {
      if (answer.toLowerCase() === jeopardyCard.answer.toLowerCase()) {
        addScore(jeopardyCard.value);
      } else {
        subtractScore(jeopardyCard.value);
      }
    }

  };

  if (isFetchingQuestion) {
    return (
      <h2>Fetching Jeopardy Question..</h2>
    );
  }

  return (
    <div className="app">
      <div className="app-head">
        <h1><img className="react-logo" src={logo} alt="logo" /> React Jeopardy</h1>
        <div className="app-stats">
          <h2>Score: {playerScore}</h2>
          <h2>Correct: {correct}</h2>
          <h2>Wrong: {wrong}</h2>
        </div>
        
      </div>
      <JeopardyCard validateAnswer={validateAnswer} {...jeopardyCard} hasSubmittedAnswer={hasSubmittedAnswer} fetchJeopardyQuestion={fetchJeopardyQuestion}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerScore: state.playerScore,
    jeopardyCard: state.jeopardyCard,
    isFetchingQuestion: state.isFetchingQuestion,
    error: state.error,
    wrong: state.wrong,
    correct: state.correct,
    hasSubmittedAnswer: state.hasSubmittedAnswer,
  };
}

export default connect(mapStateToProps, { fetchJeopardyQuestion, addScore, subtractScore })(App);
