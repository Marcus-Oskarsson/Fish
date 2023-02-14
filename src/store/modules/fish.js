import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

export default {
  actions: {
    populatePond({ commit }) {
      axios('https://www.fishwatch.gov/api/species').then((res) => {
        const extraFishInfo = res.data.map((fish) => {
          return {
            ...fish,
            id: uuidv4(),
            points:
              Math.round(
                parseFloat(fish['Protein']) * parseFloat(fish['Fat, Total'])
              ) || 10
          }
        })
        commit('addFishToPond', extraFishInfo)
      })
    }
  },
  getters: {
    fishesObj(state) {
      return state.fishes.map((fish) => {
        return {
          biology: fish.Biology,
          id: fish.id,
          image: {
            src: fish['Species Illustration Photo'].src,
            alt: fish['Species Illustration Photo'].alt
          },
          name: fish['Species Name'],
          points: fish.points,
          price: Math.round(fish.points * 2.2)
        }
      })
    },
    getFishById(state) {
      return function (id) {
        return state.fishes.find((fish) => fish.id === id)
      }
    }
  },
  mutations: {
    addFishToPond(state, fishes) {
      state.fishes = fishes
    }
  },
  namespaced: true,
  state() {
    return {
      fishes: []
    }
  }
}
