import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import "./Header.css";
import imgUser from "../img/user.png"
import SignUp from "./../LoginForm/SignUp"
import Login from './../LoginForm/Login';
import { useAuth } from './use-auth';
import { removeUser } from './../redux/userSlice';
import { removeFavorites } from './../redux/favoritesSlice';

import firebaseConfig from "./../firebase"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

function Header() {
    const dispatch = useDispatch();
    const [showForm, setDisplay] = useState({display: "none"});
    const {isAuth, email, id} = useAuth();
    const favorites = useSelector( state => state.favorites.idBreed ); 

    const showFormLogin = () => {
        isAuth ? setDisplay({display: "none"}) : setDisplay({display: "flex"})
    }

    const closeModalLogin = () => {
        setDisplay({display: "none"})
    }

    const addFavoritesTiFirebase = () => {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const data = onSnapshot(collection(db, 'favorities'), (querySnapshot) => {
            querySnapshot.forEach((el) => {
                    const dataRef = doc(db, 'favorities', id);
                    setDoc(dataRef, {
                        idBreed: favorites,
                        idUser: id,
                });
            });
        });
        dispatch(removeUser());
        dispatch(removeFavorites());
        setDisplay({display: "none"});
    }

    return (
        <>
        <header className="header">
            <NavLink to="/" end className="logo-name">
                <span>DOG</span>
                <br />
                <span>BREEDS</span>
            </NavLink>
            <div className="user__container">
                <button className="user__img-container" onClick={showFormLogin}>
                    <img src={imgUser} alt="Photo user" className="user__img" />
                </button>
                <span className="header__contacts-font header-contacts__tel">{ isAuth ? email : "User name" }</span>
                {isAuth ? (
                    <button
                    onClick={addFavoritesTiFirebase}
                    className="logout__button"
                    >
                        Выйти
                    </button>
                ) : null}
            </div>
        </header>
        {
        <div 
            style={isAuth ? {display: "none"} : showForm}
            className='container_question shadow'
        >
            <button
                onClick={closeModalLogin}
                className="button__closeModal"
                >X</button>
            <SignUp />
            <Login />
        </div>
        }
        </>
    );
}

export default Header;