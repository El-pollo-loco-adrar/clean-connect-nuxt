import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
    isAuthenticated: false,
    role: null,
    }),
    actions: {
        login(role) {
            this.isAuthenticated = true
            this.role = role
        },
        logout() {
        this.isAuthenticated = false
        this.role = null
        }
    }
})