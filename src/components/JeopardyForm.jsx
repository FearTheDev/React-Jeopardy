import React, {useState} from 'react';

const JeopardyForm = props =>{

    const [answer, setAnswer] = useState('');

    const handleChange = e =>{
        setAnswer(e.target.value);
    };

    const handleSubmit = e =>{
        e.preventDefault();
        props.validateAnswer(answer);
    };

    return(
        <form className="jeopardy-form" onSubmit={handleSubmit}>
            <label htmlFor="answer-field">
                <input className="answer-field" type="text" name="answer-field" value={answer} placeholder="enter answer" onChange={handleChange}/>
            </label>
            <button className="answer-button" type="submit" >Submit Answer</button>
        </form>
    );
};

export default JeopardyForm;