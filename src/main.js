import Vue from 'vue'
import App from './App.vue'
import './index.css';

/* Work offline */
// Register the service worker
if ('serviceWorker' in navigator) {
  // Wait for the 'load' event to not block other work
  window.addEventListener('load', async () => {
    // Try to register the service worker.
    try {
      const reg = await navigator.serviceWorker.register('./sw.js');
      console.log('Service worker registered! :sunglasses:', reg);
    } catch (err) {
      console.log(':disappointed_relieved: Service worker registration failed: ', err);
    }
  });
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
