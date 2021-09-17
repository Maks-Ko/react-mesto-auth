import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.owner._id === currentUser._id;
    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `element__delete ${isOwn ? 'element__delete_show' : ''}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = props.likes.some(i => i._id === currentUser._id);
    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = ( `element__like ${isLiked ? 'element__like_active' : ''}`);
    
    function handleLikeClick() {
        props.onCardLike(props);
    }

    function handleDeleteClick() {
        props.onCardDelete(props);
    }

    function handleClick() {
        props.onCardClick(props.name, props.link);
    }

    return(
        <li className="element">
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
            <img className="element__foto" src={props.link} alt={props.name} onClick={handleClick} />
            <div className="element__lable">
                <p className="element__title">{props.name}</p>
                <div className="element__lable-likes">
                <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                <p className="element__numder-likes">{props.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;