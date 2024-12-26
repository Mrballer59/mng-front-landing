<script setup lang="ts">
import { Youtube, Instagram } from "lucide-vue-next";
import { ref, onMounted } from "vue";

// Optional: Add mouse parallax effect for desktop
const mouseX = ref(0);
const mouseY = ref(0);

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = (e.clientX - window.innerWidth / 2) * 0.02;
  mouseY.value = (e.clientY - window.innerHeight / 2) * 0.02;
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});
</script>

<template>
  <footer class="relative w-full overflow-hidden">
    <!-- Mobile Version dark:bg-[#FBFBFB] -->
    <div class="block md:hidden py-12 px-6">
      <div class="container mx-auto text-center space-y-8">
        <h2 class="text-4xl font-bold mb-8">Suivez nos chaines</h2>

        <div class="flex justify-center gap-8">
          <a
            href="https://www.youtube.com/@mr.niceguy3446"
            class="transition-transform hover:scale-110"
          >
            <Youtube class="size-12" />
          </a>
          <a
            href="https://www.instagram.com/mrniceguy.fleur/"
            class="transition-transform hover:scale-110"
          >
            <Instagram class="size-12" />
          </a>
        </div>

        <div class="text-2xl font-light mt-8">mrniceguycbd.fr</div>
      </div>
    </div>

    <!-- Desktop Version -->
    <div class="hidden md:block relative py-24">
      <div class="container mx-auto">
        <!-- Floating Elements Grid -->
        <div class="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-10">
          <div
            v-for="i in 16"
            :key="i"
            class="border border-white/20"
            :style="{
              transform: `translate(${mouseX}px, ${mouseY}px)`,
            }"
          ></div>
        </div>

        <!-- Main Content -->
        <div
          class="relative z-10 flex flex-col items-center text-center space-y-12"
        >
          <h2 class="text-5xl font-bold tracking-wider">Suivez nos chaines</h2>

          <!-- Social Links with Hover Effects -->
          <div class="flex gap-16">
            <a
              href="https://www.youtube.com/@mr.niceguy3446"
              class="group relative"
            >
              <div
                class="absolute -inset-4 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
              <Youtube
                class="size-16 relative z-10 transition-transform group-hover:scale-110"
              />
            </a>
            <a
              href="https://www.instagram.com/mrniceguy.fleur/"
              class="group relative"
            >
              <div
                class="absolute -inset-4 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              ></div>
              <Instagram
                class="size-16 relative z-10 transition-transform group-hover:scale-110"
              />
            </a>
          </div>

          <!-- Website URL with Animation -->
          <div class="relative">
            <span
              class="text-3xl font-light tracking-wider hover:text-[#5D95A1] transition-colors cursor-pointer"
            >
              mrniceguycbd.fr
            </span>
            <div
              class="absolute -bottom-2 left-0 w-full h-0.5 bg-[#5D95A1] scale-x-0 group-hover:scale-x-100 transition-transform"
            ></div>
          </div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div
        class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      ></div>
    </div>
  </footer>
</template>

<style scoped>
.social-icon {
  @apply transition-all duration-300 ease-in-out;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
