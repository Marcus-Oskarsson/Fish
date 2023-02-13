import moment from 'moment'

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
      const catchedTime = moment()
      fish.catchedTime = catchedTime
      state.catchedFish = [...new Set([...state.catchedFish, fish])]
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
