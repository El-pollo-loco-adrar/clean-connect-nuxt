// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // Option 1: Régler sur 'class' pour ne l'activer que si vous mettez manuellement la classe "dark"
  // Ceci est la meilleure solution de compromis
    darkMode: 'class', 

    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}