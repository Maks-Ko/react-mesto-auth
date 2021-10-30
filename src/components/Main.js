import React from 'react';
import buttonAvatar from '../images/Vector_pen.png';
import Card from './Card';
import Header from './Header';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {    
    const currentUser = React.useContext(CurrentUserContext);

    return(
        
        <>
            <Header
                email={props.userDate}
                link="/signin"
                linkText="Выйти"
                onLogout={props.onLogout}
                loggedIn={props.loggedIn}
            />
            <main className="main">
                <section className="profile">
                    <img src={currentUser.avatar} alt="Аватарка" className="profile__avatar" />
                    <button type="button" background={buttonAvatar} className="profile__avatar-activ" onClick={props.onEditAvatar}></button>
                    <div className="profile-info">
                        <h1 className="profile-info__title">{currentUser.name}</h1>
                        <button type="button" className="profile-info__button" onClick={props.onEditProfile}></button>
                        <p className="profile-info__text">{currentUser.about}</p>
                    </div>
                    <button type="button" className="profile__button" onClick={props.onAddPlace}></button>
                </section>
                <section>
                    <ul className="elements">
                        {props.cards.map(card => {return(
                        <Card
                            name={card.name}
                            link={card.link}
                            likes={card.likes}
                            _id={card._id}
                            key={card._id}
                            owner={card.owner}
                            onCardClick={props.onCardClick}
                            onCardLike={props.onCardLike}
                            onCardDelete={props.onCardDelete}
                        />)})}
                    </ul>
                </section>
            </main>
        </>
    )    
}

export default Main;