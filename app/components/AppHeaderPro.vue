<template>
  <nav class="navbar bg-[#F3F4F6] shadow-md px-4 justify-between h-28 border-b border-black mb-10">
    <!-- Gauche : bouton Home -->
    <div class="flex-none">
      <NuxtLink to="/pro/HomePro" class="btn btn-ghost btn-square">
        <svg xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24"
          stroke-width="2" stroke="currentColor"
          class="h-24 w-24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10" />
        </svg>
      </NuxtLink>
    </div>

    <!-- Centre : logo -->
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <NuxtLink to="/pro/HomePro">
        <img src="/Logo.png" alt="Logo" class="h-25" />
      </NuxtLink>
      
    </div>

    <!-- Droite : bouton menu burger -->
    <div class="flex-none">
      <button class="btn btn-ghost btn-square" @click="toggleMenu">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24"
          stroke-width="2" stroke="currentColor"
          class="h-24 w-24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            stroke-width="2" stroke="currentColor"
            class="h-24 w-24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />>

        </svg>
      </button>
    </div>

    <!-- Overlay menu plein écran -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="absolute top-28 left-0 right-0 bg-[#F3F4F6] bg-opacity-90 flex flex-col items-center justify-center text-white z-50 border-2 border-black rounded-lg mx-12">

        <!-- Liens de navigation -->
        <ul class="space-y-8 text-xl font-bold text-black ">
          <NuxtLink to="/homePro" @click="toggleMenu">
            <li class="border-2 bg-[#3B82F6]/16 rounded-lg p-4 text-center shadow-xl m-8">Profil entreprise</li>
          </NuxtLink>
          <NuxtLink to="/pro/HomePro" @click="toggleMenu">
            <li class="border-2 bg-[#3B82F6]/16 rounded-lg p-4 text-center shadow-xl m-8">Document entreprise</li>
          </NuxtLink>
          <NuxtLink to="/pro/myMissions" @click="toggleMenu">
            <li class="border-2 bg-[#3B82F6]/16 rounded-lg p-4 text-center shadow-xl m-8">Historique des missions</li>
          </NuxtLink>
          <NuxtLink to="/pro/HomePro" @click="toggleMenu">
            <li class="border-2 bg-[#3B82F6]/16 rounded-lg p-4 text-center shadow-xl m-8">Mes achats</li>
          </NuxtLink>
          <NuxtLink to="/pro/HomePro" @click="toggleMenu">
            <li class="border-2 bg-[#3B82F6]/16 rounded-lg p-4 text-center shadow-xl m-8">Contact support</li>
          </NuxtLink>

          <li class="border-2 bg-[#3B82F6]/16 rounded-lg p-4 text-center shadow-xl m-8">
            <button class="w-full h-full" @click="() => { logout(); toggleMenu(); router.push('/') }">
              Déconnexion
            </button>
          </li>        
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="js">
  import { useUserStore } from '~/stores/user'
  
  const router = useRouter()

  const userStore = useUserStore()
  const logout = () => {
    userStore.logout()
  }

  const isMenuOpen = ref(false)
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
</script>

<style scoped lang="css"></style>
