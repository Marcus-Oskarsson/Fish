import moment from 'moment'

export default {
  getters: {
    // Som computed?
    lastTenFish(state) {
      if (state.catchedFish.length > 5) {
        return state.catchedFish.slice(state.catchedFish.length - 5)
      }
      return state.catchedFish
    },
    catchedFish(state) {
      function byName(a, b) {
        if (a.name > b.name) return 1
        if (a.name > b.name) return -1
        return 0
      }
      return state.catchedFish.sort(byName)
    }
  },
  mutations: {
    addFish(state, fish) {
      const oldFish = state.catchedFish.find(
        (oldFish) => oldFish.id === fish.id
      )
      const catchedTime = moment()
      if (oldFish) {
        oldFish.catchedTime = catchedTime
        oldFish.amount += 1
      } else {
        fish.catchedTime = catchedTime
        fish.amount = 1
        state.catchedFish = [...state.catchedFish, fish]
      }
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
