class ApiUser {
    constructor() {
        this._baseUrl = 'https://auth.nomoreparties.co';
        this._headers = {
            'Content-Type': 'application/json'
        }
    }

    // регистрация на сервисе
    addUser (dataUser) {
        return fetch (`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                password: dataUser.password,
                email: dataUser.email 
            })
        })
        .then (this._checkResponse)
    }

    // авторизация на сервисе
    enterUser (dataUser) {
        return fetch (`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                password: dataUser.password,
                email: dataUser.email 
            })
        })
        .then (this._checkResponse)
    }

    // проверка валидности токена и получения email
    getToken (token) {
        return fetch (`${this._baseUrl}/user/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${token}`
            }
        })
    }

    _checkResponse (response) {
        return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
    }
}

const apiUser = new ApiUser();

export default apiUser;