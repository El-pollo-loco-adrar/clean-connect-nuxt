//! Sécurité du formulaire d'ajout de mission
export function useMissionValidation(formData){
  const errors = ref({});//Pour stocker les erreurs
  const nameRegex = /^[a-zA-Z0-9\s-éèêëàâäôöûüç,.'#+]{3,}$/; //Regex titre
  const descRegex = /^[a-zA-Z0-9\s-éèêëàâäôöûüç,.'"!?()&%$€/\n#+*]{10,}$/; //Regex description
  const placeRegex = /^[a-zA-Z0-9\s-éèêëàâäôöûüç,.'"!?()&/°#+*]{5,}$/; // Regex Adresse sécurisée
  const postalRegex = /^\d{5}$/;//Regex code postal
  const cityRegex = /^[a-zA-Z0-9\s-éèêëàâäôöûüç,.'#+]{3,}$/; //Regex ville

    //1 Validation du nom
    const validateName = () => {
      const name = formData.nameMission.value;
      const trimmedName = name ? name.trim() : '';// Supprime les espaces en début/fin
      if(!trimmedName){
        errors.value.nameMission = "Le titre de la mission est requis.";
      }else if(trimmedName.length < 3){
        errors.value.nameMission = "Le titre doit contenir au moins 3 caractères.";
      }else if(!nameRegex.test(trimmedName)){
        errors.value.nameMission = "Caractères invalides détectés.";
      }else{
        delete errors.value.nameMission
      }
    };

    //2 Validation de la description
    const validateDesc = () => {
      const desc = formData.descMission.value;
      const trimmedDesc = desc ? desc.trim() : '';// Supprime les espaces en début/fin
      if(!trimmedDesc){
        errors.value.descMission = "La description est requise.";
      }else if(trimmedDesc.length < 10){
        errors.value.descMission = "La description doit contenir au moins 10 caractères.";
      }else if(!descRegex.test(trimmedDesc)){
        errors.value.descMission = "Caractères invalides détectés.";
      }else{
        delete errors.value.descMission;
      }
    }

    //3 Validation de la date (doit être dans le futur)
    const validateDate = () =>{
      const date = formData.dateMission.value;
      if (date){
        const today = new Date();
        today.setHours(0,0,0,0);
        const missionDate = new Date(date);

        if(missionDate < today){
          errors.value.dateMission = "La date est déjà passé."
        }else{
          delete errors.value.dateMission;
        }
      }else{
        delete errors.value.dateMission;
      }
    };
    
    //4 Validation heure de fin > heure de début
    const validateHour = () => {
      const startHour = formData.hourStartMission.value;
      const endHour = formData.hourEndMission.value;
      const date = formData.dateMission.value;

      if (startHour && endHour && date) {
        const startDateTime = new Date(`${date}T${startHour}`);
        const endDateTime = new Date(`${date}T${endHour}`);

        if(endDateTime <= startDateTime){
          errors.value.hourEndMission = "L'heure de fin ne peut pas être inférieur à l'heure de début. "
        }else{
          delete errors.value.hourEndMission;
        }
      }else{
        delete errors.value.hourEndMission;
      }
    }

    //5 Validation de l'adresse
    const validatePlace = () => {
      const place = formData.placeMission.value;
      const trimmedPlace = place ? place.trim() : '';
      if(!trimmedPlace){
        errors.value.placeMission = "L'adresse est requise.";
      }else if (trimmedPlace.length < 5){
        errors.value.placeMission = "L'adresse doit comporter 5 caractères.";
      }else if(!placeRegex.test(trimmedPlace)){
        errors.value.placeMission = "Caractères invalides détectés.";
      }else{
        delete errors.value.placeMission
      }
    };

    //6 Validation du code postal
    const validatePostal = () =>{
      if (!postalRegex.test(formData.postalMission.value)){
        errors.value.postalMission = 'Le code postal doit contenir uniquement 5 chiffres.'
      }else{
        delete errors.value.postalMission
      }
    };   

    //7 Validation de la ville
    const validateCity = () => {
      const city = formData.cityMission.value;
      const trimmedCity = city ? city.trim() : '';
      if(!trimmedCity){
        errors.value.cityMission = "La ville est requise.";
      }else if(trimmedCity.length < 3){
        errors.value.cityMission = "Le ville doit contenir au moins 3 caractères.";
      }else if(!cityRegex.test(trimmedCity)){
        errors.value.cityMission = "Caractères invalides détectés.";
      }else{
        delete errors.value.cityMission
      }
    };

    //8 Validation des sélections obligatoires
      //?Milieu
    const validateMilieu = () =>{
      if(!formData.selectedMilieu.value){
        errors.value.selectedMilieu = "Veuillez sélectionner un milieu d'intervention."
      }else{
        delete errors.value.selectedMilieu
      }
    }

        //?Techniques
    const validateTechniques = () => {
      if(!formData.selectedTechniques.value || formData.selectedTechniques.value.length === 0){
        errors.value.selectedTechniques = "Veuillez sélectionner au moins une technique pour la mission."
      }else{
        delete errors.value.selectedTechniques
      }
    }

    //?Salaire
    const validateSalary = () => {
      if(!formData.selectedSalary.value){
        errors.value.selectedSalary = "Veuillez sélectionner un niveau de salaire."
      }else{
        delete errors.value.selectedSalary
      }
    }
  const validateForm = () => {
    validateName();
    validateDesc();
    validatePlace();
    validatePostal();
    validateCity();
    validateDate();
    validateHour();
    validateMilieu();
    validateTechniques();
    validateSalary();
    
    //Retourne vrai si errors est vide
    return Object.keys(errors.value).length === 0;
  }

  return{
    errors, 
    validateName,
    validateDesc,
    validateForm,
    validatePlace,
    validatePostal,
    validateCity,
    validateDate,
    validateHour,
    validateMilieu,
    validateTechniques,
    validateSalary
  };
}

