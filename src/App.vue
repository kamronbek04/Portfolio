<template>
  <div>
    <Navbar />
    <Header />
    <Intro />
    <Projects />
  </div>
</template>
<script>
import Navbar from './Navbar.vue';
import Header from './Header.vue';
import Intro from './Intro.vue';
import Projects from './Projects.vue';
export default {
  components: {
    Navbar,
    Header,
    Intro,
    Projects,
  },
};
</script>
<style></style>
