import React, {useState, useEffect} from 'react';
import {setUsername} from '../store/actions/jeopardyStatsActions';
import {connect} from 'react-redux';

import '../styles/title.scss';

const Title = ({match, history, username, usernameValid, setUsername}) =>{

    useEffect(() =>{
        if(usernameValid){
            history.push(`${match.url}categories`);
        }
    }, [usernameValid, match.url, history]);


    const [usernameField, setUsernameField] = useState('');

    const onChangeHandler = e =>{
        setUsernameField(e.target.value);
    };

    const onSubmitHandler = e =>{
        e.preventDefault();
        if(usernameField !== '' && usernameField !== 'Player'){
            setUsername(usernameField);
        }
        setUsernameField('');
    };

    return (
        <div className="app-title">
            <p>{username} if you love to challenge yourself with trivia then this is the perfect application for you. Please enter in a username so that we can get started!</p>
            <form  className="title-form" onSubmit={onSubmitHandler}>
                <label className="username-input" htmlFor="username">
                    Username <input type="text" value={usernameField} id="username" name="username" onChange={onChangeHandler} placeholder="enter username" />
                </label>
                <button className="answer-button" type="submit">Start Playing!</button>
            </form>
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        username: state.jeopardyStatsReducer.username,
        usernameValid: state.jeopardyStatsReducer.usernameValid,
    };
};

export default connect(mapStateToProps, {setUsername})(Title);