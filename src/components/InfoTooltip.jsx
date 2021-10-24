import luck from './../images/successfully.png';
import fail from './../images/unsuccessful.png'

function InfoTooltip(props) {
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
            <div className="tooltip">
            <button type="button" className="tooltip__button popup__button-close" onClick={props.onClose}></button>
            <img className="tooltip__image" src={luck} alt="галочка" />
            <p className="tooltip__title">{props.isLuck}</p>            
            </div>
        </div>
    )
}

export default InfoTooltip;