<script setup lang="ts">
import { onMounted, ref, onUnmounted, watch } from "vue";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, ArrowRight, Timer, X } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

// State and Props
const isVisible = ref(false);

const props = defineProps({
  forceShow: {
    type: Boolean,
    default: false,
  },
});

// Navigation handlers
const handleShopClick = () => {
  window.location.href = "https://mrniceguyfleur.com/shop";
};

const handleInfoClick = () => {
  window.location.href =
    "https://mrniceguyfleur.com/shop/herbes-mythiques-melange-cbd-lotus-base-florale-10g-110";
};

// Modal control functions
const closeModal = () => {
  isVisible.value = false;
  localStorage.setItem("offerModalShown", "true");
  document.body.classList.remove("overflow-hidden");
};

// Watch for force show prop
watch(
  () => props.forceShow,
  (newValue) => {
    if (newValue) {
      isVisible.value = true;
      document.body.classList.add("overflow-hidden");
    }
  }
);

// Scroll event handler
const handleScroll = () => {
  const conceptSection = document.getElementById("concept");

  if (
    conceptSection &&
    !localStorage.getItem("offerModalShown") &&
    !isVisible.value
  ) {
    const conceptBottom = conceptSection.getBoundingClientRect().bottom;

    if (conceptBottom <= 0) {
      isVisible.value = true;
      document.body.classList.add("overflow-hidden");
    }
  }
};

// Lifecycle hooks
onMounted(() => {
  if (!localStorage.getItem("offerModalShown")) {
    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.classList.remove("overflow-hidden");
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
    <!-- Step 4: Increase z-index -->
    <div v-if="isVisible" class="fixed inset-0 z-[9999]">
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-background/90 backdrop-blur-md"
        @click="closeModal"
      ></div>

      <!-- Modal Container -->
      <div
        class="fixed left-[50%] top-[50%] z-[9999] w-[calc(100%-2rem)] md:w-full max-w-4xl translate-x-[-50%] translate-y-[-50%]"
        @click.stop
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute right-2 top-2 rounded-full bg-background p-2 shadow-lg hover:bg-accent transition-colors z-[9999]"
        >
          <X class="h-4 w-4" />
        </button>

        <Card class="border-primary/10">
          <CardContent class="p-4 sm:p-6 md:p-8 lg:p-12">
            <div class="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <!-- Text Content -->
              <div class="space-y-4 md:space-y-6">
                <div
                  class="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1 md:px-4 md:py-1.5 font-medium text-sm"
                >
                  <Timer class="size-4" />
                  Offre Découverte Exclusive !
                </div>

                <h2
                  class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
                >
                  Profitez de notre offre limitée.
                </h2>

                <div class="space-y-3 md:space-y-4">
                  <p class="text-lg md:text-xl text-muted-foreground">
                    Pour chaque mélange Herbes Mythiques acheté, recevez :
                  </p>

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

                <div
                  class="flex gap-4 flex-col sm:flex-row sm:items-center mt-6"
                >
                  <Button
                    size="lg"
                    class="w-full sm:w-auto bg-[#1C95A3] hover:bg-[#147885] text-white border-none shadow-md"
                    @click="handleShopClick"
                  >
                    Commander maintenant
                    <ArrowRight class="size-4 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    class="w-full sm:w-auto border-2 hover:bg-primary/5"
                    @click="handleInfoClick"
                  >
                    En savoir plus
                    <Gift class="size-4 ml-2" />
                  </Button>
                </div>

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

              <!-- Image Column -->
              <div class="relative group order-first lg:order-last lg:-mt-8">
                <!-- Added negative margin for better vertical alignment -->
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"
                ></div>
                <div
                  class="relative w-full max-w-[280px] mx-auto lg:max-w-[390px] overflow-hidden rounded-2xl bg-background"
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

<style>
/* Global styles */
body.overflow-hidden {
  overflow: hidden;
  padding-right: 15px;
}

.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>
