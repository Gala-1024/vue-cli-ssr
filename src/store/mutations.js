import Vue from 'vue'

export default {
    SET_LIST: (state, { items }) => {
        // console.log(type);
        // console.log(ids);
        console.log('SET_LIST...');
        console.log(items)
        state.test_list = items;
        // state.lists[type] = ids;
        // state.lists[type] = ids
    }
}