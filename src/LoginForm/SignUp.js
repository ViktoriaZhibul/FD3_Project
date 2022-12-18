import React from "react";
import { useDispatch } from "react-redux";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import LoginForm from './LoginForm';
import { setUser } from "./../redux/userSlice";

const SignUp = () => {
    const dispatch = useDispatch();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                }));
            })
            .catch(console.error)
    }

    return (
        <LoginForm 
            title={"Зарегистрироваться"}
            handleClick={handleRegister}
        />
    )
}

export default SignUp;