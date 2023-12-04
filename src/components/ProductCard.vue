<!-- src/components/ProductCard.vue -->
<template>
  <div :class="{ 'product-card': isAvailable, 'unavailable-product': !isAvailable }">
    <div v-if="isAvailable" class="product-image">
      <img :src="product.image" alt="Product Image" />
    </div>
    <div class="product-details">
      <h2 :style="titleProduct">{{ product.title }}</h2>
      <div class="kating" v-if="isAvailable">
        <p class="category">{{ product.category }}</p>
        <div class="rating">
          <p>{{ product.rating.rate }}/{{ product.rating.count }}</p>
        </div>
      </div>
      <hr v-if="isAvailable" />
      <div v-if="isAvailable" class="description">
        <p>{{ product.description }}</p>
      </div>
      <hr v-if="isAvailable" />
      <p v-if="isAvailable" class="price" :style="priceProduct">${{ product.price }}</p>
      <div class="buttons">
        <button v-if="isAvailable" @click="buyProduct" :style="buyButtonStyle">Buy Now</button>
        <button @click="nextProduct" :style="nextButtonStyle">Next Product</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    isMenClothingPage: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isAvailable() {
      return this.product.title !== "Unavailable Product";
    },
    titleProduct() {
      return this.isMenClothingPage ? { color: "#002772" } : { color: "#720060" };
    },
    priceProduct() {
      return this.isMenClothingPage ? { color: "#002772" } : { color: "#720060" };
    },
    buyButtonStyle() {
      return this.isMenClothingPage ? { backgroundColor: "#002772", color: "white", fontWeight: "bold" } : { backgroundColor: "#720060", color: "white", fontWeight: "bold" };
    },
    nextButtonStyle() {
      return this.isMenClothingPage ? { backgroundColor: "white", color: "#002772", fontWeight: "bold", border: "2px solid #002772" } : { backgroundColor: "white", color: "#720060", fontWeight: "bold", border: "2px solid #720060" };
    },
  },
  methods: {
    buyProduct() {
      console.log(`Product ${this.product.title} purchased!`);
    },
    nextProduct() {
      console.log("Next product clicked!");
      this.$emit("next-product");
    },
  },
};
</script>

<style scoped>
.unavailable-product {
  background-image: url("@/assets/sad-face.png");
  background-size: cover;
  background-position: center;
  box-shadow: 2px 2px 2px 2px grey;
  width: 1034px;
  height: 580px;
  margin: auto;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-card {
  display: flex;
  box-shadow: 2px 2px 2px 2px grey;
  width: 1034px;
  height: 580px;
  margin: auto;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
}

.product-image img {
  width: 305px;
  height: 500px;
  object-fit: contain;
  margin: 36px;
}

.product-details {
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 65px;
  text-align: center;
}

.product-details h2 {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 28px;
  text-align: left;
}

.description p {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 15px;
  text-align: left;
}

.kating {
  display: flex;
  justify-content: space-between;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
}

.price {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  text-align: center;
  font-size: 20px;
  text-align: left;
}

.category {
  font-style: italic;
}

.buttons {
  margin-top: 10px;
}

.buttons button {
  width: 259px;
  height: 42px;
  border-radius: 4px;
  margin-right: 10px;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.buttons button:hover {
  background-color: darkgray;
  color: black;
}
</style>
