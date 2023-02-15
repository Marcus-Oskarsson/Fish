export default {
  mutations: {
    addFish(state, fish) {
      const fishInStore = state.selected.find(
        (storeFish) => storeFish.name === fish.name,
      );
      if (fishInStore) {
        fishInStore.selectedAmount += 1;
      } else {
        state.selected = [...state.selected, { ...fish, selectedAmount: 1 }];
      }
    },
    removeFish(state, fishId) {
      const fishInStore = state.selected.find((fish) => fish.id === fishId);
      if (fishInStore && fishInStore.selectedAmount > 1) {
        fishInStore.selectedAmount -= 1;
      } else {
        state.selected = state.selected.filter((fish) => fish.id !== fishId);
      }
    },
  },
  namespaced: true,
  state() {
    return {
      selected: [],
    };
  },
};
