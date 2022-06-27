import React, { useEffect } from 'react';
import { useState } from 'react';
import firebaseConfig from '../../../firebaseConfig';
import Login from './Login';
import User from './User';


const Signup = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // states for errors

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // state for swtiching signin to signup

    const [hasAccount, setHasAccount] = useState(false);


    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }


    const handleLogin = () => {
        clearErrors();
        firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    };


    const handleSignUp = () => {
        clearErrors();
        firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        });
    };


    const handleLogout = () => {
        firebaseConfig.auth().signOut();
    };


    // To check if user exists

    const authListener = () => {
        firebaseConfig.auth().onAuthStateChanged(user => {
            if(user) {
                clearInputs();
                setUser(user);
            } else {
                setUser('');
            }
        });
    };


    useEffect(() => {
        authListener();
    }, []);


  return (
    <div>
        {user ? (
            <User handleLogout={handleLogout}/>
        ) : (
            <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}/>
        )}
        
    </div>
  )
}

export default Signup;