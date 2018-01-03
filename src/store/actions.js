import {
    fetchItems
} from '../api'

export default {
    FETCH_LIST_DATA: ({ commit, state }, { ids }) => {
        console.log('FETCH_LIST_DATA.....');
        // setTimeout(function(){
        //     var data = [
        //         {id:1, name:'test_a'},
        //         {id:2, name:'test_b'}
        //     ];
        //     commit('SET_LIST',{type:111, ids: 2222, data: data})
        // }, 1000)
        return fetchItems(ids).then(items => commit('SET_LIST', { items }))
        // return Promise.resolve()
    },
}