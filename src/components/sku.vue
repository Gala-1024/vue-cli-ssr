<template>
    <div>
        <p>
            <router-link to="/">home</router-link>
        </p>
        <p>
            sku {{id}}
        </p>
    </div>
</template>
<script>
    export default {
        data: function () {
            return{
                id:''
            }
        },
        title () {
            return 'sku'
        },
        mounted: function () {
            console.log('sku mouted')
        },
        beforeRouteEnter: function (to, from ,next){
            next(vm => {
                vm.id = vm.$route.params.id;
                // 通过 `vm` 访问组件实例
            })
        }
    }
</script>