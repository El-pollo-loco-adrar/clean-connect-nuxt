<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-800 dark:bg-white dark:text-gray-800">
    <header v-if="showHeader">
      <AppHeader v-if="!userStore.isAuthenticated"/>
      <app-header-pro v-else-if="userStore.role ==='pro'"/>
      <app-header-part v-else-if="userStore.role ==='part'"/>
    </header>
    <NuxtPage />

    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<script setup>
import { useUserStore } from './stores/user';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeaderPart from './components/AppHeaderPart.vue';
import AppHeaderPro from './components/AppHeaderPro.vue';

const route = useRoute();
const userStore = useUserStore();
const hideOnRoutes = ['home', 'signUp'];
const showHeader = !hideOnRoutes.includes(route.name);
</script>
