// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const index = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        countIncrement: (state) => {
            state.count += 1;
        },
        countDecrement: (state) => {
            state.count -= 1;
        },
    },
});

export default index;