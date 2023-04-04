export default {
    namespaced: true,
    state: {
        articleSort:[]
    },
    getters: {
        tableData(state){
            return state.articleSort.map(o => ({
                ...o,
                count: `${o.count} 篇`
            }))
        }
    },
    mutations: {
        ADD_ARTICLESORT(state, data){
            state.articleSort.unshift(data)
        },
        SET_ARTICLESORT(state, list){
            state.articleSort = list
        }
    },
    actions:{
        // async getList(parmas) {
        //     const { commit, rootGetters, rootState } = parmas;

        //     // const response = (await fetch('https://wyy-music-plum.vercel.app/top/artists')).json();
            
        //     const result = await [{
        //         sort:"前端",
        //         count:"0",
        //         dateP:"2023-2-2",
        //         dateC:"2023-2-2",
        //       }];
              
        //     setTimeout(() => {
        //         commit('SET_ARTICLESORT', result, 'aaa')
        //     }, 1000)
        // },
        addArticleSort({commit}, data){
            setTimeout(()=>{
                commit('ADD_ARTICLESORT', data)
            }, 1000)
        },
        deleteArticleSort({commit, rootState}, id){
            const newList = rootState.sort.articleSort.filter(o => o.id !== id)
            commit('SET_ARTICLESORT', newList)
        },
        editArticleSort({commit, rootState}, { id, newSort }){
            console.log(rootState, 'rootState')
            const newList = rootState.sort.articleSort.map(o => {
                if (id === o.id) {
                    return {
                        ...o,
                        sort: newSort
                    }
                }
                return o
            })
            commit('SET_ARTICLESORT', newList)
        },
    }     
}