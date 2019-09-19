const state = {
    shopcar1: []
};
const getters = {
    shopcar1: state => state.shopcar1
};
const mutations = {
    setShopcar1: (state, shopcar1) => state.shopcar1 = shopcar1
};
const actions = {
    setShopcar1Async: ({
        commit
    }, shopcar1) => commit("setShopcar1", shopcar1)
};

export default {
    state,
    getters,
    mutations,
    actions
}