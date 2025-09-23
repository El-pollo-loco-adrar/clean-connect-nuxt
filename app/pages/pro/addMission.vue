<template>
  <div class="flex items-center justify-center">
    <div class="card w-full max-w-sm bg-[#F3F4F6] shadow-xl border pb-12">
      <h1 class="text-2xl font-bold text-center mt-8">Créer une mission</h1>
      <hr class="border-t-2 border-black m-8 mx-16" />

      <form @submit.prevent="handleSubmit" action="" method="post" class="flex flex-col mb-4 w-full">

        <!--Titre-->
        <label class="text-center text-xl" for="nameMission">Titre de la mission</label>
        <input 
          v-model="nameMission" 
          class="input border rounded p-2 mt-2 w-64 mx-auto" 
          type="text" 
          id="nameMission" 
          name="nameMission" 
          required
          placeholder="ex: Nettoyage banque"
        >

        <!--Description-->
        <label class="text-center text-xl mt-4" for="descMission">Description :</label>
        <textarea 
          v-model="descMission"
          name="descMission"
          class="textarea textarea-md border rounded p-2 mt-2 w-64 mx-auto" 
          placeholder="Infos précises: tâches, environnement, produits à disposition"  
          required        
        >
        </textarea>
        <hr class="border-t-2 border-black m-8 mx-16" />

        <!--Date-->
        <label class="flex items-center justify-center text-xl mb-4 gap-2" for="dateMission">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar">
            <path d="M8 2v4"/>
            <path d="M16 2v4"/>
            <rect width="18" height="18" x="3" y="4" rx="2"/>
            <path d="M3 10h18"/>
          </svg>
          Date :
        </label>
        <input 
          v-model="dateMission"
          type="date" class="input w-64 mx-auto" id="dateMission" name="dateMission" required
        />

        <!--Heure de début-->
        <label class="flex items-center justify-center text-xl m-4 gap-2" for="hourStartMission">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock3-icon lucide-clock-3">
            <path d="M12 6v6h4"/>
            <circle cx="12" cy="12" r="10"/>
          </svg>
          Heure de début:
        </label>
        <input 
          v-model="hourStartMission"
          type="time" class="input w-64 mx-auto" id="hourStartMission" name="hourStartMission" required
        />

        <!-- Heure de fin -->
        <label class="flex items-center justify-center text-xl m-4 gap-2" for="hourEndMission">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock9-icon lucide-clock-9">
            <path d="M12 6v6H8"/>
            <circle cx="12" cy="12" r="10"/>
          </svg>
          Heure de fin:
        </label>
        <input 
          v-model="hourEndMission"
          type="time" class="input w-64 mx-auto" id="hourEndMission" name="hourEndMission" required 
        />
        <hr class="border-t-2 border-black m-8 mx-16" />

        <!-- Adresse -->
        <label class="flex items-center justify-center text-xl mb-4 gap-2" for="placeMission">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Lieu :
        </label>
        <input v-model="placeMission" 
          type="text" class="input w-64 mx-auto" id="placeMission" name="placeMission" required placeholder="1 rue de la République"
          />

          <!-- Code postal + Ville -->
        <div class="flex justify-center gap-2 mt-4">
          <input 
            v-model="postalMission" 
            type="text" 
            maxlength="5" 
            class="input w-28" 
            placeholder="Code postal"
          />
          <input 
            v-model="cityMission" 
            type="text" 
            class="input w-40" 
            placeholder="Ville"
          />
        </div>
        <hr class="border-t-2 border-black m-8 mx-16" />

        <p class="flex items-center justify-center text-2xl gap-2 font-semibold" for="hourEndMission">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-biceps-flexed-icon lucide-biceps-flexed">
            <path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"/>
            <path d="M15 14a5 5 0 0 0-7.584 2"/>
            <path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"/>
          </svg>
          Compétences recherchées :
        </p>
        
        <!-- Milieu -->
        <div class="flex flex-col items-center gap-4 my-4">
          <p class="text-xl">Choisissez un milieu d'intervention :</p>

          <div class="flex flex-col gap-3">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="milieu" class="radio" value="Tertiaire" v-model="selectedMilieu" />
              <span>Tertiaire</span>
            </label>

            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="milieu" class="radio" value="Pharmaceutique" v-model="selectedMilieu" />
              <span>Pharmaceutique</span>
            </label>

            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="milieu" class="radio" value="Hospitalier" v-model="selectedMilieu" />
              <span>Hospitalier</span>
            </label>

            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="milieu" class="radio" value="Industriel" v-model="selectedMilieu" />
              <span>Industriel</span>
            </label>

            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="milieu" class="radio" value="Scolaire" v-model="selectedMilieu" />
              <span>Scolaire</span>
            </label>

            <label class="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="milieu" class="radio" value="Agroalimentaire" v-model="selectedMilieu" />
              <span>Agroalimentaire</span>
            </label>
          </div>
        </div>

        <!-- Affichage du choix du milieu -->
        <p v-if="selectedMilieu" class="mb-4 text-center text-lg font-semibold">
          Milieu choisi : <span class="text-blue-600">{{ selectedMilieu }}</span>
        </p>

        <!--Techniques-->
        <div class="dropdown dropdown-bottom dropdown-center flex items-center justify-center text-xl gap-2">
          <!-- Bouton -->
          <div tabindex="0" role="button" class="btn m-1">
            Techniques...
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-chevrons-down-icon lucide-chevrons-down ml-2">
              <path d="m7 6 5 5 5-5"/>
              <path d="m7 13 5 5 5-5"/>
            </svg>
          </div>

          <!-- Contenu du dropdown -->
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-64 p-2 shadow-sm">
            <li>
              <span class="font-semibold">Entretien courant</span>
              <ul class="ml-4 mt-2">
                <li v-for="tech in entretienCourant" :key="tech">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" v-model="selectedTechniques" :value="tech" />
                    {{ tech }}
                  </label>
                </li>
              </ul>
            </li>

            <li>
              <span class="font-semibold">Entretien mécanisé</span>
              <ul class="ml-4 mt-2">
                <li v-for="tech in entretienMecanise" :key="tech">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" v-model="selectedTechniques" :value="tech" />
                    {{ tech }}
                  </label>
                </li>
              </ul>
            </li>

            <li>
              <span class="font-semibold">Remise en état</span>
              <ul class="ml-4 mt-2">
                <li v-for="tech in remiseEnEtat" :key="tech">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" v-model="selectedTechniques" :value="tech" />
                    {{ tech }}
                  </label>
                </li>
              </ul>
            </li>

            <li>
              <span class="font-semibold">Vitrerie</span>
              <ul class="ml-4 mt-2">
                <li v-for="tech in vitrerie" :key="tech">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" v-model="selectedTechniques" :value="tech" />
                    {{ tech }}
                  </label>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Affichage des choix techniques -->
        <div v-if="selectedTechniques.length" class="mt-4 text-center">
          <p class="font-semibold">Techniques sélectionnées :</p>
          <ul class="mt-2">
            <li v-for="tech in selectedTechniques" :key="tech" class="inline-block bg-blue-100 text-blue-700 px-2 py-1 m-1 rounded">
              {{ tech }}
            </li>
          </ul>
        </div>

        <!--Salaire-->
        <p class="flex items-center justify-center text-xl m-4 gap-2" for="hourEndMission">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-euro-icon lucide-badge-euro">
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
            <path d="M7 12h5"/>
            <path d="M15 9.4a4 4 0 1 0 0 5.2"/>
          </svg>
          Salaire :
        </p>
        <!--Dropdown salaire-->
        <div class="dropdown dropdown-bottom dropdown-center flex items-center justify-center text-xl gap-2">
          <!-- Bouton -->
          <div tabindex="0" role="button" class="btn m-1">
            Salaire 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-chevrons-down-icon lucide-chevrons-down ml-2">
              <path d="m7 6 5 5 5-5"/>
              <path d="m7 13 5 5 5-5"/>
            </svg>
          </div>

          <!-- Contenu du dropdown -->
          <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-64 p-2 shadow-sm">
            <li>
              <span class="font-semibold">Niveau ATQS</span>
              <ul class="ml-4 mt-2">
                <li v-for="salary in atqs" :key="salary">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="salaire" class="radio" v-model="selectedSalary" :value="`ATQS - Niveau ${salary}`" />
                    {{ salary }}
                  </label>
                </li>
              </ul>
            </li>

            <li>
              <span class="font-semibold">Niveau AQS</span>
              <ul class="ml-4 mt-2">
                <li v-for="salary in aqs" :key="salary">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="salaire" class="radio" v-model="selectedSalary" :value="`AQS - Niveau ${salary}`" />
                    {{ salary }}
                  </label>
                </li>
              </ul>
            </li>

            <li>
              <span class="font-semibold">Niveau AS</span>
              <ul class="ml-4 mt-2">
                <li v-for="salary in as" :key="salary">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="salaire" class="radio" v-model="selectedSalary" :value="`AS - Niveau ${salary}`" />
                    {{ salary }}
                  </label>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!--Affichage du salaire-->
        <p v-if="selectedSalary" class="mb-4 text-center text-lg font-semibold">
          <span>Niveau de rémunération choisi :</span>
          <span class="text-blue-600 block">{{ selectedSalary }}</span>
        </p>
        <hr class="border-t-2 border-black m-8 mx-16" />

        <!--Urgent-->
        <div class="flex flex-col items-center gap-4">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" name="urgent" class="checkbox" value="oui" v-model="isUrgent" />
            <span class="text-red-500 font-semibold">C'est urgent</span>
          </label>
        </div>

        <button type="submit" class="btn bg-[#2563EB]/79 w-fit px-6 mt-8 mx-auto text-white border-2 border-black rounded-4">Publier la mission</button>

      </form>
    </div>

    <!--Récap de la mission-->
    <div v-if="showRecap" class="mt-8 border p-4 rounded w-3/4 mx-auto bg-gray-50" >
      <h2 class="text-2xl font-bold mb-2">Récapitulatif de la mission</h2>
      <p class="mb-4"><strong class="underline">Titre :</strong> {{ nameMission }}</p>
      <p class="mb-4"><strong class="underline">Date :</strong> {{ dateMission }}</p>
      <p class="mb-4"><strong class="underline">Heure de début :</strong> {{ hourStartMission }}</p>
      <p class="mb-4"><strong class="underline">Heure de fin :</strong> {{ hourEndMission }}</p>
      <p class="mb-4"><strong class="underline">Lieux :</strong> {{ placeMission }} - {{ postalMission }} - {{ cityMission }}</p>
      <p class="mb-4"><strong class="underline">Description :</strong> {{ descMission }}</p>
      <p class="text-xl underline">Compétence recherchées :</p>
      <p class="mb-4"><strong class="underline">Milieu :</strong> {{ selectedMilieu }}</p>
      <p class="mb-4"><strong class="underline">Techniques :</strong> {{ selectedTechniques.join(', ') }}</p>
      <p class="mb-4"><strong class="underline">Salaire par heure :</strong> {{ selectedSalary }}</p>
      <p v-if="isUrgent">
        <strong class="underline">Urgent :</strong> oui</p>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'

const nameMission = ref('')
const descMission = ref('')
const dateMission = ref('')
const hourStartMission = ref('')
const hourEndMission = ref('')
const placeMission = ref('')
const postalMission = ref('')
const cityMission = ref('')
const selectedMilieu = ref('')

const selectedTechniques = ref([])
  const entretienCourant = ['Sanitaire', 'Bureau', 'Sol', 'Vitres']
  const entretienMecanise = ['Spray', 'Lustrage', 'Lavage Mécanisé']
  const remiseEnEtat = ['Décapage', 'Shampoing moquette']
  const vitrerie = ['Vitres en hauteur (à modifier !!!!)']

  const techDropdown = ref(null)
  onClickOutside(techDropdown, () =>{
    if (techDropdown.value) {
      techDropdown.value.open = false
    }
  })
const selectedSalary = ref('')
  const atqs = ['3 - 14.79€', "2 - 13.76€", "1 - 13.03€"]
  const aqs = ['3 - 12.78€', '2 - 12.67€', '1 - 12.56€']
  const as = ['ASCS - 12.50€', 'ASC - 12.43€', 'ASP - 12.38€']

const isUrgent = ref(null)

const showRecap = ref(null)
const handleSubmit = () => {
  showRecap.value = true
  window;scrollTo({top: 0, behavior: 'smooth'})
}
</script>

<style scoped lang="css">
</style>