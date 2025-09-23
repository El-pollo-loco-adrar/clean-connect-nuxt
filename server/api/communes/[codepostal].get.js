export default defineEventHandler(async (event) => {
    const { codePostal } = event.context.params

    try {
        const response = await $fetch(`https://geo.api.gouv.fr/communes?codePostal=${codePostal}`)
        return response
    } catch (err) {
        return { error: err.message }
    }
})