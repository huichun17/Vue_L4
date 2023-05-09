<script >
import { RouterLink } from 'vue-router'
import Popup from '../components/Popup.vue'
export default {
  components: {
    Popup
  },
  data() {
    return {
      isShow: false,
      homeInfo: {
        title: "ご予約について",
        content: "semのご予約URLにつきましては、ネット予約開始致しましたら、改めてご報告させて頂きます。"
      }, account: null,
      password: null
    }
  }, methods: {

    changeShow() {
      this.isShow = !this.isShow;
    },
    setAccount(){
      sessionStorage.setItem("account","wsx123")
      sessionStorage.setItem("password","sdf321")
    }
  },
  mounted() {
    this.account = localStorage.getItem("account")
    this.password = localStorage.getItem("password")
  }
}
</script>

<template>
  <div>
    <h1>this is Home page</h1>
    <RouterLink to="/router-view" class="routerLink">Router-View</RouterLink>
    <RouterLink to="/router-view" class="routerLink">Router-View</RouterLink>
    <button type="button" @click="changeShow">お知らせ</button>
  </div>
  <button type="button" @click="setAccount">Set</button>
  {{ account }}
  {{ password }}
  <Popup v-if="isShow" @switch="changeShow" :title="homeInfo.title" :content="homeInfo.content" />
</template>

<style scoped>
a {
  font-family: fantasy;
  text-decoration: none;
  color: pink;
  font-size: 50px;
  margin: 2rem;
}
</style>