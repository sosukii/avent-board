<template>
  <q-card
    class="my-card"
    transition-show="flip-right"
    transition-hide="flip-left"
  >
    <q-card-section class="q-pt-none">
      <InputEmail />
      <InputPassword />
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn v-close-popup flat color="primary" label="Войти" />
      <div class="text-caption text-grey">Ещё нет аккаунта?</div>

      <q-btn flat label="Зарегистрироваться" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import InputPassword from './ui/inputPassword.vue';
import InputEmail from './ui/inputEmail.vue';

defineComponent({
  name: 'AuthForm',
});
</script>

<style lang="scss" scoped></style>
