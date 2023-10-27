<template>
  <q-header class="header q-py-sm">
    <div class="container">
      <q-toolbar class="toolbar">
        <q-btn
          class="lt-md"
          text-color="white"
          flat
          dense
          icon="menu"
          aria-label="Menu"
          @click="toggleSidebar"
        />

        <q-btn to="/" flat class="logo gt-xs">
          <q-icon class="logo__icon">
            <img src="src/assets/avent_logo-white.png" alt="Avent logo" />
          </q-icon>
          <q-toolbar-title class="logo__title">Авент</q-toolbar-title>
        </q-btn>

        <q-input
          v-model="search"
          class="search gt-sm"
          placeholder="Поиск"
          standout="text-white"
          :input-style="{ color: 'white' }"
          filled
          dense
        >
          <template v-slot:prepend>
            <q-icon color="white" name="search" />
          </template>
        </q-input>

        <div class="contacts gt-sm">
          <div class="contacts__block phone">
            <q-icon name="phone" size="1.6rem" />
            <a class="phone__link" href="tel:+78123855060">8 (812) 385-50-60</a>
          </div>

          <div class="contacts__block time">
            <q-icon name="schedule" size="1.6rem" label="lala" />
            <span>пн-пт 09:00—18:00</span>
          </div>
        </div>
        <q-btn
          to="/catalog"
          label="Каталог"
          class="text-capitalize gt-xs"
          text-color="white"
          flat
        />

        <div>
          <q-btn color="primary" icon="face" class="gt-sm">
            <q-menu transition-show="flip-right" transition-hide="flip-left">
              <q-list style="min-width: 100px">
                <q-item to="/profile" v-if="isUserAuthenticated" clickable>
                  <q-item-section>Профиль</q-item-section>
                </q-item>
                <q-separator />
                <q-item
                  @click="toggleLoginCard"
                  v-if="!isUserAuthenticated"
                  clickable
                >
                  <q-item-section>Войти</q-item-section>
                </q-item>
                <q-item v-if="isUserAuthenticated" @click="logout" clickable>
                  <q-item-section>Выйти</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn to="/cart" icon="shopping_cart" flat>
            <q-badge floating color="pink-13">{{ cartItemCount }}</q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    </div>
  </q-header>

  <q-drawer v-model="sidebarOpen" bordered>
    <q-btn icon="close" class="float-right" flat @click="toggleSidebar" />
    <div class="sidebar">
      <q-btn to="/catalog">Каталог</q-btn>
      <q-btn to="/cart">Корзина</q-btn>
      <q-separator />
      <q-btn v-if="!isUserAuthenticated" @click="toggleLoginCard">Войти</q-btn>
      <q-btn v-if="isUserAuthenticated" to="/profile">Профиль</q-btn>
      <q-separator />
      <q-btn v-if="isUserAuthenticated" @click="logout">Выйти</q-btn>
    </div>
  </q-drawer>
  <q-dialog v-model="card">
    <LoginCard />
  </q-dialog>
</template>

<script lang="ts" setup>
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user';
import { authToken } from 'src/shared/api/auth';
import LoginCard from 'src/features/login-card/index';

const search = ref('');
const card = ref(false);
const cartItemCount = ref(0);
const sidebarOpen = ref(false);

function toggleSidebar(): void {
  sidebarOpen.value = !sidebarOpen.value;
}
function toggleLoginCard(): void {
  card.value = !card.value;
}

const userStore = useUserStore();
const router = useRouter();

const isUserAuthenticated = computed(() => userStore.isAuthenticated);

onMounted(() => {
  userStore.setIsAuthenticated(!!authToken.get());
});

const logout = (): void => {
  authToken.remove();
  userStore.setIsAuthenticated(false);
  router.push('/');
};

defineComponent({
  name: 'HeaderComponent',
});
</script>

<style lang="scss" scoped>
.header {
  background-color: $ocean;
  .toolbar {
    display: flex;
    justify-content: space-between;
    .contacts {
      display: flex;
      gap: 20px;
      align-items: center;
      &__block {
        display: flex;
        gap: 8px;
      }
      .phone__link {
        text-decoration: none;
        color: #fff;
      }
    }
  }
}

.logo {
  padding: 10px;
  transition: 0.3s;
  &__icon {
    transition: 0.4s;
  }
  &__title {
    padding: 0 5px;
    text-transform: capitalize;
    color: #fff;
    font-weight: 600;
    font-size: 1.5rem;
  }
  &:hover .logo__icon {
    animation-name: rotate;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 12px;
}
.sidebar > * {
  text-transform: capitalize;
  max-width: 250px;
}
</style>
