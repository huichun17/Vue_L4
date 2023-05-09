<script >
export default {
    props: [
        "title",
        "content",
         
    ],
    methods: {
        changeShowOutside() {
            this.$emit("switch")
        }
    }
    
}
</script>

<template>
    {{ isShow }}
    <div class="modal">

        <!-- modal Card -->

        <div class="card">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
            <button type="button" @click="changeShowOutside">Close</button>
        </div>
        <!-- background -->
        <div class="bg"></div>

    </div>
</template>

<style lang="scss"  scoped>
.modal {
    width: 100vw; //滿版
    height: 100vh; //滿版
    position: fixed; //無滾動軸
    top: 0; //滿版
    left: 0; //滿版
    display: flex; //水平 【置中三兄弟】
    justify-content: center; //水平置中
    align-items: center; //垂直置中
    transition: 2s; // v-if無法套用，因元件消失 
    


    .card {
        background-color: white;
        width: 30vw;
        // 長度用推的
        border-radius: 2rem; //圓滑效果
        padding: 2rem;
        text-align: center; //文字置中

        h2 {
            margin: 0;
        }

    }

    .bg {
        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.65; //透明度 ；1是全黑
        z-index: -1;
    }


}

// .show {
//     opacity: 1;
// }
</style>