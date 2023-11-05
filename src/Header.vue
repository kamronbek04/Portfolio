<template>
  <div class="header">
    <Particles />
    <div class="container">
      <header>
        <div class="header__content">
          <div class="violet__img--wrapper">
            <div class="violet-dot" />
            <div class="violet-line" />
          </div>

          <div>
            <div class="header__title">
              Hello, I'm
              <h1 class="header-name">
                {{ displayText }}
                <span
                  class="typed-cursor"
                  :class="{ 'cursor-blink': cursorVisible }"
                >
                  |</span
                >
              </h1>
            </div>

            <p class="header__description">Frontend developer</p>
          </div>
        </div>

        <img
          class="header__img"
          src="./assets/main-img.png?format=webp"
          alt="header image"
        />

        <img
          class="header__img--min"
          src="https://www.monitorteknologi.com/wp-content/uploads/2020/10/Apa-Itu-Programming-Pemrograman-1170x702.jpg?format=webp"
          alt="header image for small screens"
        />
      </header>

      <div class="social__link">
        <a
          class="social__btn"
          href="/"
          v-for="social in socials"
          :key="social.name"
          aria-label="to direct to my social account"
        >
          <span class="social__icon">
            <i :class="social.icon"></i>
          </span>

          <span class="icon__name">{{ social.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Particles from './Particles.vue';

export default {
  components: {
    Particles,
  },
  data() {
    return {
      socials: [
        {
          name: 'Telegram',
          icon: 'fa-brands fa-telegram',
        },
        {
          name: 'LinkedIn',
          icon: 'fa-brands fa-linkedin',
        },
        {
          name: 'Twitter',
          icon: 'fa-brands fa-twitter',
        },
        {
          name: 'Github',
          icon: 'fa-brands fa-github',
        },
      ],
      text: 'Kamronbek',
      displayText: '',
      cursorVisible: true,
      typingInterval: 200,
      eraseInterval: 100,
      cursorBlinkInterval: 600,
    };
  },
  methods: {
    typeAndErase() {
      let isTyping = true;
      let index = 0;

      const typeEraseInterval = setInterval(
        () => {
          if (isTyping) {
            this.displayText = this.text.slice(0, index);
            index++;

            if (index > this.text.length) {
              isTyping = false;
              this.toggleCursor();
            }
          } else {
            this.displayText = this.text.slice(0, index);
            index--;

            if (index === 0) {
              isTyping = true;
              this.toggleCursor();
            }
          }
        },
        isTyping ? this.typingInterval : this.eraseInterval
      );
    },
    toggleCursor() {
      this.cursorVisible = !this.cursorVisible;
    },
  },
  mounted() {
    this.typeAndErase();
    setInterval(this.toggleCursor, this.cursorBlinkInterval);
  },
};
</script>
<style scoped>
header {
  display: flex;
  gap: 10px;
  flex-direction: column;
  /* position: relative;
  height: 100%; */
}
.header__content {
  display: flex;
  align-items: center;
  gap: 28px;
}
.header__title {
  font-size: 30px;
  letter-spacing: 2px;
  color: var(--white);
  line-height: 1.2;
}
.header-name {
  color: var(--violet);
  font-size: 84px;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1.5px;
}
.header__description {
  font-size: 36px;
}
.violet__img--wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.violet-dot {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(--violet);
}
.violet-line {
  width: 4px;
  height: 160px;
  background: #804dee;
  background: linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%);
  background: -webkit-linear-gradient(
    -90deg,
    #804dee 0%,
    rgba(60, 51, 80, 0) 100%
  );
}
.typed-cursor {
  color: var(--violet);
  font-weight: normal;
  position: relative;
}
.cursor-blink {
  animation: cursor-blink 1s infinite;
}

@keyframes cursor-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.header__img--min {
  display: none;
}
.social__link {
  display: flex;
  padding-top: 40px;
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
}
.social__btn {
  border-radius: 50px;
  background-color: var(--main-bg);
  border: 0.5px solid var(--default-color);
  transition: all 0.4s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.social__btn:not(:last-child) {
  margin-right: 20px;
}
.social__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  text-align: center;
  transition: all 0.4s ease;
}
.icon__name {
  font-weight: 600;
  color: #fdfeff;
  overflow: hidden;
  max-width: 0;
  transition: all 0.5s ease;
}
.social__btn:hover .icon__name {
  max-width: 140px;
}
.social__link .social__btn:hover {
  padding-right: 15px;
}
@media (max-width: 1100px) {
  .header__title {
    font-size: 24px;
  }
  .header-name {
    font-size: 72px;
  }
  .header__description {
    font-size: 30px;
  }
}
@media (max-width: 650px) {
  header {
    gap: 30px;
  }
  .header-name {
    font-size: 60px;
  }
  .header__img {
    display: none;
  }
  .header__img--min {
    display: block;
    width: 100%;
  }
}
@media (max-width: 500px) {
  /* header {
    align-items: center;
  } */
}
@media (max-width: 450px) {
  .header__content {
    gap: 10px;
  }
  .header-name {
    font-size: 36px;
  }
  .header__description {
    font-size: 24px;
  }
  .header__title {
    font-size: 20px;
  }
  .social__btn:not(:last-child) {
    margin-right: 16px;
  }
  .social__icon {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
  .social__btn:hover .icon__name {
    font-size: 14px;
    max-width: 120px;
  }
  .social__link .social__btn:hover {
    padding-right: 10px;
  }
}
</style>
