<template>
  <div>
    <div v-if="!product">Loading...</div>
    <div v-else class="container">
      <div class="main-panel">
        <!-- <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        /> -->
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createCartItem, fetchProductById } from "~/api";
import { useWebsiteStore } from "@/stores/test";
import { useNuxt3Store } from "@/stores/nuxt3";

export default {
  data() {
    return {
      product: {},
    };
  },
  mounted() {
    const route = useRoute();
    const id = route.params.id;
    const { data, error } = useFetch(`http://localhost:3000/products/${id}`);
    this.product = data;
  },
  methods: {
    async addToCart() {
      const temp = await createCartItem(this.product);
      // console.log(this.$store);
      // this.$store.commit("addItemToCart", this.product);
      // this.$router.push("/cart");

      const nuxt3 = useNuxt3Store();
      nuxt3.addItemToCart(this.product);
      this.$router.push("/cart");

      console.log("carts:");
      console.log(nuxt3.carts);

      // const website = useWebsiteStore();
      // await callOnce(website.fetch);
      // console.log("test:" + website.name);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
