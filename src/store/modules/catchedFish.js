export default {
  getters: {
    // Som computed?
    lastTenFish(state) {
      if (state.catchedFish.length > 5) {
        return state.catchedFish.slice(state.catchedFish.length - 5)
      }
      return state.catchedFish
    }
  },
  mutations: {
    addFish(state, fish) {
      console.log('state before', state.catchedFish)
      state.catchedFish = [...new Set([...state.catchedFish, fish])]
      console.log('state after', state.catchedFish)
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
