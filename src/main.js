import { createApp } from 'vue'
import './style.css'
import App from './App.vue'




/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faBars, faFacebookF, faTwitter, faInstagram, faYoutube);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')