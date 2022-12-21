import { reactive } from "vue";

export const store = reactive({
    Header: {
        img: "/avada-music-logo.png",
        fa: "fa-solid fa-bars",
        BtnLatest: false,
    },
    Music: {
        title: "Music Is Life",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae qui voluptates odit magnam temporibus atque bla bla bla ciao ciao.",
    }

})