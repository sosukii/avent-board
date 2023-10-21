<template>
  <q-page>
    <div class="container">
      <h2>Главная</h2>
      <div class="links">
        <q-btn
          to="/catalog"
          label="Каталог"
          text-color="black"
          flat
        />
        <q-btn
          to="/cart"
          label="Корзина"
          text-color="black"
          flat
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'IndexPage',
});
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
