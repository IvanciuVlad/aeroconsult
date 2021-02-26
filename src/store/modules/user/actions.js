export default {
    /*async registerUserData(context, payload) {
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
    },*/
}