<script >
export default {
    components: {
        props: ["inputText"],
    }, data() {
        return {
            sourceData: "",
        }
    },
    methods: {
        push() {
            // console.log("push")//測試運作
            this.$emit("emitPush",this.sourceData)
            // this.$emit("自定義方法",帶出去的值)
        }
    }
}
</script>


<template>
    <div class="from">
        <p> {{ sourceData }}</p>
        <form>

            <input type="text" v-model="sourceData">
            <button type="button" @click="push">Click</button>
        </form>

    </div>
</template>

<style scoped>
.from {
    border: 2px solid black;
    padding: 4rem;
}
</style>