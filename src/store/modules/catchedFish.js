export default {
  getters: {
    // Som computed?
    lastTenFish(state) {
      return state.catchedFish.slice(state.catchedFish.length - 10)
    }
  },
  mutations: {
    addFish(state, fish) {
      state.catchedFish = [...state.catchedFish, fish]
    },
    removeFish(state, id) {
      state.catchedFish.filter((fish) => fish.id !== id)
    }
  },
  namespaced: true,
  state: {
    catchedFish: []
  }
}
