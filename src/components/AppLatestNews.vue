<script>

import { store } from "../store.js";

export default {
    name: "AppLatestNews",
    data() {
        return {
            store,
        }
    },
}

</script>


<template>
    <div class="news">
        <div>
            {{ store.News.text }}
        </div>
    </div>
</template>


<style lang = "scss" scoped>
.news {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    background-color: rgb(234, 74, 86);

    div {
        color: white;
        font-size: 11px;
        cursor: pointer;
    }
}
</style>