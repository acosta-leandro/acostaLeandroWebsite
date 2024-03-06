// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,

  modules: ["nuxt-quasar-ui"],
  quasar: {
    plugins: [
      "BottomSheet",
      "Dialog",
      "Loading",
      "LoadingBar",
      "Notify",
      "Dark",
    ],
    extras: {
      font: "roboto-font",
      fontIcons: ['fontawesome-v6'],
    },
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  },
});
