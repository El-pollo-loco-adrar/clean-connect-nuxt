<template>
  <div class="flex items-center justify-center">
    <div class="card w-full max-w-sm bg-[#F3F4F6] shadow-xl border">
      <div class="card-body">

            <!-- logo -->
        <div class="flex justify-center mb-4">
          <img src="/Logo.png" alt="Logo" class="h-20" />
        </div>

        <div class="flex justify-center border-2 bg-[#3B82F6]/16 rounded-lg p-2">
          <h2 class="text-3xl font-bold">Inscription</h2>
        </div>

        <form @submit.prevent="handleSubmit" class="flex flex-col mb-4 w-full" action="" method="post">
          <div class="mt-4">
            <label class="flex items-center justify-between  p-3 rounded cursor-pointer hover:bg-gray-50">
              <span class="text-lg">Je recherche du personnel</span>
              <input type="radio" name="choiceStatus" value="pro" class="radio radio-primary" />
            </label>

            <label class="flex items-center justify-between  p-3 rounded cursor-pointer hover:bg-gray-50">
              <span class="text-lg">Je recherche des missions</span>
              <input type="radio" name="choiceStatus" value="sal" class="radio radio-primary">
            </label>
          </div>


          <label class="text-center text-xl mt-4 " for="emailSignUp">Mon adresse email</label>
          <input v-model="email" class="border bg-[#3B82F6]/16 rounded p-2 mt-2" type="email" id="emailSignUp" name="email" required>

          <label class="text-center text-xl mt-4" for="passwordSignUp">Mon mot de passe</label>
          <input v-model="password" class="border bg-[#3B82F6]/16 rounded p-2 mt-4" type="password" id="passwordSignUp" name="password" autocomplete="current-password" required>

          <label class="text-center text-xl mt-4" for="passwordSignUp">Confirmation du mot de passe</label>
          <input v-model="confirmPassword" class="border bg-[#3B82F6]/16 rounded p-2 mt-4" type="password" id="confirmPasswordSignUp" name="confirmPassword" autocomplete="current-password" required>

        </form>

        <button type="submit" class="btn bg-[#2563EB]/79 w-fit px-6 mx-auto text-white border-2 border-black rounded-4">Inscription</button>

        <div class="mt-6 flex flex-col items-center">
          
          <p class="text-center">Je déjà un compte?<NuxtLink to="/" class="text-center italic underline cursor-pointer"> Je me connecte</NuxtLink></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
  import { computed, watch, onMounted, onUpdated, onBeforeUnmount, ref } from 'vue'

  const choiceStatus = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')

  // if(!choiceStatus.value){
  //   alert("veuillez choisir un statut")
  //   return
  // }

  const handleSubmit = () => {
    //Regex mail
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i
    //Regex password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

    if (!emailRegex.test(email.value)){
      alert('Email invalide')
      return
    }
    if (!passwordRegex.test(password.value)){
      alert('mdp pas bon')
      return
    }
    if (password.value !== confirmPassword.value){
      alert('mdp doivent correspondent')
      return
    }
  }



</script>

<style scoped lang="css">
</style>