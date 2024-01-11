<template>
  <div class="app">
    <main>
      <!-- <SearchInput
        v-model="inputText"
        @search="filterItemsBySearchText"
      ></SearchInput> -->
      <!-- <input type="text" v-model="inputText" />
      <button @click="filterItemsBySearchText">search</button> -->
      <div class="input-wrapper flex">
        <input
          type="text"
          class="search-input"
          v-model="inputText"
          @keyup.enter.exact="filterItemsBySearchText"
        />
        <button class="btn" type="button" @click="filterItemsBySearchText">
          search
        </button>
      </div>
      <ul>
        <li
          class="item flex"
          v-for="product in products"
          :key="product.id"
          @click="moveToDetailPage(product.id)"
        >
          <!-- <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          /> -->
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="routeToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
useHead({
  title: "My App",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});

// import ProductList from "~/components/ProductList.vue";
// import SearchInput from "@/components/SearchInput.vue";
import { fetchProducts, fetchProductsByKeyword } from "@/api/index";

export default {
  // components: { ProductList },
  // components: { SearchInput },
  data() {
    return {
      products: [],
      inputText: "",
    };
  },
  created() {
    const { data, error } = useFetch(
      "https://my-json-server.typicode.com/kyung89/nuxt-shopping-api/products"
    );
    // console.log(data);
    this.products = data;
  },
  methods: {
    async filterItemsBySearchText() {
      const { data } = await fetchProductsByKeyword(this.inputText);
      console.log(this.inputText);
      console.log(data);
      this.products = data;
    },
    moveToDetailPage(id) {
      console.log(id);
      this.$router.push(`detail/${id}`);
    },
    routeToCartPage() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}

.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
