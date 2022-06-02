import { createApp } from 'vue'
import { router } from './router'
import App from '../components/App.vue'

// 설치했던 fontawesome-svg-core와 vue-fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 설치했던 아이콘파일에서 해당 아이콘만 불러옵니다. 
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";

// 불러온 아이콘을 라이브러리에 담습니다. 
library.add(faAt, faLock);

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router)

app.mount('#app')
