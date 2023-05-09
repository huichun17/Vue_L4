<script >

export default ({

    components: {

    }, props: [
        // "childTitle",
        "title",
        "image",
        
    ],
    data() {
        return {

        }
    },
    methods: {

    }
})
</script>

<template>
    <div class="card">
        <!-- src要對應props內的""" -->
        <!-- <img class="img" v-bind:src="imgData" v-bind:alt="title"> -->
        <img class="img" v-bind:src="image" v-bind:alt="title">
        <h2>{{ title }}</h2>
        <!-- <h2>{{ childTitle }}</h2> -->
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
</template>

<style scoped>
.card {
    width: 200px;
    height: 300px;
    padding: 2rem;
    margin: 1rem;
    border: 5px solid #a73737;
    ;
}

img {
    width: 100%;
}
</style>

