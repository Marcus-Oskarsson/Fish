import { createStore } from 'vuex'

// // importera moduler
import populateFishModule from './modules/fish'
import catchedFishModule from './modules/catchedFish'

export default createStore({
  modules: {
    // moduler
    populateFish: populateFishModule,
    catchedFish: catchedFishModule,
    // strict: true,
    strict: process.env.NODE_ENV !== 'production'
  }
})
