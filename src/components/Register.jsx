import React from "react";
import PageWithForm from "./PageWithForm";
import Header from "./Header";

function Register() {
    return(
        <>
            <Header link = "/sign-in" linkText = "Войти" />
            <PageWithForm
                title = "Регистрация"
                buttonText = "Зарегистрироваться"
                text = "Уже зарегистрированы?"
                link = "/sign-in"
                linkText = "Войти"
            >
                <input name="email" className="form__text form__text_page" type="email" placeholder="Email" requiredminlength="2" maxLength="40" />
                {/* <span id="user_name-error" className="form__input-error"></span> */}
                <input name="password" className="form__text form__text_page" type="password" placeholder="Пароль" requiredminlength="2" maxLength="200" />
                {/* <span id="activity-error" className="form__input-error"></span> */}
            </PageWithForm>
        </>
    );
}

export default Register;