import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://my-json-server.typicode.com/kyung89/nuxt-shopping-api",
});

function fetchProducts() {
  return instance.get(`/products`);
}

function fetchProductById(id) {
  return instance.get(`/products/${id}`);
}

function fetchProductsByKeyword(keyword) {
  return instance.get(`/products`, {
    params: {
      name_like: keyword,
    },
  });
}

// carts
function fetchCartItems() {
  return instance.get("/carts");
}

function createCartItem(cartItem) {
  return instance.post("/carts", cartItem);
}

export {
  fetchProducts,
  fetchProductById,
  fetchProductsByKeyword,
  fetchCartItems,
  createCartItem,
};
