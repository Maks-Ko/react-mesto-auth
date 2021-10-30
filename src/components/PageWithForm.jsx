import { Link } from 'react-router-dom';

function PageWithForm(props) {
    return (
        <div className="page-form">
            <h2 className="page-form__title">{`${props.title}`}</h2>
            <form name={`${props.name}`} className="form" onSubmit={props.onSubmit}>
                <fieldset className="form__container">
                {props.children}
                <button type="submit" className="form__button form__button_page">{props.buttonText}</button>
                </fieldset>
            </form>
            <p className="page-form__text">{props.text} <Link to={`${props.link}`} className="page-form__text">{props.linkText}</Link></p>
        </div>
    )
}

export default PageWithForm;