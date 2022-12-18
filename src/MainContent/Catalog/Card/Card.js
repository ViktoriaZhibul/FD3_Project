import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from "./../../../Header/use-auth"
import { addUserFavorites, deliteFavorites } from "./../../../redux/favoritesSlice";

import "./Card.css";


function Card({info}) {
    const dispatch = useDispatch();
    const favorites = useSelector( state => state.favorites.idBreed );
    
    const {isAuth, id} = useAuth();

    const addFavorities = (value, idCard) => {
        if (value === "Добавить в избранное") {
            dispatch(addUserFavorites(idCard));
        }
        if (value === "Удалить из избранного") {
            dispatch(deliteFavorites(idCard));
        }
        }

        function getValue(obj, id) {
            let value="Добавить в избранное";
            if ( favorites.includes(id) )
            obj.value="Удалить из избранного";
            return value;
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
            {(isAuth)&&(<input type="button" value={"Добавить в избранное"} className="card__button" onClick={(event) =>{
                getValue(event.target, info.id);
                addFavorities(event.target.value, info.id)}
            } />)}
        </div>
    )
}

export default Card;