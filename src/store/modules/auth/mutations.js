export default {
    setUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        state.didAutoLogout = false;
    },
    setApplications(state, payload) {
        state.appliedTo = [...state.appliedTo, payload]
    },
    setNoOfApps(state, payload) {
        state.noOfApps = payload;
    },
    incrementNoOfApps(state) {
        state.noOfApps++;
    },
    setAutoLogout(state) {
        state.didAutoLogout = true;
    }
};