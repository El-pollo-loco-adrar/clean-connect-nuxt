<template>
  <div class="flex items-center justify-center px-4">
    <div class="card w-full max-w-sm bg-[#F3F4F6] shadow-xl border">
      <div class="card-body">

            <!-- logo -->
        <div class="flex justify-center mb-4">
          <img src="/Logo.png" alt="Logo" class="h-20" />
        </div>

        <div class="flex justify-center border-2 bg-[#3B82F6]/16 rounded-lg p-2">
          <h2 class="text-3xl font-bold">Connexion</h2>
        </div>

        <form class="flex flex-col mb-4 w-full" action="" method="post">

          <label class="text-center text-xl mt-4 " for="emailConnexion">Mon email</label>
          <input class="border bg-[#3B82F6]/16 rounded-lg p-2 mt-2" type="email" id="emailConnexion" name="email" required>

          <label class="text-center text-xl mt-4" for="passwordConnexion">Mon mot de passe</label>
          <input class="border bg-[#3B82F6]/16 rounded-lg p-2 mt-4" type="password" id="passwordConnexion" name="password" autocomplete="current-password" required>

          <NuxtLink to="/" class="text-center italic underline cursor-pointer">J'ai oublié mon mot de passe</NuxtLink>
        </form>


        <div class="mt-6 flex flex-col items-center">
          <button class="btn bg-[#2563EB]/79 w-fit px-6 mx-auto text-white border-2 border-black rounded-lg">Connexion</button>

          <button @click="loginPro" class="btn bg-[#2563EB]/79 w-fit px-6 mx-auto text-white border-2 border-black rounded-lg">Connexion pro</button>
          <button @click="loginPart" class="btn bg-[#2563EB]/79 w-fit px-6 mx-auto text-white border-2 border-black rounded-lg">Connexion part</button>

          <p class="text-center">Je n'ai pas de compte?<NuxtLink to="/signUp" class="text-center italic underline cursor-pointer"> Je m'inscris</NuxtLink></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const router = useRouter()

//login Pro
const loginPro = () => {
  userStore.login('pro')
  router.push('/pro/HomePro')
}

//Login Particulier
const loginPart = () => {
  userStore.login('part')
  router.push('/particulier/HomePart')
}
</script>

<style scoped lang="css">
</style>