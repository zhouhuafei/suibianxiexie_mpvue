<template>
    <div class="counter-warp">
        <p>Vuex counter：{{ count }}</p>
        <p>
            <button @click="countIncrement">+</button>
            <button @click="countDecrement">-</button>
        </p>

        <a href="/pages/index/main" class="home">去往首页</a>
    </div>
</template>

<script>
    // Use Vuex
    import store from '../../store/index.js';

    export default {
        computed: {
            count() {
                return store.state.count;
            },
        },
        methods: {
            countIncrement() {
                store.commit('countIncrement');
            },
            countDecrement() {
                store.commit('countDecrement');
            },
        },
    };
</script>

<style lang="scss">
    .counter-warp {
        text-align: center;
        margin-top: 100px;
    }

    .home {
        display: inline-block;
        margin: 100px auto;
        padding: 5px 10px;
        color: blue;
        border: 1px solid blue;
    }
</style>
