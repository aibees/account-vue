import { createApp } from 'vue'
import App from '../components/App.vue'

const app = createApp(App)

// ===== global axios =====
import axios from 'axios';

const axiosInstance = axios.create({
    
})
app.provide('$axios', axiosInstance)
// ========================

// ===== FontAwesomeIcon Add =====
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAt, faLock, faArrowTrendUp, faMoneyBillTransfer, faCoins } from "@fortawesome/free-solid-svg-icons";

library.add(faAt, faLock, faArrowTrendUp, faMoneyBillTransfer, faCoins);
app.component("font-awesome-icon", FontAwesomeIcon)
// ===============================

// ===== Router Resigrer =====
import { setRouterToApp } from './router'
app.use(setRouterToApp())
// ===========================

export default app
