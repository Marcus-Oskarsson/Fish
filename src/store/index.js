import { createStore } from 'vuex'

import catchedFishModule from './modules/catchedFish'
import populateFishModule from './modules/fish'
import storeModule from './modules/store'
import userModule from './modules/user'

export default createStore({
  modules: {
    catchedFish: catchedFishModule,
    populateFish: populateFishModule,
    store: storeModule,
    user: userModule,
    strict: process.env.NODE_ENV !== 'production'
  }
})
