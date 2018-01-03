<template>
    <div>
        <p>
            <router-link to="/">home</router-link>
        </p>
        <p>
            {{msg}}
        </p>
    </div>
</template>
<script>
    export default {
        data: function () {
            return{
                msg:'aaaaa msg'
            }
        },
        title () {
            return 'aaa'
        },
        mounted: function () {
            console.log('aaaaa mouted')
        }
    }
</script>