import React from "react";

function Login() {
    return(
        <div className="page-login">
            <div className="page-login__content">            
            <h2 className="page-login__title">Вход</h2>
            <form name="login" className="form form_login" id="form_login">
                <fieldset className="form__container">
                <input name="email" id="email" className="" type="email" placeholder="Email" requiredminlength="2" maxLength="40" />
                {/* <span id="user_name-error" className="form__input-error"></span> */}
                <input name="password" id="password" className="" type="password" placeholder="Пароль" requiredminlength="2" maxLength="200" />
                {/* <span id="activity-error" className="form__input-error"></span> */}
                <button type="submit" className="form__button">Войти</button>
                </fieldset>
            </form>
            </div>
        </div>
    );
}

export default Login;