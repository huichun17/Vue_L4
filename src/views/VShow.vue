<script >
export default {
    data() {
        return {
            isShow: true
        }
    },
    methods: {
        change() {
            this.isShow = !this.isShow; //F/T相反
        }
    }
}
</script>

<template>
    <div>
        <h2>this is VShow page</h2>
        <div class="boxes">
            <!-- <div v-if="isShow" class="box box1"></div> -->
            <!-- v-show=可以隱藏物件 -->
            <div v-show="isShow" class="box box1"></div> 
            <div v-if="isShow" class="box box2"></div>
        </div>
        
        <button type="button" @click="change">change here</button>
        <!-- @click="" === v-on -->
        {{ isShow }}
    </div>
</template>

<style scoped>
.boxes {
    position: relative;
    display: flex;
}

.box {
    width: 3rem;
    height: 3rem;
    top:60px;
    /* position: absolute; */

}

.box1 {
    background-color: purple;

    top: 0;
    left: 0;
}

.box2 {
    background-color: pink;

    top: 0;
    left: 100;
}
</style>