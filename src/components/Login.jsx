import React from "react";
import PageWithForm from "./PageWithForm";
import Header from "./Header";

function Login({ onLogin }) {
    const [data, setData] = React.useState({
        email: '',
        password: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = data;
        onLogin({ email, password });
    }

    return(
        <>
            <Header link = "/signup" linkText = "Регистрация" />
            <PageWithForm
                title = "Вход"
                buttonText = "Войти"
                onSubmit = {handleSubmit}
            >
                <input name="email" value={data.email || ''} onChange={handleChange} className="form__text form__text_page" type="email" placeholder="Email" requiredminlength="2" maxLength="40" />
                {/* <span id="user_name-error" className="form__input-error"></span> */}
                <input name="password" value={data.password || ''} onChange={handleChange} className="form__text form__text_page" type="password" placeholder="Пароль" requiredminlength="2" maxLength="200" />
                {/* <span id="activity-error" className="form__input-error"></span> */}
            </PageWithForm>
        </>
    );
}

export default Login;