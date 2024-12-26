<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { ArrowUp } from "lucide-vue-next";

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 500; // Button appears after 500px scroll
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <!-- Back to Top Button -->
  <button
    @click="scrollToTop"
    :class="[
      'fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 hidden md:flex items-center justify-center',
      showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    ]"
    class="bg-[#43c841] hover:bg-[#3ab538] text-white"
    aria-label="Back to top"
  >
    <ArrowUp class="w-6 h-6" />
  </button>
</template>

<style scoped>
.translate-y-8 {
  pointer-events: none;
}
</style>
