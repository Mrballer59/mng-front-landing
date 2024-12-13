<script setup lang="ts">
import { Button } from '@/components/ui/button';

const navigateToShop = () => {
  window.location.href = 'https://mrniceguyfleur.com/shop';
};
</script>

<template>
  <section class="container">
    <div class="relative min-h-screen">
      <!-- Main Content Container -->
      <div class="w-full max-w-[90rem] mx-auto rounded-3xl p-3 md:p-12 my-8">
        <!-- Heading moved to top -->
        <h1 class="text-4xl md:text-5xl lg:text-5xl font-bold mb-8 text-center">
          Un mélange d'herbes
          <span
            class="text-transparent bg-gradient-to-r from-[#43c841] to-primary bg-clip-text"
          >
            à base de CBD
          </span>
          prêt à l’emploi, pour vos moments de plaisir, sans le tabac!
        </h1>
        <div class="relative group">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"
          ></div>
          <div class="relative aspect-square overflow-hidden rounded-2xl">
            <img
              src="/Herbes-Mythiques-New-hero.jpg"
              alt="Herbes Mythiques"
              class="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        <div class="flex justify-center w-full">
          <!-- New container for button -->
          <Button size="lg" @click="navigateToShop" class="gap-2">
            Découvrez notre concept Herbes Mythiques ®
          </Button>
        </div>

        <div class="space-y-6">
          <p class="text-xl text-center text-white mt-10">
            Un mélange unique et premium de fleurs (CBD et lotus bleu d'Égypte
            BIO) et de feuilles aromatiques, préparé à la main en France avec
            des plantes de haute qualité.
          </p>
        </div>

        <!--  <div class="grid lg:grid-cols-2 gap-12 items-center">
          Left Column: Image -->
        <!-- <div class="relative group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"
            ></div>
            <div class="relative aspect-square overflow-hidden rounded-2xl">
              <img
                src="/Herbes-Mythiques-New-hero.jpg"
                alt="Herbes Mythiques"
                class="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <Button size="lg" @click="navigateToShop" class="gap-2">
              Découvrez nos produits
              <ArrowRight class="h-5 w-5" />
            </Button>
          </div> -->

        <!-- Right Column: Content -->
        <!-- <div class="space-y-8 order-1 lg:order-2">
            <div class="space-y-6">
              <div class="space-y-4 border-l-2 border-primary/20 pl-4">
                <p class="text-lg text-muted-foreground">
                  Herbes Mythiques : l'avant-goût d'un avenir de bien-être
                  naturel. Ce mélange unique au CBD et au lotus bleu d'Égypte
                  est conçu en France avec des plantes de haute qualité.
                </p>
                <p class="text-lg text-muted-foreground">
                  Un mélange floral puissant sans nicotine, fabriqué à la main
                  avec des plantes bio de qualité supérieure.
                </p>
              </div>

              <div class="flex gap-4 pt-4">
                <Button size="lg" @click="navigateToShop" class="gap-2">
                  Découvrez nos produits
                  <ArrowRight class="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div> 
        </div>-->
      </div>

      <!-- Decorative Elements -->
      <div
        class="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl opacity-50"
      ></div>
      <div
        class="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl opacity-50"
      ></div>
    </div>

    <!-- Additional Content -->
    <!-- <div class="max-w-3xl mx-auto text-center pb-20">
      <p class="text-xl text-muted-foreground">
        Pour une expérience unique qui apaise le corps et l'esprit, Herbes
        Mythiques devient votre solution incontournable, la référence naturelle
        pour transformer vos rituels quotidiens avec une alternative moderne et
        saine.
      </p>
    </div> -->
  </section>
</template>

<style scoped>
.aspect-square {
  aspect-ratio: 1 / 1;
}

@media (min-width: 1024px) {
  .container {
    min-height: calc(100vh - 5rem);
  }
}

/* Mobile optimization for title */
@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
    line-height: 1.2;
  }
}
</style>
