export default {
    namespaced: true,
    state: {
        articleList:[]
    },
    getters: {
    },
    mutations: {
        ADD_ARTICLEList(state, data){
            state.articleList.unshift(data)
        },
        SET_ARTICLEList(state, list){
            state.articleList = list
        }
    },
    actions:{
        addArticleList({commit}, data){
            setTimeout(()=>{
                commit('ADD_ARTICLEList', data)
            }, 1000)
        },
        deleteArticleList({commit, rootState}, id){
            const newList = rootState.articleList.filter(o => o.id !== id)
            commit('SET_ARTICLEList', newList)
        },
    }     
}