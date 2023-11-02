<template>
  <div>
    <!-- <Navbar /> -->
    <Header />
    <Intro />
    <Projects />
    <Contacts />
  </div>
</template>
<script>
import Navbar from './Navbar.vue';
import Header from './Header.vue';
import Intro from './Intro.vue';
import Projects from './Projects.vue';
import Contacts from './Contacts.vue';
export default {
  components: {
    Navbar,
    Header,
    Intro,
    Projects,
    Contacts,
  },
};
</script>
<style></style>
