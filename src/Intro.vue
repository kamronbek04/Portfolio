<template>
  <div class="intro">
    <div class="container">
      <div class="intro__title--wrapper">
        <p class="intro__title">Overview</p>
        <p class="bg__title">Overview</p>
      </div>
      <div class="intro__content--wrapper">
        <p>
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
.intro__title {
  padding-top: 60px;
  margin-bottom: 40px;
}
.intro__title--wrapper {
  position: relative;
  text-align: center;
}
.intro__title {
  font-size: 48px;
  font-weight: 700;
  color: var(--white);
}
.bg__title {
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translate(-50%);
  font-size: 96px;
  font-weight: 700;
  letter-spacing: 4px;
  opacity: 0.1;
}
.intro__content--wrapper p {
  font-size: 24px;
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
  .bg__title {
    font-size: 80px;
    top: 36px;
  }
  .intro__title {
    font-size: 40px;
  }
  .tools__img {
    width: 64px;
  }
  .intro__content--wrapper p {
    font-size: 20px;
  }
}
@media (max-width: 450px) {
  .bg__title {
    font-size: 54px;
    top: 48px;
  }
  .intro__title {
    font-size: 32px;
  }
  .intro__content--wrapper p {
    font-size: 16px;
  }
  .tools__img {
    width: 40px;
  }
  .intro__tools--wrapper {
    gap: 18px;
  }
}
</style>
