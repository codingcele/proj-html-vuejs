<script>

import { store } from "../store.js";

export default {
    name: "AppPlay",
    data() {
        return {
            store,
        }
    },
    methods: {
        toggle() {
            store.Play.over = !store.Play.over;
        },
    },
}


</script>


<template>
    <div class="top">

    </div>
    <div class="play">
        <div class="text">
            {{ store.Play.text }}
        </div>
        <span :class="{ change: store.Play.over }" @mouseover="toggle" @mouseout="toggle">
            <font-awesome-icon :icon="store.Play.fa" class="position" />
        </span>
    </div>
</template>


<style lang = "scss" scoped>
.top {
    height: 13vh;
    background-image: url("/home-testimonial-parallax.jpg");
    background-size: 100%;
    background-position-y: -15px;
}

.play {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 63.5vh;
    background-image: url("/home-testimonial-parallax.jpg");
    background-size: 100%;
    background-position-y: -185px;

    .text {
        font-family: serif;
        padding-left: 350px;
        padding-right: 350px;
        text-align: center;
        color: white;
        line-height: 26px;
        font-size: 17px;
    }


    span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        background-color: rgb(234, 74, 86);
        margin-top: 30px;
        color: white;
        cursor: pointer;
        margin-bottom: 90px;

        .position {
            margin-left: 2px;
        }
    }

    .change {
        background-color: white;
        color: black;
    }
}
</style>