import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/css/main.css'
import '@/assets/css/mobile.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

/* import specific icons */


/* add icons to the library */

library.add(faTwitter,faFacebookF,faInstagram)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
