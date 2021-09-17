function PopupWithForm(props) {
    return(
       
        <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
            <div className="popup__content">
            <button type="button" className="popup__button popup__button_profile popup__button-close" onClick={props.onClose}></button>
            <h2 className="popup__title">{`${props.title}`}</h2>
            <form name={`${props.name}`} className="form form_profile" id={`${props.id}`} onSubmit={props.onSubmit}>
                <fieldset className="form__container">
                {props.children}
                <button type="submit" className="form__button">{props.buttonText}</button>
                </fieldset>
            </form>
            </div>
        </div>
        
    )
}

export default PopupWithForm;