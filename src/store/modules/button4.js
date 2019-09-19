const state = {
    button4: Object
};
const getters = {
    button4: state => state.button4
};
const mutations = {
    setButton4: (state, button4) => state.button4 = button4
};
const actions = {
    setButton4Async: ({
        commit
    }, button4) => commit("setButton4", button4)
};

export default {
    state,
    getters,
    mutations,
    actions
}