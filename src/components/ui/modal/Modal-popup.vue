<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, ArrowRight, Timer, X } from 'lucide-vue-next';

// Control modal visibility with reactive reference
const isVisible = ref(false);
const scrollThreshold = 300; // Number of pixels to scroll before showing modal

// Navigation handler for the CTA button
const handleClick = () => {
  window.location.href = 'https://mrniceguyfleur.com/shop';
};

// Modal control functions
const closeModal = () => {
  isVisible.value = false;
  // Prevent showing again in this session
  localStorage.setItem('offerModalShown', 'true');
};

// Scroll event handler
const handleScroll = () => {
  if (
    window.scrollY > scrollThreshold &&
    !localStorage.getItem('offerModalShown')
  ) {
    isVisible.value = true;
  }
};

// Set up and clean up scroll listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="isVisible"
      class="fixed inset-0 bg-background/90 backdrop-blur-md z-50"
      @click="closeModal"
    >
      <!-- Modal Container: Adjusted padding and max-height for better mobile display -->
      <div
        class="fixed left-[50%] top-[50%] z-50 w-[calc(100%-2rem)] md:w-full max-w-4xl max-h-[90vh] overflow-y-auto translate-x-[-50%] translate-y-[-50%] p-4 md:p-6"
        @click.stop
      >
        <!-- Close Button: Repositioned for better accessibility -->
        <button
          @click="closeModal"
          class="absolute -right-1 -top-1 md:-right-2 md:-top-2 rounded-full bg-background p-2 shadow-lg opacity-70 hover:opacity-100 transition-opacity z-50"
        >
          <X class="h-4 w-4" />
        </button>

        <!-- Promotional Content Card: Darker background and better mobile padding -->
        <Card
          class="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-primary/10"
        >
          <CardContent class="p-4 sm:p-6 md:p-8 lg:p-12">
            <div class="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <!-- Text Content: Improved spacing for mobile -->
              <div class="space-y-4 md:space-y-6">
                <div
                  class="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1 md:px-4 md:py-1.5 font-medium text-sm"
                >
                  <Timer class="size-4" />
                  Offre Découverte Exclusive !
                </div>

                <!-- Responsive typography -->
                <h2
                  class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                >
                  Profitez de notre offre limitée.
                </h2>

                <div class="space-y-3 md:space-y-4">
                  <p class="text-lg md:text-xl text-muted-foreground">
                    Pour chaque mélange Herbes Mythiques acheté, recevez :
                  </p>

                  <!-- List items with adjusted spacing -->
                  <ul class="space-y-2 md:space-y-3 text-base md:text-lg">
                    <li class="flex items-start gap-2">
                      <span class="text-primary mt-1">✦</span>
                      <span class="font-semibold"
                        >3G de CBD Bio Français GRATUITS.</span
                      >
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-primary mt-1">✦</span>
                      <span>Un Goodie Bag Mr. Nice Guy comprenant :</span>
                    </li>
                    <li class="pl-4 md:pl-6 text-muted-foreground">
                      • 1 préroll artisanal.
                    </li>
                    <li class="pl-4 md:pl-6 text-muted-foreground">
                      • Pack de feuilles à rouler Édition Limitée.
                    </li>
                  </ul>
                </div>

                <!-- Buttons with better mobile layout -->
                <div class="flex gap-3 md:gap-4 flex-col sm:flex-row">
                  <Button
                    size="lg"
                    class="gap-2 w-full sm:w-auto"
                    @click="handleClick"
                  >
                    Commander maintenant
                    <ArrowRight class="size-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    class="gap-2 w-full sm:w-auto"
                  >
                    En savoir plus
                    <Gift class="size-4" />
                  </Button>
                </div>

                <!-- Timer info with adjusted spacing -->
                <div
                  class="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Timer class="size-4 md:size-5" />
                  <p>
                    Dépêchez-vous, l'offre est valable jusqu'à épuisement des
                    stocks !
                  </p>
                </div>
              </div>

              <!-- Image Column with improved mobile display -->
              <div class="relative group order-first lg:order-last">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"
                ></div>
                <div
                  class="relative aspect-square w-full max-w-sm mx-auto lg:max-w-none overflow-hidden rounded-2xl bg-background"
                >
                  <img
                    src="/Herbes-Mythiques-hero.jpg"
                    alt="Herbes Mythiques - CBD Bio Français"
                    class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.backdrop-blur {
  backdrop-filter: blur(12px); /* Increased blur effect */
}

/* Prevent body scroll when modal is open */
:deep(body.modal-open) {
  overflow: hidden;
}

/* Custom scrollbar for the modal */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: var(--primary) transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: var(--primary);
  border-radius: 3px;
}
</style>
