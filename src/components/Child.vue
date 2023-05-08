<script >

export default ({

    components: {

    }, props: ["childTitle"],
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
        <h2>{{ childTitle }}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
</template>

<style scoped>
.card {
    width: 120px;
    height: 100px;
    padding: 2rem;
    margin: 1rem;
    border: 5px solid #a73737;
    ;
}
</style>

