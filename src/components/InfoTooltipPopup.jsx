import successfully from './../images/successfully.png';
import unsuccessful from './../images/unsuccessful.png'

function InfoTooltipPopup(props) {
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
            <div className="tooltip">
            <button type="button" className="tooltip__button popup__button-close" onClick={props.onClose}></button>
            <img className="tooltip__image" src={props.isLuck ? successfully : unsuccessful} alt="галочка" />
            <p className="tooltip__title">{props.isLuck ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</p>            
            </div>
        </div>
    )
}

export default InfoTooltipPopup;