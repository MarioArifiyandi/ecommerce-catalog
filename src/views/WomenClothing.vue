<!-- src/views/WomenClothing.vue -->
<template>
  <div>
    <skeleton-loader v-if="loading" />
    <product-card v-else :product="product" @next-product="fetchNextProduct" @back-product="fetchPreviousProduct">
      <!-- Tambahkan kondisional untuk tombol "Buy" -->
      <button v-if="product.title !== 'Unavailable Product'" @click="buyProduct">Buy</button>
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
      currentIndex: 15,
      maxIndex: 20,
      placeholderImage: "your_placeholder_image_url", // Ganti dengan URL gambar placeholder Anda
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

            // Memastikan kategori sesuai
            if (productData.category.toLowerCase() === "women's clothing") {
              this.product = productData;
            } else {
              // Jika kategori tidak sesuai, tandai produk sebagai "unavailable"
              this.product = {
                title: "Unavailable Product",
                description: "This product is not available.",
                category: "women's clothing",
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
            // Sinyalkan bahwa data telah dimuat, baik berhasil maupun gagal
            this.loading = false;
          });
      }
    },
    fetchNextProduct() {
      // Pindah ke produk berikutnya
      this.currentIndex += 1;

      // Jika mencapai indeks maksimum, tandai produk sebagai "unavailable"
      if (this.currentIndex > this.maxIndex) {
        this.product = {
          title: "Unavailable Product",
          description: "This product is not available.",
          category: "women's clothing",
          image: this.placeholderImage,
          price: 0,
          rating: { rate: 0, count: 0 },
        };
      } else {
        // Ambil produk berikutnya
        this.fetchData();
      }
    },
    fetchPreviousProduct() {
      // Kembali ke produk sebelumnya
      this.currentIndex -= 1;

      // Pastikan currentIndex tidak kurang dari 15
      if (this.currentIndex < 15) {
        this.currentIndex = 15;
      }

      // Ambil data produk sebelumnya
      this.fetchData();
    },
    buyProduct() {
      // Logika ketika tombol "Buy" diklik
      console.log("Buy button clicked for product:", this.product);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
