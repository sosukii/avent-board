<template>
  <q-footer elevated class="footer">
    <div class="container">
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </div>
  </q-footer>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';

defineComponent({
  name: 'FooterComponent',
});
</script>

<style lang="scss" scoped>
.footer {
  background-color: $ocean;
}
</style>
