<script>
import { store } from "../store.js";

export default {
    name: "AppMusic",
    data() {
        return {
            store,
        }
    },
}

</script>


<template>
    <div class="music">
        <h1>
            {{ store.Music.title }}
        </h1>
        <div class="line"></div>
        <span>
            {{ store.Music.subtitle }}
        </span>
    </div>
</template>


<style lang = "scss" scoped>
.music {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 38vh;
    background-color: rgb(50, 56, 68);

    h1 {
        margin-top: 10px;
        color: white;
    }

    .line {
        height: 1.5px;
        width: 14vw;
        margin-top: 20px;
        background-color: rgb(68, 78, 98);
    }


    span {
        text-align: center;
        padding: 3vh 55vh;
        line-height: 28px;
        font-size: 15px;
        color: rgb(115, 115, 118);
        font-family: serif;
    }
}
</style>