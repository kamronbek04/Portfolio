<template>
  <div class="intro">
    <div class="container">
      <div class="intro__title--wrapper title__wrapper">
        <p class="main__title">Overview</p>
        <p class="bg__title">Overview</p>
      </div>
      <div class="intro__content--wrapper content__wrapper">
        <p class="content__desc">
          I am a software engineer with expertise in a range of web development
          technologies, including <u>HTML</u>, <u>CSS</u>, <u>Sass</u>,
          <u>Bootstrap</u>, <u>JavaScript</u>, <u>React</u>, <u>Vue.js</u>, and
          <u>PostgreSQL</u>, along with proficiency in various other essential
          tools. My ability to quickly grasp new concepts and my problem-solving
          skills allow me to address real-world challenges in a user-friendly
          manner.
        </p>
      </div>
      <div class="intro__tools--wrapper">
        <img
          class="tools__img"
          v-for="img in images"
          :key="img"
          :src="img"
          alt="web tools"
        />
      </div>
    </div>
  </div>
</template>
<script>
import html from './assets/tools/html.png';
import css from './assets/tools/css.png';
import bootstrap from './assets/tools/bootstrap.png';
import sass from './assets/tools/sass.png';
import js from './assets/tools/js.png';
import vue from './assets/tools/vue.png';
import react from './assets/tools/react.png';
import postgres from './assets/tools/postgres.png';
import figma from './assets/tools/figma.png';
import github from './assets/tools/github.png';
export default {
  data() {
    return {
      images: [
        html,
        css,
        bootstrap,
        sass,
        js,
        vue,
        react,
        postgres,
        figma,
        github,
      ],
    };
  },
};
</script>
<style scoped>
.intro {
  background-color: var(--main-bg);
}
.intro__tools--wrapper {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;
}
.tools__img {
  width: 80px;
}
@media (max-width: 800px) {
  .intro__tools--wrapper {
    gap: 40px;
  }
}
@media (max-width: 600px) {
  .tools__img {
    width: 64px;
  }
}
@media (max-width: 450px) {
  .tools__img {
    width: 40px;
  }
  .intro__tools--wrapper {
    gap: 18px;
  }
}
</style>
