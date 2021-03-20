export default {
    userId(state) {
        return state.userId;
    },
    token(state) {
        return state.token;
    },
    noOfApps(state) {
        return state.noOfApps;
    },
    appliedTo(state) {
      return state.appliedTo;
    },
    isAuthenticated(state) {
        return !!state.token;
    },
    didAutoLogout(state) {
        return state.didAutoLogout;
    },

};