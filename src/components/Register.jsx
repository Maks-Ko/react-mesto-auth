import React from "react";
import PageWithForm from "./PageWithForm";

function Register() {
    return(
        <PageWithForm
            title = "Регистрация"
            buttonText = "Зарегистрироваться"
            text = "Уже зарегистрированы? Войти"
        >
            <input name="email" className="form__text form__text_page" type="email" placeholder="Email" requiredminlength="2" maxLength="40" />
            {/* <span id="user_name-error" className="form__input-error"></span> */}
            <input name="password" className="form__text form__text_page" type="password" placeholder="Пароль" requiredminlength="2" maxLength="200" />
            {/* <span id="activity-error" className="form__input-error"></span> */}
        </PageWithForm>
    );
}

export default Register;