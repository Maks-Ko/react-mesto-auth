import '../index.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import InfoTooltip from './InfoTooltip';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false, name: '', link: ''});  
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    api.getItemsUser()
    .then((date) => {
        setCurrentUser(date);
    })
    .catch((err) => {
        console.log(err); // "Что-то пошло не так: ..."
    });
  }, []);

  React.useEffect(() => {        
    api.getItemsCards()
    .then((date) =>{            
        setCards(date);
    })
    .catch((err) => {
        console.log(err); // "Что-то пошло не так: ..."
    });

  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.toggleLikeCard(card._id, isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(err); // "Что-то пошло не так: ..."
    });
  }

  function handleCardDelete(card) {
    api.deleteCardUser(card._id)
    .then(() => {
      setCards((cards) => cards.filter((c) => c._id !== card._id));
    })
    .catch((err) => {
      console.log(err); // "Что-то пошло не так: ..."
    });
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(name, link) {
    setSelectedCard({
      isOpen: true,
      name: name,
      link: link,
    })
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', closeByEscape);
    
    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);

  function closeAllPopups(){
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({
      isOpen: false,
      name: '',
      link: '',
    });
  }

  function handleUpdateUser(props) {
    api.editProfile(props)
    .then((date) => {
      setCurrentUser(date);
      closeAllPopups();     
    })
    .catch((err) => {
      console.log(err); // "Что-то пошло не так: ..."
    });
  }

  function handleUpdateAvatar(props) {
    api.editAvatar(props)
    .then((date) => {
      setCurrentUser(date);
      closeAllPopups();     
    })
    .catch((err) => {
      console.log(err); // "Что-то пошло не так: ..."
    });
  }
  
  function handleAddPlaceSubmit(props) {
    api.addCardForm(props)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();     
    })
    .catch((err) => {
      console.log(err); // "Что-то пошло не так: ..."
    });
  }
  
  return (
    <div className="root">
      <CurrentUserContext.Provider value = {currentUser}>
        {/* <Header /> */}
        <Switch>          
          <Route exact path="/sign-in">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
          <ProtectedRoute
            path = "/"
            loggedIn = {loggedIn}
            component = {Main}
            onEditAvatar = {handleEditAvatarClick}
            onEditProfile = {handleEditProfileClick}
            onAddPlace = {handleAddPlaceClick}
            onCardClick = {handleCardClick}
            cards = {cards}
            onCardLike = {handleCardLike}
            onCardDelete = {handleCardDelete}
          />
          {/* <Route path="/">
            <Main
                onEditAvatar = {handleEditAvatarClick}
                onEditProfile = {handleEditProfileClick}
                onAddPlace = {handleAddPlaceClick}
                onCardClick = {handleCardClick}
                cards = {cards}
                onCardLike = {handleCardLike}
                onCardDelete = {handleCardDelete} />
          </Route> */}
        </Switch>
        <Footer />        
        <EditProfilePopup
            isOpen = {isEditProfilePopupOpen}
            onClose = {closeAllPopups}
            onUpdateUser = {handleUpdateUser}/>
        <EditAvatarPopup
            isOpen = {isEditAvatarPopupOpen}
            onClose = {closeAllPopups}
            onUpdateAvatar = {handleUpdateAvatar} />
        <AddPlacePopup
            isOpen = {isAddPlacePopupOpen}
            onClose = {closeAllPopups}
            onAddPlace = {handleAddPlaceSubmit} />        
        <PopupWithForm
            name = "delete-card"
            title = "Вы уверены?"
            buttonText = "Удалить" />
        <ImagePopup
            isOpen = {selectedCard.isOpen ? "popup_is-opened" : ""}
            onClose = {closeAllPopups}
            name = {selectedCard.name}
            link = {selectedCard.link} />
        <InfoTooltip
            isOpen = {false? "popup_is-opened" : ""}
            name = "tooltipe"
            isImage = {true ? "successfully" : "unsuccessful"}
            isLuck = {true ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."} />
      </CurrentUserContext.Provider>   
    </div>
  );
}

export default App;
