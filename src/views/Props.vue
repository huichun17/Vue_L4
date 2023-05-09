<script >
import Child from "../components/Child.vue"
export default ({//匯出
    components: {
        Child,
    }
    , data() {
        return {
            title: "Props標題",

            cardData: [{
                img: "../../public/img/1.jpg",
                title: "貓1"
            }, {
                img: "../../public/img/2.jpg",
                title: "貓2"
            }, {
                img: "../../public/img/3.jpg",
                title: "貓3"
            },
                // {img: "",
                // title: ""}, 是一個item

            ],


        }
    }
})
</script>

<template>
    <h1>this is Props page</h1>
    <div class="cardArea">
        <Child v-for="card in cardData" v-bind:image="card.img" v-bind:title="card.title" />
        <!-- 上面的card是for迴圈cardData的變數 -->
        <!-- <Child :title="cardData[0].title" :imgData="cardData[0].img" /> -->
    </div>
    <Child v-bind:childTitle="title" />
    <Child v-for="card in cardData" :title="card.title" :image="card.img" />
    <!-- <div v-for="item in cardData">
        <img :src="item.img" alt="">
        <h2>{{ item.title }}</h2>
        <p></p> -->

    <!-- </div> -->
</template>

<style scoped>
.cardArea {
    display: flex;
    /* justify-content:center; */
    justify-content: space-around;
    /* justify-content: space-between; */
}
</style>