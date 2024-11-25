<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
const mode = useColorMode();

//import { Badge } from "@/components/ui/badge";
//import { Button } from "@/components/ui/button";
//import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <section class="container">
    <div
      class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
    >
      <div class="relative group mt-14">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <img
          class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border-t-primary/30 img-border-animation"
          :src="mode == 'light' ? 'MNG-img.svg' : 'MNG-IMG-cream.svg'"
          alt="dashboard using shadcn-vue"
        />

        <!-- gradient effect img -->
        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
        ></div>
      </div>
      <div class="text-center space-y-8">
        <div
          class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"
        >
          <h1>
            Découvrez une alternative naturelle
            <span
              class="text-transparent bg-gradient-to-r from-[#43c841] to-primary bg-clip-text"
            >
              qui change tout
            </span>
          </h1>
        </div>

        <p class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Permettez à nos Herbes Mystiques de révéler leur pouvoir en vous.
        </p>
        <span class="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          Un mélange floral moderne au CBD et lotus d'Egypte, élaboré en France
          avec des plantes de haute qualité pour une expérience relaxante sans
          nicotine.
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

/* @keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
} */
</style>
