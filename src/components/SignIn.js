import React, { useState, useEffect } from 'react';
import './SignIn.scss'
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom';

SignIn.propTypes = {
    closeModal: PropTypes.func,
};

function SignIn(props) {
    const [login, setLogin] = useState(false);
    const [formSignIn, setFormSignIn] = useState({
        email: '',
        password: ''
    });
    const { closeModal } = props;

    useEffect(() => {
        // if (isOpen) {
        //     inputElement.current.focus()
        // }
    })
    function handleValueChange(e) {
        let formSignInSubmit = {
            ...formSignIn,
            [e.target.name]: e.target.value,
        }
        setFormSignIn(formSignInSubmit)
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (formSignIn.email === '') {
            alert("Email is require")
            return;
        }
        if (formSignIn.password === '') {
            alert("Password is require")
            return;
        }
        if(formSignIn.email !== '1'){
            alert("user does not exist")
            return;
        }
        if (formSignIn.password !== '1') {
            alert("wrong password")
            return;
        }
        if(formSignIn.email === '1' && formSignIn.password === '1'){
            setLogin(true)
        }
        // closeModal()
        console.log(formSignIn)
    }
    if(login === true){
        return <Redirect to='/todo' />
    }
    return (
        <div className="SignIn">
            {/* <Alert color="danger" className={classNames}>
                This is a danger alert — check it out!
            </Alert> */}
            <h2>Sign In</h2>
            <div className="form-sign-in">
                <form action="" onSubmit={handleSubmit} className="form">
                    <div className="input-box">
                        <i className="fas fa-envelope-open"></i>
                        <input
                            type="text"
                            name='email'
                            value={formSignIn.email}
                            onChange={handleValueChange}
                            placeholder="email"
                        />
                    </div>
                    <div className="input-box">
                        <i className="fas fa-key"></i>
                        <input
                            type="password"
                            name='password'
                            value={formSignIn.password}
                            onChange={handleValueChange}
                            placeholder="password"
                        />
                    </div>
                    <div className="button">
                        <button className="btn btn-accept" type="submit" onClick={handleSubmit}>Sign In</button>
                        <button className="btn btn-close" onClick={closeModal}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;