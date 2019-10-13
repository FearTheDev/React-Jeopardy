import React, {useState} from 'react';

import '../styles/title.scss';

const Title = props =>{

    const [username, setUsername] = useState('');

    const onChangeHandler = e =>{
        setUsername(e.target.value);
    };

    const onSubmitHandler = e =>{
        e.preventDefault();
        alert(username);
    };

    return (
        <div className="app-title">
            <p>If you love to challenge yourself with trivia then this is the perfect application for you. Please enter in a username so that we can get started!</p>
            <form  className="title-form" onSubmit={onSubmitHandler}>
                <label className="username-input" htmlFor="username">
                    Username <input type="text" value={username} id="username" name="username" onChange={onChangeHandler} />
                </label>
                <button className="answer-button" type="submit">Start Playing!</button>
            </form>
        </div>
    );
};

export default Title;