import { defineStore } from "pinia";

export const useMissionStore = defineStore('mission', () => {
    const missionData = ref({});
    const setMissionData = (data) => {
        missionData.value = data;
    }
    return {missionData, setMissionData};
})