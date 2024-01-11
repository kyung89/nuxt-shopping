<template>
  <div>
    <div>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product }}
          <img :src="product.imageUrl" :alt="product.name" />
          <p>{{ product.name }}</p>
          <p>{{ product.price }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    // const response = await axios.get("http://localhost:3000/products");
    const { data, error } = useFetch(
      "https://my-json-server.typicode.com/kyung89/nuxt-shopping-api/products"
    );
    console.log(data);
    this.products = data.Map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }));
  },
};
</script>

<style lang="scss" scoped></style>
