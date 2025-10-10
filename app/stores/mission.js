import { defineStore } from "pinia";

export const useMissionStore = defineStore('mission', () => {
    const missionData = ref({});
    const missions = ref([]);

    // Met à jour la mission en cours (showMission.vue)
    const setMissionData = (data) => {
        missionData.value = data;
    }

    // Ajoute la mission publiée (myMissions.vue)
    const addMission = () => {
        if(Object.keys(missionData.value).length > 0) {
            missions.value.push({ ...missionData.value})
        }
    }
    return {missionData, missions, setMissionData, addMission};
})