<template>
  <div class="flex flex-col gap-4">
    <input
      v-model="postal"
      type="text"
      maxlength="5"
      placeholder="Code postal"
      class="border p-2 rounded"
      @input="fetchCommunes"
    />

    <ul v-if="communes.length" class="border rounded p-2">
      <li
        v-for="commune in communes"
        :key="commune.codePostal + commune.nomCommune"
        @click="selectCommune(commune)"
        class="cursor-pointer hover:bg-gray-200 p-1"
      >
        {{ commune.nomCommune }} ({{ commune.codePostal }})
      </li>
    </ul>

    <input
      v-model="city"
      type="text"
      placeholder="Ville"
      class="border p-2 rounded"
    />
  </div>
</template>

<script setup>

const postal = ref('')
const city = ref('')
const communes = ref([])

const fetchCommunes = async () => {
  if (postal.value.length !== 5) {
    communes.value = []
    return
  }

  try {
    const response = await $fetch(`/api/communes/${postal.value}`)
    communes.value = response || []
  } catch (error) {
    console.error('Erreur API interne :', error)
    communes.value = []
  }
}

const selectCommune = (commune) => {
  city.value = commune.nomCommune
  communes.value = []
}
</script>

<style scoped lang="css">
</style>