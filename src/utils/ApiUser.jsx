class ApiUser {
    constructor() {
        this._baseUrl = 'https://auth.nomoreparties.co/';
        this._headers = {
            'Content-Type': 'application/json'
        }
    }

    // регистрация на сервисе
    addUser (dataUser) {
        return fetch (this._baseUrl, {
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
        return fetch (this._baseUrl, {
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
    getToken (jwt) {
        return fetch (this._baseUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${jwt}`
            }
        })
    }
    
    _checkResponse (res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const apiUser = new ApiUser();

export default apiUser;