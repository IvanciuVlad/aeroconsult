import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    state() {
        return {
            userId: null,
            token: null,
            didAutoLogout: false,
            firstName: null,
            lastName: null,
            faculty: null,
            studyYear: null,
            appliedTo: [],
            noOfApps: null
        };
    },
    mutations,
    actions,
    getters
};