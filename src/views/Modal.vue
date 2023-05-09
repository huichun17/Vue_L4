<script >

import Popup from '../components/Popup.vue'
export default {
    components: {
        Popup
    },
    data() {
        return {
            isShow: false,
            modalInfo: {
                title: "大切なお知らせ",
                content: "新商品・人気アイテムも入荷中"
            }
        }
    }, methods: {
        changeShow() {
            this.isShow = !this.isShow;
        }
    }
}
</script>

<template>
    <!-- 彈跳視窗演示 -->
    <div class="modal-ex">
        <h2>Modal</h2>
        <button type="button" @click="changeShow">Open</button>
    </div>
    
    <Popup v-if="isShow" @switch="changeShow" :title="modalInfo.title" :content="modalInfo.content" />
</template>

<style lang="scss" scoped>
.modal-ex {
    height: 100%; //routerView有設高度
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
</style>