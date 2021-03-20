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
        const API_KEY = process.env.VUE_APP_FIREBASE_KEY;

        const mode = payload.mode;
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

        if (mode === 'signup') {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
        }

        console.log("in auth")
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        console.log("Am primit response in auth");
        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(
                responseData.message + " in auth" || 'Failed to authenticate. Check your login data.'
            );
        }

        const expiresIn = +responseData.expiresIn * 1000;
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
            appliedTo: {},
            noOfApps: 0
        }

        console.log(userData);

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
            throw new Error('Failed to authenticate.');
        }
    },

    async sendContactForm(context, payload) {
        const date = new Date();
        const currentDate = String(date.getDate()) + String(date.getMonth()) + String(date.getHours()) + String(date.getMinutes()) + String(date.getSeconds());

        const contactData = {
            name: payload.name,
            email: payload.email,
            message: payload.message
        };

        console.log(contactData);

        const response = await fetch(
            `https://aeroconsult2021-default-rtdb.europe-west1.firebasedatabase.app/contact/${currentDate}.json`,
            {
                method: 'PUT',
                body: JSON.stringify(contactData)
            }
        );

        if (!response.ok) {
            throw new Error('Failed to send contact form.');
        }
    },

    async sendApplication(context) {
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.token;

        const appliedTo = context.rootGetters.appliedTo;

        console.log(appliedTo);

        const response = await fetch(
            `https://aeroconsult2021-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/appliedTo.json?auth=` + token,
            {
                method: 'PUT',
                body: JSON.stringify(appliedTo)
            }
        );

        if (!response.ok) {
            throw new Error('Failed to send application.');
        }

        // await this.updateNoOfApps(context);
        await context.dispatch('updateNoOfApps');
    },

    async updateNoOfApps(context){
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.token;

        context.commit('incrementNoOfApps');

        console.log(context.state.noOfApps);

        const response = await fetch(
            `https://aeroconsult2021-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/noOfApps.json?auth=` + token,
            {
                method: 'PUT',
                body: JSON.stringify(context.state.noOfApps)
            }
        );

        if (!response.ok) {
            throw new Error('Failed to do something.');
        }
    },

    async loadApplications(context) {
        const userId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        console.log(" in load applications")
        const response = await fetch(`https://aeroconsult2021-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json?auth=` + token)

        const responseData = response.json();
        console.log("avem response data");

        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to fetch!');
        }

        const apps = [];

        const noOfApps = responseData.noOfApps;
        for (let i = 0; i < noOfApps; i++) {
            apps.push(responseData.appliedTo[i]);
        }

        console.log("In loadApplication: " + noOfApps + " apps " + apps);

        context.commit('setNoOfApps', noOfApps);
        context.commit('setApplications', apps);
    },

    async uploadCV(context, payload) {
        const userId = context.rootGetters.userId;

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