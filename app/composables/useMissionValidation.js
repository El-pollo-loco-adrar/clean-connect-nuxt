
//! Sécurité du formulaire
export function useMissionValidation(formData){
  const errors = ref({});//Pour stocker les erreurs
  const postalRegex = /^\d{5}$/;//Regex code postal

  const validateForm = () => {
    errors.value = {} //Réinitialise les erreurs

    //1 Validation du code postal
    if (!postalRegex.test(formData.postalMission.value)){
      errors.value.postalMission = 'Le code postal doit contenir uniquement 5 chiffres.'
    }

    //2 Validation heure de fin > heure de début
    const startHour = formData.hourStartMission.value;
    const endHour = formData.hourEndMission.value;
    const date = formData.dateMission.value;

    if (startHour && endHour && date) {
      const startDateTime = new Date(`${date}T${startHour}`);
      const endDateTime = new Date(`${date}T${endHour}`);

      if(endDateTime <= startDateTime){
        errors.value.hourEndMission = "L'heure de fin doit être strictement postérieur à l'heure de début. "
      }
    }

    //3 Validation de la date (doit être dans le futur)
    if (date){
      const today = new Date();
      today.setHours(0,0,0,0);
      const missionDate = new Date(date);

      if(missionDate <today){
        errors.value.dateMission = "La date est déjà passé."
      }
    }

    //4 Validation des sélections obligatoires
    //Milieu
    if(!formData.selectedMilieu.value){
      errors.value.selectedMilieu = "Veuillez sélectionner un milieu d'intervention."
    }

    //Techniques
    if(!formData.selectedTechniques.value || formData.selectedTechniques.value.length === 0){
      errors.value.selectedTechniques = "Veuillez sélectionner au moins une technique pour la mission."
    }
    //Salaire
    if(!formData.selectedSalary.value){
      errors.value.selectedSalary = "Veuillez sélectionner un niveau de salaire."
    }

    //Retourne vrai si errors est vide
    return Object.keys(errors.value).length === 0;
  }

  return{
    errors, validateForm
  };
}

