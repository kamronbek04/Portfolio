<template>
  <div class="contacts">
    <div class="container">
      <div class="contact__title--wrapper title__wrapper">
        <p class="main__title">Contact</p>
        <p class="bg__title">Contact</p>
      </div>
      <div class="contact__content--wrapper">
        <div class="contact__send">
          <p class="contact__content--title">Just say Hello</p>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message"></textarea>
          <button>Send Message</button>
        </div>
        <div class="contact__info">
          <p class="contact__content--title">Contact Info</p>
          <div class="contact__content--desc">
            <div class="contact__items">
              <a
                href="mailto:islomovkamronbek001@gmail.com"
                class="icon__wrapper"
                aria-label="to direct to my gmail address"
              >
                <i class="fa-regular fa-envelope"></i>
              </a>
              <a
                href="mailto:islomovkamronbek001@gmail.com"
                aria-label="to direct to my gmail address"
                >islomovkamronbek001 @gmail.com</a
              >
            </div>
            <div class="contact__items">
              <a
                href="tel:+998902965156"
                class="icon__wrapper"
                aria-label="to direct to my phone number"
              >
                <i class="fa-solid fa-phone"></i>
              </a>
              <a
                href="tel:+998902965156"
                aria-label="to direct to my phone number"
                >+998 90 296-51-56</a
              >
            </div>
            <div class="contact__items">
              <a
                href="https://maps.app.goo.gl/bUaAbH2jof2rWDwc6"
                class="icon__wrapper"
                aria-label="to show my address"
              >
                <i class="fa-solid fa-location-dot"></i>
              </a>
              <a
                href="https://maps.app.goo.gl/bUaAbH2jof2rWDwc6"
                aria-label="to show my address"
                >Uzbekistan , Tashkent region, Mirzo Ulugbek district</a
              >
            </div>
            <div class="contact__items">
              <a
                class="icon__wrapper"
                href="https://t.me/k_matthew1"
                aria-label="to direct to my telegram account"
              >
                <i class="fa-brands fa-telegram"></i>
              </a>
              <a
                href="https://t.me/k_matthew1"
                aria-label="to direct to my telegram account"
                >@k_matthew1</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.contacts {
  background: var(--main-bg);
  padding-bottom: 40px;
}
.contact__content--wrapper {
  display: flex;
  width: 100%;
  gap: 40px;
}
.contact__send {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 30px;
}
.contact__content--title {
  font-size: 36px;
  color: var(--white);
}
.contact__send input,
.contact__send textarea {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 20px;
  transition: all 0.4s ease;
  background-color: var(--tertiary);
  color: var(--white);
}
.contact__send textarea {
  resize: none;
  height: 150px;
}
.contact__send button {
  padding: 20px;
  border: none;
  border-radius: 10px;
  color: var(--white);
  background-color: var(--violet);
  width: 50%;
}
.contact__items {
  display: flex;
  align-items: center;
  margin-top: 36px;
}
.contact__items a {
  text-decoration: none;
  color: var(--white);
  transition: all 0.4s ease;
}
.icon__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 0.5px solid var(--default-color);
  border-radius: 50%;
  background-color: var(--main-bg);
  width: 50px;
  height: 50px;
  margin-right: 20px;
  transition: all 0.4s ease;
}
.icon__wrapper:hover {
  border: 0.5px solid var(--violet);
}
.contact__items a:hover {
  color: var(--violet);
}

@media (max-width: 900px) {
  .contact__content--wrapper {
    flex-direction: column;
  }
  .contact__send {
    width: 100%;
  }
  .contact__content--desc {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1.5fr 1fr;
    justify-content: space-between;
    column-gap: 10px;
  }

  .icon__wrapper {
    margin-right: 10px;
  }
}
@media (max-width: 600px) {
  .contact__content--title {
    font-size: 28px;
  }

  .contact__content--desc {
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 450px) {
  .contact__send {
    gap: 20px;
  }
  .contact__items {
    margin-top: 28px;
  }
  .contact__items a:last-child {
    font-size: 14px;
  }
}
</style>
