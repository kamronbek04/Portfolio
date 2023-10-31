<template>
  <div class="project">
    <div class="container">
      <div class="project__title--wrapper title__wrapper">
        <p class="main__title">Projects</p>
        <p class="bg__title">Projects</p>
      </div>
      <div class="project__content--wrapper content__wrapper">
        <p class="content__desc">
          This section showcases my projects, providing a glimpse of my skills
          and experience. Each project represents a real-world example of my
          work, highlighting my problem-solving abilities, diverse technical
          expertise, and project management capabilities.
        </p>
      </div>

      <div class="project__cards">
        <div
          v-for="project in projects"
          :key="project.title"
          class="card__items"
        >
          <div class="card__img--wrapper">
            <a :href="project.demo" target="_blank">
              <img class="card__img" :src="project.img" />
              <a :href="project.github" class="github" target="_blank">
                <img src="./assets/tools/github.png" />
              </a>
            </a>
          </div>

          <div class="card__content">
            <p class="card__content--title">{{ project.title }}</p>

            <p class="card__content--desc">
              {{ project.desc }}
            </p>
          </div>

          <div class="card__footer">
            <p v-for="tool in project.tools" :class="tool" :key="tool">
              #{{ tool }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import project1 from './assets/project-1.png';
import project2 from './assets/project-2.png';
import project3 from './assets/project-3.png';
import project4 from './assets/project-4.png';
import project5 from './assets/project-5.png';
export default {
  data() {
    return {
      projects: [
        {
          title: 'Restaurant',
          img: project1,
          desc: 'Landing page website for restaurant that allow user to get more information about the restaurant.With magnificient images and icons, user-friendly design with responsiveness.',
          tools: { html: 'html', css: 'css' },
          demo: 'https://omnifood-kamronbek.netlify.app/#',
          github: 'https://github.com/kamronbek04/Restaurant',
        },
        {
          title: 'Dad Jokes',
          img: project3,
          desc: 'Discover a world of humor on the Dad Jokes website, where laughter is just a click away. This delightful platform stands out from the rest with its refreshing simplicity.',
          tools: { html: 'html', css: 'css', js: 'js', restapi: 'restapi' },
          demo: 'https://joke-teller-7560jufp4-kamronbek04.vercel.app/',
          github: 'https://github.com/kamronbek04/Joke_teller',
        },
        {
          title: 'Youtube Clone',
          img: project4,
          desc: 'Youtube clone website in a platform that allows user to watch videos and provides an interface for searching,finding information about channel you are watching and suggestion videos depending on the video you are watching',
          tools: {
            html: 'html',
            css: 'css',
            react: 'react',
            restapi: 'restapi',
          },
          demo: 'https://youtube-clone-3jt3n9199-kamronbek04.vercel.app/',
          github: 'https://github.com/kamronbek04/YouTubeClone',
        },
        {
          title: 'Koko eat',
          img: project2,
          desc: 'Koko eat is a website specializing in food delivery.Users can filter prices, choose foods they want to deliver, and get information about food',
          tools: {
            html: 'html',
            css: 'css',
            vue: 'vue',
          },
          demo: 'https://koko-eat-kamronbek04.vercel.app/',
          github: 'https://github.com/kamronbek04/kokoEat',
        },
        {
          title: 'Calculator',
          img: project5,
          desc: 'Calculator project created more like a macbook calculator.One of the advantages of that calculator   - users can monitor their calculations.',
          tools: {
            html: 'html',
            css: 'css',
            vue: 'vue',
          },
          demo: 'https://mac-calculator-ochre.vercel.app/',
          github: 'https://github.com/kamronbek04/Calculator',
        },
      ],
    };
  },
};
</script>
<style scoped>
.project {
  background: var(--main-bg);
}
.project__cards {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
}
.card__items {
  border-radius: 10px;
  padding: 16px;
  width: 30%;
  background-color: var(--tertiary);
  position: relative;
}

.card__img--wrapper {
  border-radius: 10px;
  overflow: hidden;
}
.card__img {
  border-radius: 10px;
  width: 100%;
  transition: all 0.4s;
}
.card__img:hover {
  transform: scale(1.1);
}
.github {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  top: 24px;
  right: 24px;
}
.github img {
  width: 24px !important;
  height: 24px !important;
  object-fit: contain;
}
.card__content--title {
  font-size: 28px;
  font-weight: 500;
  color: var(--white);
  padding: 10px 0;
}
.card__content--desc {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card__footer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
}
</style>
