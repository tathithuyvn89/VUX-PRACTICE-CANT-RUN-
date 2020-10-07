import config from 'config'
import {authHeader} from '../_helpers'

export const userService = {
    login,
    logout,
    getAll
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Conten-Type': 'appication/json'},
        body: JSON.stringify({username, password})
    }

    return fetch (`${config.apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
        //Login thanh cong neu co 1 jwt duoc tra ve
        if (user.token) {
           localStorage.setItem('user', JSON.stringify(user))
        }

      return user;
    });
}

function logout() {
    //remove user khoi localstore if nguoi dung dang xuat
    localStorage.removeItem('user')
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch (`${config.apiUrl}/users/authenticate`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                //Se tu dong load ve trang logout
                logout();
                location.reload(true)
            }
            const  error = (data && data.message) || response.statusText;
           return Promise.reject(error);
        
        }
    })
}

