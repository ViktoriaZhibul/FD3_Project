import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from "./../../../Header/use-auth"
import { addUserFavorites } from "./../../../redux/favoritesSlice";

import "./Card.css";


function Card({info}) {
    const dispatch = useDispatch();
    
    const {isAuth, id} = useAuth();

    const addFavorities = (idCard) => {
        dispatch(addUserFavorites(idCard));
        alert("Порода успешно добавлена!");
        }

    return (
        <div className='card_wrap'>
            <p className="card__title">{info.name}</p>
            <div className='img__container'>
                <img src={info.img} alt={info.name} className='img'/>
            </div>
            <p className="card__discription">{info.category}</p>
            <p className="card__discription">{info.group}</p>
            <p className="card__discription">{info.fur}</p>
            <p className="card__discription">{info.size}</p>
            {(isAuth)&&(<input type="button" value="Добавить в избранное" className="card__button" onClick={() =>{addFavorities( info.id)}
            } />)}
        </div>
    )
}

export default Card;