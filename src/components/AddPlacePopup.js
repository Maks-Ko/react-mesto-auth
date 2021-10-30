import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [nameImage, setNameImage] = React.useState('');
    const [urlImage, setUrlImage] = React.useState('');

    function handleChangeNameImage(e) {
        setNameImage(e.target.value);
    }
    function handleChangeUrlImage(e) {
        setUrlImage(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: nameImage,
            link: urlImage
        });
        setNameImage('');
        setUrlImage('');
    }

    return(
        <PopupWithForm
            isOpen = {props.isOpen ? "popup_is-opened" : ""}
            onClose = {props.onClose}
            name = "add-card"
            title = "Новое место"
            id = "cardFormValidator"
            buttonText = "Сохранить"
            onSubmit = {handleSubmit}
            >
              <input name="image_name" value={nameImage} onChange={handleChangeNameImage} id="image_name" className="form__text form__text_edit_name" type="text" placeholder="Название" requiredminlength="2" maxLength="30" />
              <span id="image_name-error" className="form__input-error"></span>
              <input name="url_image" value={urlImage} onChange={handleChangeUrlImage} id="url_image" className="form__text form__text_edit_about-me" type="url" placeholder="Ссылка на картинку" required />
              <span id="url_image-error" className="form__input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;