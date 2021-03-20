export default {
    userId(state) {
        return state.userId;
    },
    token(state) {
        return state.token;
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
    checkIfApplied(state, payload) {
        console.log(payload);
        console.log(state.appliedTo.includes(payload));
        console.log("Applied to: " + state.appliedTo);
        return state.appliedTo.includes(payload) === true;
    }
};