import { createStore } from 'vuex'

// // importera moduler
import catchedFishModule from './modules/catchedFish'
import populateFishModule from './modules/fish'
import userModule from './modules/user'

export default createStore({
  modules: {
    // moduler
    populateFish: populateFishModule,
    catchedFish: catchedFishModule,
    user: userModule,
    // strict: true,
    strict: process.env.NODE_ENV !== 'production'
  }
})
