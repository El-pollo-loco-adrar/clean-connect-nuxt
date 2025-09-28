<template>
  <div class="flex items-center justify-center">
    <div class="card w-96 bg-[#F3F4F6] shadow-xl border">
      <div class="card-body">
        <h1 class="flex justify-center border-2 bg-[#3B82F6]/16 rounded p-2 text-xl m-4">Comment ça marche?</h1>
        <div class="mt-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ad veritatis? Culpa natus sit fuga esse commodi unde exercitationem maiores quisquam vero quibusdam aliquid est distinctio, harum rem accusantium ipsam perspiciatis sint, vel labore deleniti aperiam tenetur doloribus. Doloremque, voluptas praesentium incidunt alias porro pariatur. Exercitationem unde quaerat illo iusto doloribus ea facere eos reiciendis, asperiores minima similique, rem a?</p>
          <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius praesentium unde tempora, natus soluta iste similique cum repellendus autem quod id magnam excepturi enim quia. Expedita pariatur beatae similique amet, repellat aspernatur, iusto libero voluptates fugit excepturi et eveniet sint vitae at? Explicabo architecto porro, repellendus eius ducimus in soluta.</p>
        </div>
        <div class="flex flex-col items-center p-8">
          <router-link to="/">
            <button class="btn bg-[#2563EB]/79 w-48 text-white border-2 border-black rounded-4 m-4">Connexion</button>
          </router-link>
          <router-link to="/signUp">
            <button class="btn bg-[#2563EB]/79 w-48 text-white border-2 border-black rounded-4">Inscription</button>
          </router-link>
          
        </div>
        
        
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'


</script>

<style scoped lang="css">
</style>