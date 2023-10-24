<template>
  <div class="container header">
    <Particles />
    <header>
      <div class="header__content">
        <div class="violet__img--wrapper">
          <div class="violet-dot" />
          <div class="violet-line" />
        </div>

        <div>
          <div class="header__title">
            Hello,I'm
            <h1 class="header-name">Kamronbek</h1>
          </div>

          <p class="header__description">Frontend developer</p>
        </div>
      </div>

      <img class="header__img" src="./assets/main-img.png" />

      <img
        class="header__img--min"
        src="https://www.monitorteknologi.com/wp-content/uploads/2020/10/Apa-Itu-Programming-Pemrograman-1170x702.jpg"
      />
    </header>
  </div>
</template>
<script>
import Particles from './Particles.vue';
export default {
  components: {
    Particles,
  },
};
</script>
<style scoped>
header {
  display: flex;
  gap: 10px;
  flex-direction: column;
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
  letter-spacing: 2px;
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
.header__img--min {
  display: none;
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
  header {
    align-items: center;
  }
}
@media (max-width: 450px) {
  .header__content {
    gap: 10px;
  }
  .header-name {
    font-size: 40px;
  }
  .header__description {
    font-size: 24px;
  }
  .header__title {
    font-size: 20px;
  }
}
</style>
