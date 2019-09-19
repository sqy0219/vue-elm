const state = {
    answer: Number
};
const getters = {
    answer: state => state.answer
};
const mutations = {
    setAnswer: (state, answer) => state.answer = answer
};
const actions = {
    setAnswerAsync: ({ commit }, answer) => commit("setAnswer", answer)
};

export default {
    state, getters, mutations, actions
}
