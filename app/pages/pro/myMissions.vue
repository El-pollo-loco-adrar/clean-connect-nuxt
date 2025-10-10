<template>
  <div class="flex items-center justify-center">
    <div class="card w-full max-w-sm bg-[#F3F4F6] shadow-xl border pb-12">
      <div class="mt-8 flex flex-col items-center">
        <h1 class="font-semibold text-2xl mb-4">Mes missions</h1>

        <div v-if="missions.length" class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="mission in missions"
            :key="mission.id" 
            class="card border p-4 shadow-md bg-white" :class="mission.isUrgent ? 'border-4 border-red-500' : 'bg-white'">

            <h2 class="text-xl text-center font-semibold mb-2">{{ mission.nameMission }}</h2>
            <p><span class="font-semibold">Description :</span> {{ mission.descMission}}</p>
            <p><span class="font-semibold">Date :</span> {{ mission.dateMission }}</p>
            <p><span class="font-semibold">Horaire :</span> {{ mission.hourStartMission }} - {{ mission.hourEndMission }}</p>
            <p><span class="font-semibold">Lieu :</span> {{ mission.cityMission }}</p>

            <p><span class="font-semibold">Milieu :</span> {{ mission.selectedMilieu }}</p>
            <p><span class="font-semibold">Techniques :</span> {{ mission.selectedTechniques?.join(', ') }}</p>
            <p><span class="font-semibold">Salaire :</span> {{ mission.selectedSalary }}</p>
            
            <p v-if="mission.isUrgent" class="text-red-600 font-semibold mt-2 text-center">⚡ Mission urgente</p>
          </div>
        </div>

        <p v-else class="text-center text-gray-500 mt-10">Aucune mission publiée pour le moment.</p>
      </div>
      <!--Bouton retour accueil-->
      <button class="btn bg-[#2563EB]/79 w-fit px-6 mx-auto text-white border-2 border-black rounded-lg mt-8"> <NuxtLink to="/pro/HomePro">Retour à l'accueil</NuxtLink></button>
    </div>
  </div>
</template>

<script setup>
import { useMissionStore } from '~/stores/mission';

const missionStore = useMissionStore();
const missions = missionStore.missions;


// ✅ Liste factice pour le moment (sera remplacée par des données Firestore / API plus tard)
// const missions = ref([
//   {
//     id: 1,
//     name: "Nettoyage de bureaux",
//     city: "Toulouse",
//     date: "2025-10-15",
//     techniques: ["Sol", "Vitres"],
//     credits: 2,
//     isUrgent: false
//   },
//   {
//     id: 2,
//     name: "Entretien pharmacie",
//     city: "Blagnac",
//     date: "2025-10-20",
//     techniques: ["Sanitaire", "Bureau"],
//     credits: 3,
//     isUrgent: true
//   }
// ])
</script>

<style scoped lang="css">
</style>