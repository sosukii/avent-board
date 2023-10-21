<template>
  <q-input
    label="Пароль*"
    type="password"
    v-model="password"
    :rules="[(val) => (val && val.length >= 6) || 'Минимум 6 символов']"
    class="signup-form__input text-body1"
  />
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';

const password = ref('');

defineComponent({
  name: 'InputPassword',
});
</script>

<style lang="scss" scoped></style>
