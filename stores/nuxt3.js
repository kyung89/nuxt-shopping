// export const state = () => ({
//   carts: [],
// });

// export const mutations = {
//   addItemToCart(state, item) {
//     state.carts.push(item);
//   },
//   setCarts(state, carts) {
//     state.carts = carts;
//   },
// };

// export const actions = {
//   async fetchCarts(context) {
//     const { data } = await fetchCartItems();
//     const items = data.map((item) => ({
//       ...item,
//       imageUrl: `${item.imageUrl}?random=${Math.random()}`,
//     }));
//     context.commit("setCarts", items);
//   },
// };

import { fetchCartItems } from "~/api";
import { defineStore } from "pinia";

export const useNuxt3Store = defineStore("websiteStore", {
  state: () => ({
    carts: [],
  }),
  actions: {
    addItemToCart(item) {
      this.carts.push(item);
    },
    setCarts(carts) {
      this.carts = carts;
    },
    async fetchCarts() {
      const { data } = await fetchCartItems();
      this.carts = data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }));
      // this.setCarts(items);
    },
  },
});
