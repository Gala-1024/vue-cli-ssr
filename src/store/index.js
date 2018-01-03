import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex);

console.log('引入了vuex................');

export function createStore () {
    return new Vuex.Store({
        state: {
            activeType: null,
            itemsPerPage: 20,
            items: {/* [id: number]: Item */},
            users: {/* [id: string]: User */},
            lists: {
                top: [/* number */],
                new: [],
                show: [],
                ask: [],
                job: []
            },
            test_list: []
        },
        actions,
        mutations,
        getters
    })
}

// todo vuex 接入ssr，未完成