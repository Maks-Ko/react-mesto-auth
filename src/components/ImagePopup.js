function ImagePopup(props) {
    return(
        <div className={`popup popup_type_image ${props.isOpen}`}>
            <div className="images-content">
            <button type="button" className="images-content__button popup__button-close" onClick={props.onClose}></button>
            <img className="images-content__foto" src={props.link} alt={props.name} />
            <h2 className="images-content__title">{props.name}</h2>
            </div>
        </div>
    )
}

export default ImagePopup;