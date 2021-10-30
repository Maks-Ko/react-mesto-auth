class ApiUser {
    constructor() {
        this._baseUrl = 'https://auth.nomoreparties.co';
        this._headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    // регистрация на сервисе
    addUser (dataUser) {
        return fetch (`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email: dataUser.email,
                password: dataUser.password                
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
                email: dataUser.email,
                password: dataUser.password
                
            })
        })
        .then (this._checkResponse)
    }

    // проверка валидности токена и получения email
    getToken ({ jwt }) {
        return fetch (`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${jwt}`
            }
        })        
        .then (this._checkResponse)
    }

    _checkResponse (response) {
        return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
    }
}

const apiUser = new ApiUser();

export default apiUser;