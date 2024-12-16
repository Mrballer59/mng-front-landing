<script setup lang="ts">
import { Button } from '@/components/ui/button';
import ImgCard from './custom/ImgCard.vue';

const navigateToShop = () => {
  window.location.href = 'https://mrniceguyfleur.com/shop';
};

const chefImages = [
  { src: 'chef-image-1.jpg', alt: 'Chef profile 1' },
  { src: 'chef-image-2.jpg', alt: 'Chef profile 2' },
  { src: 'chef-image-3.jpg', alt: 'Chef profile 3' },
  { src: 'chef-image-4.jpg', alt: 'Chef profile 4' },
];

const chefDescription = `Fleur de Lotus Bleu d'Égypte, Feuille de Molène, Feuille de
              Passiflore, Feuille de Guimauve, Fleur de Lotus Bleu d'Égypte,
              Feuille de Molène, Feuille de Passiflore, Feuille de Guimauve`;
</script>

<template>
  <section class="container">
    <!-- Main content wrapper with relative positioning -->
    <div class="relative min-h-[80vh] py-8 md:py-12">
      <!-- Main Content Container -->
      <div class="w-full max-w-[90rem] mx-auto">
        <!-- Hero Content -->
        <div
          class="flex flex-col md:flex-row md:items-center md:gap-12 mb-10 md:mb-10"
        >
          <!-- Left Content -->
          <div class="md:w-1/2 space-y-6">
            <h1
              class="font-tomorrow text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Un mélange
              <span class="text-[#43c841]">d'herbes à base de CBD</span>
              prêt à l'emploi, pour vos moments de plaisir, sans le tabac!
            </h1>

            <p class="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper
            </p>

            <Button
              variant="mythiques"
              size="mythiques"
              @click="navigateToShop"
              class="font-tomorrow"
            >
              Découvrez notre Herbes Mythiques
            </Button>
          </div>

          <!-- Right Content - Product Image -->
          <div class="md:w-1/2 mt-8 md:mt-0">
            <div class="relative group">
              <div class="relative rounded-2xl overflow-hidden">
                <img
                  src="/Herbes-Mythiques-New-hero.jpg"
                  alt="Herbes Mythiques"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Section Container with negative margin for overlap -->
        <div
          class="relative -mt-16 md:-mt-24 flex flex-col md:flex-row md:items-start md:justify-between gap-8"
        >
          <!-- Botanical Illustrations -->
          <div class="md:w-2/3">
            <ImgCard />
          </div>

          <!-- Chef Section -->
          <div class="w-full md:w-[400px]">
            <!-- Title and Description Container -->
            <div class="flex mt-8 md:mt-40 flex-col gap-2 mb-4">
              <div class="flex items-center gap-3">
                <div class="h-px w-6 bg-border"></div>
                <h2 class="text-lg font-medium">
                  Découvrez notre formule unique.
                </h2>
              </div>

              <p class="text-sm text-muted-foreground">
                {{ chefDescription }}
              </p>
            </div>

            <!-- Chef Images Grid -->
            <div
              class="grid justify-items-center grid-cols-2 md:grid-cols-4 gap-3"
            >
              <div
                v-for="(image, index) in chefImages"
                :key="index"
                class="w-12 h-12 overflow-hidden rounded-full"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative Gradients -->
      <div
        class="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl opacity-50"
      ></div>
      <div
        class="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl opacity-50"
      ></div>
    </div>
  </section>
</template>

<style scoped>
.container {
  min-height: calc(100vh - 5rem);
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
    line-height: 1.3;
  }

  .chef-section {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .chef-images {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

.chef-image:hover {
  transform: translateY(-2px);
}

.aspect-square {
  aspect-ratio: 1 / 1;
}
</style>
