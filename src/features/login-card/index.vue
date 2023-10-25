<template>
  <q-card
    class="my-card"
    transition-show="flip-right"
    transition-hide="flip-left"
  >
    <q-card-section class="q-pt-none">
      <InputEmail v-model="userEmail" />
      <InputPassword v-model="userPassword" />
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn
        v-close-popup
        @click="handleLogin"
        flat
        color="primary"
        label="Войти"
      />
      <div class="text-caption text-grey">Ещё нет аккаунта?</div>

      <q-btn flat label="Зарегистрироваться" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import InputPassword from './ui/inputPassword.vue';
import InputEmail from './ui/inputEmail.vue';

const userEmail = ref('');
const userPassword = ref('');

function handleLogin(): void {
  console.log(userEmail.value, userPassword.value);
}

defineComponent({
  name: 'AuthForm',
});
</script>

<style lang="scss" scoped></style>
