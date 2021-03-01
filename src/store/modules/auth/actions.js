import firebase from "firebase";

let timer;

export default {
    async login(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        });
    },

    async signup(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        });
    },

    async auth(context, payload) {
        // const API_KEY = process.env["FIREBASE_KEY"];
        const API_KEY = "AIzaSyAhVIGb0XSgHuEAEMJnINnDjUIBsxVe5_E";
        console.log(API_KEY);
        const mode = payload.mode;
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

        if (mode === 'signup') {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
        }
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(
                responseData.message || 'Failed to authenticate. Check your login data.'
            );
        }

        const expiresIn = +responseData.expiresIn * 1000;
        // const expiresIn = 5000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        timer = setTimeout(function () {
            context.dispatch('autoLogout');
        }, expiresIn);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId
        });
    },

    async registerUserData(context, payload) {
        const userId = context.rootGetters.userId;
        const userData = {
            firstName: payload.firstName,
            lastName: payload.lastName,
            faculty: payload.faculty,
            studyYear: payload.studyYear,
        }

        const token = context.rootGetters.token;

        const response = await fetch(
            `https://aeroconsult2021-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json?auth=` +
            token,
            {
                method: 'PUT',
                body: JSON.stringify(userData)
            }
        );

        if (!response.ok) {
            throw new Error('Failed to authenticate. Check your login data.');
        }
    },

    async uploadCV(context, payload) {
/*        // Create a root reference
        const storageRef = firebase.storage().ref();

        // Create a reference to 'CV/{userId}.pdf'
        const CVFolderRef = storageRef.child(`CV/${payload.file}`);

        // 'file' comes from the Blob or File API
        CVFolderRefref.put(file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });*/

        const userId = context.rootGetters.userId;

        //const filename = payload.file.name;
        //const ext = filename.slice(filename.lastIndexOf('.'))
        firebase.storage().ref('CV/' + userId + '.pdf').put(payload.file)
    },


    tryLogin(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expiresIn = +tokenExpiration - new Date().getTime();

        if (expiresIn < 0) {
            return;
        }

        timer = setTimeout(function () {
            context.dispatch('autoLogout');
        }, expiresIn);

        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId
            });
        }
    },
    logout(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer);

        context.commit('setUser', {
            token: null,
            userId: null
        });
    },
    autoLogout(context) {
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
};