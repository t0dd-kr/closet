import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: 'light',
    language: '',
    setting: {
      color: {
        primary: 'rose',
        secondary: 'amber',
      },
      radioType: 'OUTLINE',
      rounded: '',
      font: '',
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
