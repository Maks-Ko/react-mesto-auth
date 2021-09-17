class Api {
    constructor() {
        this._baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-26';
        this._headers = {
            authorization: 'd3e97d43-b7f6-462d-a435-bd7e94d9d5b6',
            'Content-Type': 'application/json'
          };
    }

    // получаем данные пользователя
    getItemsUser() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    // получаем данные карточек
    getItemsCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    getAllNeededData() {
        return Promise.all([this.getItemsUser(), this.getItemsCards()])
    }

    // редактирование профиля
    editProfile(dataUser) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: dataUser.name,
                about: dataUser.about
            })
        })
        .then(this._checkResponse)
    }

    // добавление карточки
    addCardForm(dataCard) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: dataCard.name,
                link: dataCard.link
            })
        })
        .then(this._checkResponse)
    }

    // удаление карточки
    deleteCardUser(idCard) {
        return fetch(`${this._baseUrl}/cards/${idCard}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._checkResponse)
    }

    // добавление - удаление лайка карточки    
    toggleLikeCard(idCard, isLike) {
        return fetch(`${this._baseUrl}/cards/likes/${idCard}`, {
            method: isLike ? 'DELETE' : 'PUT',
            headers: this._headers,
        })
        .then(this._checkResponse)
    }

    // редактирование аватар
    editAvatar(dataAvatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: dataAvatar.avatar
              })
        })
        .then(this._checkResponse)
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const api = new Api();

export default api;