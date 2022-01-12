import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: 'light',
    language: '',
    color: {
      primary: 'amber',
      secondary: '#fff',
    },
    colors: ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
