<template>
  <section class="login">
    <div class="login__banner">
      <div class="banner__img"></div>
      <div class="banner__content">
        <CulqiLogo />
        <h1>Dale más power ⚡ a tus empleados hoy 💪</h1>
        <p>Te ayudamos a gestionarlos de manera más sencilla</p>
      </div>
    </div>
    <div class="login__form">
      <div class="form">
        <h4 class="mb-8 text-2xl text-center font-bold text-greyscale-900">
          Inicia sesión
        </h4>
        <form>
          <Input
            hasRequiredLabel
            label="Correo electrónico"
            placeholder="Ingresa el correo electrónico"
            v-model="email"
          />
          <Input
            hasRequiredLabel
            type="password"
            label="Contraseña"
            placeholder="Ingresa la contraseña"
            v-model="password"
          />

          <InfoMsg msg="Correo o contraseña incorrectos" />
          <Button>Iniciar sesión</Button>
        </form>
        <p class="mt-8 text-center text-sm font-medium text-greyscale-500">
          ¿Eres nuevo aquí?
          <a
            class="text-primary-500"
            href="https://culqi.com/register/"
            target="_blank"
            rel="noopener noreferrer"
            >Crea una cuenta</a
          >
        </p>
      </div>

      <p class="copyright">© 2023 Culqi . Todos los derechos reservados</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CulqiLogo from "../components/CulqiLogo.vue";
import Input from "../components/Input.vue";
import Button from "../components/MainBtn.vue";
import InfoMsg from "../components/InfoMsg.vue";

const email = ref("");
const password = ref("");
</script>

<style lang="postcss" scoped>
.login {
  @apply lg:h-[100vh] lg:grid lg:grid-cols-2;
}

.login__banner {
  @apply lg:grid lg:grid-rows-[1fr_0.3fr];
}

.banner__img {
  background-image: url("../assets/images/banner-login.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @apply h-48;
  @apply md:h-56;
  @apply lg:h-full;
}

.banner__content {
  @apply hidden;
  @apply lg:block lg:bg-greyscale-900 lg:p-12 border-t-[5px] lg:border-primary-500;
  @apply lg:text-white;

  & h1 {
    @apply my-6 text-4xl;
    @apply xl:text-5xl;
  }
}

.login__form {
  @apply gap-6 py-6 grid grid-rows-[1fr_22px];
  @apply xl:grid-rows-[1fr_22px];
}

.form {
  @apply w-4/5 mx-auto flex flex-col justify-center;
  @apply xl:min-w-[480px] xl:max-w-[480px];
}

.copyright {
  @apply text-center text-xs font-medium text-greyscale-500;
  @apply lg:mt-0 lg:text-sm;
}
</style>
