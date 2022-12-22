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
    },
    News: {
        text: "VIEW ALL LATEST NEWS",
    },
    Dates: {
        text: "VIEW ALL LIVE DATES",
    },
    FooterTop: {
        img: "/avada-music-logo.png",
        navs: {
            fst: {
                txt: "Home",
                current: true,
            },
            snd: {
                txt: "Meet The Band",
                current: false,
            },
            trd: {
                txt: "Live Dates",
                current: false,
            },
            frth: {
                txt: "Latest News",
                current: false,
            },
            fvth: {
                txt: "Albums",
                current: false,
            },
            sth: {
                txt: "News",
                current: false,
            },
        }
    },
    FooterBottom: {
        navs: {
            fst: {
                txt: "© Copyright 2012 - 2020",
                bar: true,
            },
            snd: {
                txt: "AVADA THEME BY THEMEFUSION",
                bar: true,
            },
            trd: {
                txt: "ALL RIGHTS RESERVED",
                bar: true,
            },
            fth: {
                txt: "POWERED BY WORDPRESS",
                bar: false,
            },
        },
        fas: {
            fb: "fa-brands fa-facebook-f",
            tw: "fa-brands fa-twitter",
            ig: "fa-brands fa-instagram",
            yt: "fa-brands fa-youtube",
        }
    }
})