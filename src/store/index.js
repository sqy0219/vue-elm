import Vue from 'vue'
import Vuex from 'vuex'
import button4 from './modules/button4'
import answer from './modules/answer'
import address from './modules/address'
import ShowComment from './modules/ShowComment'
import shopcar1 from './modules/shopcar'
import loading from './modules/loading'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        button4,
        answer,
        address,
        ShowComment,
        shopcar1,
        loading
    }
})