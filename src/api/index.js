import axios from 'axios'
// import qs from 'qs'
// instance .post(`url`, qs.stringify(params)).then(res => res.data);

// axios.interceptors.request.use(function(config){
//     console.log('===========axios start============');
//     return config;
// },function(error){
//     //当出现请求错误是做一些事
//     return Promise.reject(error);
// });
const instance = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});

function fetch () {

    var data = [
        {id: 1, name: 'test_a'},
        {id: 2, name: 'test_b'}
    ];
    // return Promise.all(data);
    // return new Promise((resolve, reject) => {
    //     setTimeout(function () {
    //         resolve(data);
    //         console.log('resolve....')
    //     }, 1000)
    // });

    // return new Promise((resolve, reject) => {
    //     resolve(data);
    // })
    return new Promise((resolve, reject) => {
        instance.get('http://52.77.219.201/m/p/categories', {})
            .then(function (response) {
                console.log('response');
                resolve(response.data.data)
            })
            .catch(function (error) {
                console.log('==========axios error==========');
                console.log(error);
                reject(error);
            });
    });
}

// export function get_fetchItem() {
//     return fetch();
// }

export function fetchItems(ids) {
    console.log('fetchItems...');
    console.log(ids);
    return fetch();
    // return Promise.all(get_fetchItem());
}