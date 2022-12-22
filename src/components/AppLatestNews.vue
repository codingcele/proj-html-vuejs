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
    <div class="news change">
        <div class="normal">
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
    color: white;
    cursor: pointer;
    font-size: 11px;
}

.news:hover {
    color: black;
    background-color: white;
}
</style>