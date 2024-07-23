import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; // Vue Router 4 için doğru fonksiyonları içe aktarın
import App from '../src/App.vue';
import Empty from '../src/components/Empty.vue';

// Rotalarınızı tanımlayın
const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/iletisim',
    name: 'Empty',
    component: Empty
  }
];

// Router örneğini oluşturun ve `routes` seçeneğini geçin
const router = createRouter({
  history: createWebHistory(), // createWebHistory kullanın
  routes
});

// Root örneğini oluşturun ve mount edin
const app = createApp(App);
app.use(router);
app.mount('#app');
