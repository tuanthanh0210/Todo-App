import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './SignUp.scss';

SignUp.propTypes = {
    closeModal: PropTypes.func,
};

function SignUp(props) {
    const [formSignUp, setFormSignUp] = useState({
        email: '',
        password: '',
        name: ''
    });
    const {closeModal } = props;

    useEffect(() => {
        
    })
    function handleValueChange(e) {
        let formSignUpSubmit = {
            ...formSignUp,
            [e.target.name]: e.target.value
        }
        setFormSignUp(formSignUpSubmit)
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formSignUp)
        closeModal();
    }


    return (
        <div className="SignUp">
            <h2>Sign Up</h2>
            <div className="form-sign-in">
                <form onSubmit={handleSubmit} className="form">
                    <div className="input-box">
                        <i className="fas fa-user"></i>
                        <input type="text" value={formSignUp.name} onChange={handleValueChange} name='name' placeholder="Name" />
                    </div>
                    <div className="input-box">
                        <i className="fas fa-envelope-open"></i>
                        <input type="text" value={formSignUp.email} onChange={handleValueChange} name='email' placeholder="Email" />
                    </div>
                    <div className="input-box">
                        <i className="fas fa-key"></i>
                        <input type="password" value={formSignUp.password} onChange={handleValueChange} name='password' placeholder="password" />
                    </div>
                    <div className="button">
                        <button className="btn btn-accept" type="submit" onClick={handleSubmit}>Sign Up</button>
                        <button className="btn btn-close" onClick={closeModal}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;