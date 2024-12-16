<script setup lang="ts">
// Define the botanical images data
const botanicalImages = [
  {
    src: 'public/botanical-1.jpg',
    alt: 'Passion flower illustration',
    width: 200,
    height: 369,
  },
  {
    src: 'public/botanical-1.jpg',
    alt: 'Pink flower illustration',
    width: 200,
    height: 369,
  },
  {
    src: 'public/botanical-1.jpg',
    alt: 'Berry branch illustration',
    width: 200,
    height: 369,
  },
];
</script>

<template>
  <!-- Botanical Illustrations Container -->
  <div class="relative w-full flex justify-start gap-6 mt-12 overflow-hidden">
    <!-- Individual Botanical Cards -->
    <div
      v-for="(image, index) in botanicalImages"
      :key="index"
      class="relative"
      :style="{
        width: `${image.width}px`,
        height: `${image.height}px`,
      }"
    >
      <!-- Custom shaped container with specific border radius -->
      <div
        class="w-full h-full overflow-hidden bg-[#D9D9D9]/10"
        :style="{
          borderRadius:
            index === 0
              ? '100px 100px 100px 100px'
              : index === 1
              ? '100px 100px 100px 100px'
              : '100px 100px 100px 100px',
        }"
      >
        <!-- Image with object-fit to maintain aspect ratio -->
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover"
          :style="{
            opacity: 1, // Matches Figma opacity setting
          }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles for the botanical cards */
.botanical-card {
  position: relative;
  transition: transform 0.3s ease;
}

.botanical-card:hover {
  transform: translateY(-4px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .botanical-container {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .botanical-card {
    width: 100%;
    max-width: 300px;
  }
}
</style>
