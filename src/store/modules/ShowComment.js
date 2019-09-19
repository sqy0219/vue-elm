import axios from 'axios'

const state = {
    comment: []
};
const getters = {
    getComment: state => state.comment
};
const mutations = {
    setComment: (state, comment) => state.comment = comment
};
const actions = {
    async allComment({ commit }) {
        const response = await axios.get("https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10");
        commit("setComment", response.data);
    }
};
export default {
    state, getters, mutations, actions
}
