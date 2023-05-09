<script >

import FormView from "../components/Form.vue"
export default {
    components: {
        FormView,
    }, data() {
        return {
            inputText: "123",
        }
    }, methods: {
        getpush(sourceData) {
            this.inputText = sourceData;
        }
    }
}
</script>
<template>
    <div class="emit">
        <h2>Emit</h2>
        <p>{{ inputText }}</p>
        <form>


            <FormView :inputText="inputText" v-on:emitPush="getpush" />
            <!-- v-on:觸發  <v-bind> 綁定-->

            <!-- <input type="text" v-model="inputText"> -->

        </form>
    </div>
</template>

<style scoped>
.emit {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>