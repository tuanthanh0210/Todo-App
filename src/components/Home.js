import React, { useState } from 'react';
import './Home.scss'
import Header from './Header';
import welcome from '../images/welcome.svg'
import SignIn from './SignIn';
import SignUp from './SignUp';



function Home(props) {
    const [modalSignIn, setModalSignIn] = useState(false);
    const [modalSignUp, setModalSignUp] = useState(false);
    const toggleModalSignIn = () => {
        setModalSignUp(false);
        return setModalSignIn(!modalSignIn)
    }
    const toggleModalSignUp = () => {
        setModalSignIn(false)
        return setModalSignUp(!modalSignUp)
    }
    function closeModalSignIn(e){
        setModalSignIn(false)
    }
    function closeModalSignUp(e){
        setModalSignUp(false)
    }
    return (
        <div className="Home">
            <Header />

            <div className="main">
                {
                    !modalSignIn && !modalSignUp && <div className="home">
                        <h3>Hi,</h3>
                        <p>Welcome to Todo-App</p>
                        <i className="far fa-comment"></i>
                        <img width={250} src={welcome} alt="" />
                    </div>
                }
                {
                    modalSignIn && <SignIn 
                        isOpen={modalSignIn} 
                        closeModal={closeModalSignIn} 
                        className="SignIn" 
                    />
                }
                {
                    modalSignUp && <SignUp 
                        isOpen={modalSignUp} 
                        closeModal={closeModalSignUp} 
                        className="SignUp" 
                    />
                }
            </div>
            {
                !modalSignIn && !modalSignUp &&
                <div className="button-footer">
                    <button onClick={() => toggleModalSignIn()}>Sign In</button>
                    <button onClick={() => toggleModalSignUp()}>Sign Up</button>
                </div>
            }
        </div>
    );
}

export default Home;