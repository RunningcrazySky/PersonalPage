import Vue from 'vue'
import Vuex from 'vuex'
import sort from './modules/sort';
import article from './modules/article';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        sort,
        article,
    }  
})

export default store;