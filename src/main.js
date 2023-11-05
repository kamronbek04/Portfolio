// import { createApp } from 'vue';
// import App from './App.vue';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import './main.css';
// import Particles from 'vue3-particles';

// createApp(App).use(Particles).use(AOS).mount('#app');
import { createApp } from 'vue';
import App from './App.vue';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library
import './main.css';
import Particles from 'vue3-particles';

const app = createApp(App);
app.use(Particles); // Register the vue3-particles plugin
app.use(AOS.init()); // Register the AOS plugin
app.mount('#app'); // Mount your Vue app to the DOM
