import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        articleList:[
            {
                id:'',
                title:'',
                tags:'',
                text:''
            }
        ],
        tag:''
    },
    getters: {

    },
    mutations: {
        addArticle(state, data){
            state.articleList = data
        }
    },
    actions:{

    }
})

export default store;