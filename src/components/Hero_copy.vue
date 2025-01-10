<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();

const navigateToShop = () => {
  window.location.href =
    "https://mrniceguyfleur.com/shop/herbes-mythiques-melange-cbd-lotus-base-florale-10g-110#attr=";
};
</script>
<template>
  <section class="container">
    <div class="relative min-h-[80vh] py-8 md:py-12">
      <div class="w-full max-w-[90rem] mx-auto">
        <!-- Mobile Layout -->
        <div class="block md:hidden">
          <div class="flex flex-col items-center">
            <!-- Logo -->
            <div class="text-center mb-4">
              <img
                :src="
                  mode == 'light'
                    ? 'new-hero-mobile-dark.svg'
                    : 'new-hero-mobile-light.svg.svg'
                "
                alt="Mr Nice Guy"
                class="mx-auto mb-4 w-[250px] h-auto svg-crisp"
                width="250"
                height="auto"
              />
            </div>

            <!-- Mobile Hero Text -->
            <div class="max-w-2xl mx-auto text-center">
              <h1
                class="font-tomorrow text-3xl text-center leading-relaxed font-bold"
              >
                <div class="flex flex-col items-center">
                  <span>Un mélange</span>
                  <div class="h-[1.2em]">
                    <span class="relative inline-block">
                      <span
                        class="text-[#43c841] whitespace-nowrap animate-typewriter inline-block border-r-2 pr-1"
                      >
                        d'herbes à base de CBD
                      </span>
                    </span>
                  </div>
                  <span class="mt-2"
                    >prêt à l'emploi, pour vos moments de plaisir,</span
                  >
                  <span class="whitespace-nowrap">sans tabac ! </span>
                </div>
              </h1>
            </div>

            <!-- Mobile Product Image -->
            <div class="w-full mt-8">
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

            <!-- Mobile Button -->
            <Button
              variant="mythiques"
              size="mythiques"
              @click="navigateToShop"
              class="font-tomorrow mt-10 px-8 py-4 text-lg"
            >
              Découvrez notre Herbes Mythiques
            </Button>
            <div class="space-y-6 mt-10 px-4">
              <p class="text-foreground leading-relaxed font-teko text-2xl">
                En intégrant
                <span class="text-sky-400"
                  >l'authentique fleur de lotus bleu d'Égypte</span
                >, qui module les récepteurs de dopamine de manière sélective,
                et le
                <span class="text-green-400">CBD bio</span>
                qui agit sur les récepteurs cannabinoïdes, ce mélange favorise
                équilibre, lucidité et bien-être profond.
              </p>

              <p class="text-foreground leading-relaxed font-teko text-2xl">
                Retrouvez une
                <span class="text-green-400">relaxation physique</span>
                et une
                <span class="text-sky-400">stimulation mental</span>
                douce, et dites adieu aux pics et aux chutes liés à la
                dépendance à la nicotine.
              </p>
            </div>
          </div>
        </div>

        <!-- Desktop Layout -->
        <div class="hidden md:block">
          <!-- Logo and Title Section -->
          <div class="text-center mb-8">
            <img
              :src="mode == 'light' ? 'hero-logo.svg' : 'hero-logo-w-bg.svg'"
              alt="Mr Nice Guy"
              class="mx-auto mb-4"
            />
          </div>

          <!-- Main Content Grid -->
          <div class="grid grid-cols-2 gap-8">
            <!-- Left Content -->
            <div class="space-y-6">
              <h1 class="font-tomorrow text-3xl leading-relaxed">
                Un mélange d'herbes à
                <span class="text-[#43c841]">base de CBD</span> prêt à l'emploi,
                pour tous vos moments de plaisir, sans tabac.
              </h1>

              <p class="text-foreground font-teko leading-relaxed text-3xl">
                En intégrant
                <span class="text-sky-400"
                  >l'authentique fleur de lotus bleu d'Égypte</span
                >, qui module les récepteurs de dopamine de manière sélective,
                et le
                <span class="text-green-400">CBD bio</span>
                qui agit sur les récepteurs cannabinoïdes, ce mélange favorise
                équilibre, lucidité et bien-être profond.
              </p>

              <p class="text-foreground font-teko text-3xl">
                Retrouvez une
                <span class="text-green-400">relaxation physique</span>
                et une
                <span class="text-sky-400">stimulation mental</span>
                douce, et dites adieu aux pics et aux chutes liés à la
                dépendance à la nicotine.
              </p>

              <Button
                variant="mythiques"
                size="mythiques"
                @click="navigateToShop"
                class="font-tomorrow mt-6"
              >
                Découvrez nos Herbes Mythiques®
              </Button>
            </div>
            <div>
              <img
                src="/Herbes-Mythiques-New-hero.jpg"
                alt="Herbes Mythiques Detail"
                class="w-full rounded-lg shadow-lg object-cover"
              />
            </div>
            <div>
              <img
                src="/Herbes-Mythiques 11.jpg"
                alt="Herbes Mythiques Detail"
                class="w-full rounded-lg shadow-lg object-cover"
              />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-2">
                <img
                  src="/Herbes-Mythiques-4-1.jpg"
                  alt="Herbes Mythiques Product"
                  class="w-full rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Section (shared between mobile and desktop) -->
        <div class="mt-12 md:mt-24"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  min-height: calc(100vh - 5rem);
}
.animate-typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  width: 0;
  animation: typewriter 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards,
    blink 1s step-end infinite;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  from,
  to {
    border-color: currentColor;
  }
  50% {
    border-color: transparent;
  }
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
