//! Sécurité du formulaire profil particulier
export function useProfileValidation() {
    const errors = ref({});
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,30}$/;
    const phoneRegex = /^(\+33|0)[1-9](\d{2}){4}$/; // Format FR : +33 ou 0 suivi de 9 chiffres
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/ // 8 caractères min, 1 maj, 1 min, 1 chiffre

    // 1 Validation du nom
    const validateName = (value) => {
        const name = formData.lastName.value
        const trimmed = name ? name.trim() : '';
        if(!trimmed){
            errors.value.nameMission = "Le nom est requis.";
            }else if(trimmedName.length < 2){
                errors.value.nameMission = "Le nom doit contenir au moins 2 caractères.";
            }else if(!nameRegex.test(trimmedName)){
                errors.value.nameMission = "Caractères invalides détectés.";
            }else{
                delete errors.value.nameMission
            }
        }
}
