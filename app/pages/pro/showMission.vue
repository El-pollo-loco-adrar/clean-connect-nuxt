<template>
  <div class="mt-8 border p-4 rounded w-3/4 mx-auto bg-gray-50" v-if="mission && Object.keys(mission).length > 0">
    <h2 class="text-2xl text-center font-bold mb-4">Récapitulatif de la mission</h2>
    <hr class="border-t-2 border-black m-8 mx-16" />

    <p class="mb-2"><strong class="underline">Titre :</strong> {{ mission.nameMission }}</p>
    <p class="mb-2"><strong class="underline">Description :</strong> {{ mission.descMission }}</p>
    <p class="mb-2"><strong class="underline">Date :</strong> {{ mission.dateMission }}</p>
    <p class="mb-2"><strong class="underline">Heure de début :</strong> {{ mission.hourStartMission }}</p>
    <p class="mb-2"><strong class="underline">Heure de fin :</strong> {{ mission.hourEndMission }}</p>
    <p class="mb-2"><strong class="underline">Lieu :</strong> {{ mission.placeMission }} - {{ mission.postalMission }} - {{ mission.cityMission }}</p>

    <p class="text-xl underline m-4">Compétences recherchées :</p>
    <p class="mb-2"><strong class="underline">Milieu :</strong> {{ mission.selectedMilieu }}</p>
    <p class="mb-2"><strong class="underline">Techniques :</strong> {{ mission.selectedTechniques?.join(', ') }}</p>
    <p class="mb-2"><strong class="underline">Salaire :</strong> {{ mission.selectedSalary }}</p>

    <p v-if="mission.isUrgent" class="text-red-600 font-bold mt-2">
      ⚡ Urgent !
    </p>
    <hr class="border-t-2 border-black m-8 mx-16" />

    <!--Coût-->
    <div>
      <p class="m-4"><span class="underline">Publier la mission :</span> 2 crédits</p>
      <p class="m-4" v-if="mission.isUrgent"><span class="underline">Publication urgente:</span> 1 crédit</p>
      <p class="m-4 text-2xl"><span class="underline">Coût total :</span> {{ totalCredits }} crédits</p>
    </div>

    <div class="flex flex-col m-8">
      <!-- Bouton retour -->
      <NuxtLink to="/pro/addMission" class="btn bg-[#F01212]/85 w-fit px-6 m-4 mx-auto text-white border-2 border-black rounded-4">
        Retour pour modifier
      </NuxtLink>
      <!-- Bouton Publier-->
      <button @click="publierMission"
        class="btn bg-[#2563EB]/79 w-fit px-6 m-4 mx-auto text-white border-2 border-black rounded-4"
      >
        Publier la mission
      </button>
    </div>
  </div>

  <div v-else class="mt-8 text-center text-gray-600">
    <p>Aucune mission n’a encore été publiée.</p>
  </div>
</template>

<script setup >
import { useMissionStore } from '~/stores/mission';

const router = useRouter();
const missionStore = useMissionStore();
const mission = missionStore.missionData;

//Calcul du coût
const totalCredits = computed(() => {
  let total = 2; //coût publication de base
  if (mission.isUrgent){
    total +=1; //ajout du coût urgent
  }
    return total
});

// Appel de la fonction de publication
const publierMission = () => {
  missionStore.addMission()
  router.push('/pro/myMissions')
}

</script>

<style scoped lang="css">
</style>