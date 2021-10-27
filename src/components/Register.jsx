import React from "react";
import PageWithForm from "./PageWithForm";
import Header from "./Header";

function Register({ onRegister }) {
    const [data, setData] = React.useState({
        email: '',
        password: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = data;
        onRegister({ email, password });
    }

    return(
        <>
            <Header link = "/signin" linkText = "Войти" />
            <PageWithForm
                title = "Регистрация"
                buttonText = "Зарегистрироваться"
                text = "Уже зарегистрированы?"
                link = "/signin"
                linkText = "Войти"
                name = "register"
                onSubmit={handleSubmit}
            >
                <input id="email" name="email" value={data.email || ''} onChange={handleChange} className="form__text form__text_page" type="email" placeholder="Email" requiredminlength="2" maxLength="40" />
                {/* <span id="email-error" className="form__input-error"></span> */}
                <input id="password" name="password" value={data.password || ''} onChange={handleChange} className="form__text form__text_page" type="password" placeholder="Пароль" requiredminlength="3" maxLength="20" />
                {/* <span id="password-error" className="form__input-error"></span> */}
            </PageWithForm>
        </>
    );
}

export default Register;