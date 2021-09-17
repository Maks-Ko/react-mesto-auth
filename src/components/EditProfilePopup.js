import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    function handleChangeName(e) {
        setName(e.target.value);
    }
    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return(
        <PopupWithForm
            isOpen = {props.isOpen ? "popup_is-opened" : ""}
            onClose = {props.onClose}
            name="edit-profile"
            title="Редактировать профиль"
            id="profileFormValidator"
            buttonText="Сохранить"
            onSubmit={handleSubmit}
            >
              <input name="user_name" value={name || ''} onChange={handleChangeName} id="user_name" className="form__text form__text_edit_name" type="text" placeholder="Имя" requiredminlength="2" maxLength="40" />
              <span id="user_name-error" className="form__input-error"></span>
              <input name="activity" value={description || ''} onChange={handleChangeDescription} id="activity" className="form__text form__text_edit_about-me" type="text" placeholder="Вид деятельности" requiredminlength="2" maxLength="200" />
              <span id="activity-error" className="form__input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;