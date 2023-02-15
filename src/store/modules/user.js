import { v4 as uuidv4 } from 'uuid';

export default {
  getters: {
    user(state) {
      return {
        name: state.name,
        id: state.id,
      };
    },
  },
  mutations: {
    addUser(state, name) {
      state.name = name;
      state.id = uuidv4();
    },
  },
  namespaced: true,
  state() {
    return {
      name: null,
      id: null,
    };
  },
};
