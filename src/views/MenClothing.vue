<!-- src/views/MenClothing.vue -->
<template>
  <div>
    <skeleton-loader v-if="loading" />
    <product-card v-else :product="product" :is-men-clothing-page="true" @next-product="fetchNextProduct" @back-product="fetchPreviousProduct">
      <button v-if="product.title !== 'Unavailable Product'" @click="buyProduct" :style="buyButtonStyle">Buy</button>
    </product-card>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "@/components/ProductCard.vue";
import SkeletonLoader from "@/components/SkeletonLoader.vue";

export default {
  components: {
    ProductCard,
    SkeletonLoader,
  },
  data() {
    return {
      loading: true,
      product: {},
      currentIndex: 1,
      maxIndex: 4,
      placeholderImage: "your_placeholder_image_url",
    };
  },
  methods: {
    fetchData() {
      this.loading = true;

      if (this.currentIndex <= this.maxIndex) {
        const apiUrl = `https://fakestoreapi.com/products/${this.currentIndex}`;
        axios
          .get(apiUrl)
          .then((response) => {
            const productData = response.data;

            if (productData.category.toLowerCase() === "men's clothing") {
              this.product = productData;
            } else {
              this.product = {
                title: "Unavailable Product",
                description: "This product is not available.",
                category: "men's clothing",
                image: this.placeholderImage,
                price: 0,
                rating: { rate: 0, count: 0 },
              };
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    fetchNextProduct() {
      this.currentIndex += 1;

      if (this.currentIndex > this.maxIndex) {
        this.product = {
          title: "Unavailable Product",
          description: "This product is not available.",
          category: "men's clothing",
          image: require("@/assets/sad-face.png"),
          price: 0,
          rating: { rate: 0, count: 0 },
        };
      } else {
        this.fetchData();
      }
    },
    fetchPreviousProduct() {
      this.currentIndex -= 1;

      if (this.currentIndex < 1) {
        this.currentIndex = 1;
      }

      this.fetchData();
    },
    buyProduct() {
      console.log("Buy button clicked for product:", this.product);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped></style>
