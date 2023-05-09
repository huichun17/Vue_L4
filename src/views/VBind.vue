<script >

export default ({
    data() {
        return {
            isRounded: false,
            move: false,
            imgArr: [
                "../../public/img/1.jpg",
                "../../public/img/2.jpg",
                // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDO4hRL0h1Q7xsQWYCQcKYbrCNGGCItSl1kJ0ed3IMl7M2iz7PELKsRyHq-EKoI9kTyXk&usqp=CAU",

                // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKoaW2JZXcbvtipMOlnBWdPdoAPz50lZ--CmT5zHzmx7dqQ9w-GyyVdPVulPJBqVt34I&usqp=CAU",
            ],
            imgNum: false,
        }
    }, methods: {
        changeRoundes() {
            this.isRounded = !this.isRounded;
            this.move = !this.move;
        }, changeImg() {
            this.imgNum = !this.imgNum;
        }
    }
})
</script>

<template>
    <button type="button" @click="changeRoundes">Rounded</button>
    <div class="v-bind">

        <h1>BBB</h1>
        <h2>v-bind</h2>

        <div class="box" v-bind:class="{ 'rounded': isRounded, 'to-right': move }"></div>

        
        <img v-bind:src="imgArr[this.imgNum ? 0 : 1]">
        <button type="button" @click="changeImg">changeImg</button>
        <!-- <img src="../../public/img/1.jpg" alt=""> -->
    </div>
</template>

<style scoped>
.v-bind {
    position: relative;
}

.box {
    height: 300px;
    width: 300px;
    background: blue;
    position: absolute;
    top: 100px;
    left: 0;
    transition: 1s;
}

.rounded {
    border-radius: 2rem;
}

.to-right {
    left: 300px;
}
</style>
