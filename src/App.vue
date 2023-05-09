<script >
import { RouterLink, RouterView } from 'vue-router'
export default {

mounted(){
  console.log(123)
  localStorage.setItem("account","xx183647")//key,value
  localStorage.setItem("password","E2245737")
  // localStorage.setItem("account","qwe2245")
  // localStorage.setItem("password","qaz5422")
}
}
</script>

<template>
  <header>
    <img
      src="https://4.bp.blogspot.com/-83kKTeYr1_4/V1D-Rpv2Y-I/AAAAAAAA7Fk/wYJ0S5oZz7k5ZP2iWM76gVEl3GFv-bHzACLcB/s400/syougatsu_komainu.png"
      alt="">
    <RouterLink to="/v-bind" class="routerLink">VBind</RouterLink>
    <RouterLink to="/Home" class="routerLink">Home</RouterLink>
    <RouterLink to="/Notifications" class="routerLink">Notifications</RouterLink>
    <RouterLink to="/Props" class="routerLink">Props</RouterLink>
    <RouterLink to="/emit" class="routerLink">Emit</RouterLink>
    <RouterLink to="/VShow" class="routerLink">V-Show</RouterLink>
    <RouterLink to="/Modal" class="routerLink">Modal</RouterLink>
  </header>
  <!-- 可以在這裡放很多元件 ex: <card /> -->
  <!-- 要寫在<RouterView />裡面 -->
  <RouterView />
</template>

<style scoped>
header {
  height: 25vh;
  background: pink;
  display: flex;
  justify-content: space-around;
  align-items: center;

}

img {
  width: 160px;
  height: 120px;
}

.routerLink:active {
  font-family: fantasy;
  text-decoration: none;
  color: orange;
  transition: 0.1s;
}

a {
  font-family: fantasy;
  text-decoration: none;
  color: white;
  font-size: 50px;
}
</style>
