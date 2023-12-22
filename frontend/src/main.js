import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash, faFilter, faPlus } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)
const pinia = createPinia()

library.add(faTrash, faFilter, faPlus) 

app.use(pinia)

app
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app')

