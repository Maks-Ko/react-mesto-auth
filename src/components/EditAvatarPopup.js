import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAatarPopup(props) {    
    const urlAvatar = React.useRef();
    
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: urlAvatar.current.value,
        });
    }

    return(
        <PopupWithForm
            isOpen = {props.isOpen ? "popup_is-opened" : ""}
            onClose = {props.onClose}
            name="edit-avatar"
            id="edit-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            onSubmit={handleSubmit}
            >
              <input name="url_avatar" ref={urlAvatar} id="url_avatar" className="form__text form__text_edit_about-me" type="url" placeholder="Ссылка на аватарку" required />
              <span id="url_avatar-error" className="form__input-error"></span>
        </PopupWithForm>
    )
}

export default EditAatarPopup;