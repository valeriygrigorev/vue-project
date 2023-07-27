import { http } from '@/utils/httpModule';
import { successMessage, errorMessage } from '@/utils/messageService';
import { translate as tl } from '@/utils/locales/locale';
import { axiosErrorHandle } from '@/utils/common';

export default {
    state: {
        id: null,
        username: null,
        avatar: null,
        about: null,
    },
    getters: {
        userName: state => state.username,
        about: state => state.about ?? tl("Information about yourself is not specified"),
        id: state => state.id,
        avatar: state => state.avatar,
    },
    mutations: {
        aboutInfo: (state, payload) => {
            const payloadKeys = Object.keys(payload),
                  stateKeys = Object.keys(state)

            payloadKeys.forEach((key) => {
                if (stateKeys.includes(key)) {
                    state[key] = payload[key]
                }
            })
        },
        setDefaultAvatar: state => state.avatar = "defaultAvatar.png",
    },
    actions: {
        register: (context, payload) => {
            const resolve = (response) => {
                if (response.status === 200) {
                    successMessage(tl('The user has been successfully registered'));
                    context.commit('setRedirect', 'login');
                }
            }
            const error = (error) => {
                if (error.response) {
                    error.response.status === 400
                        ? errorMessage(tl('A user with this name is already registered'))
                        : errorMessage(tl('Unknown error'));
                } else axiosErrorHandle()
            }
            const requestParams = {
                url: '/register',
                method: 'POST',
                data: payload,
            };

            http({requestParams, resolve, error});
        },
        login: (context, payload) => {
            const resolve = response => {
                if (response.data.token) {
                    sessionStorage.setItem('authToken', response.data.token);
                }
                context.commit('setRedirect', 'about');
            }

            const error = error =>
                error.response
                    ? errorMessage(tl('Enter the correct username/password'))
                    : axiosErrorHandle();

            const requestParams = {
                url: '/login',
                method: 'POST',
                data: payload,
            };

            http({requestParams, resolve, error});
        },
        aboutInfo: (context) => {
            const resolve = response => context.commit('aboutInfo', response.data.data);

            const error = (error) => {
                if (error.response.status === 400) {
                    errorMessage(tl('Failed to get user information'));
                } else if (error.response.status === 401) {
                    //errorMessage(tl('Access to the main page is not possible. The user is not logged in'));
                } else {
                    errorMessage(tl('Unknown error'))
                }
            }

            const requestParams = {
                url: '/about',
                method: 'GET',
                headers: `Authorization: Bearer ${sessionStorage.getItem('authToken')}`
            };

            http({ requestParams, resolve, error });
        },
        setDefaultAvatar: (context) => context.commit('setDefaultAvatar'),
    },
    modules: {},
}