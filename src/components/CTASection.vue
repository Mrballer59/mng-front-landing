<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, ArrowRight, Timer } from "lucide-vue-next";

const handleClick = () => {
  window.location.href =
    "https://mrniceguyfleur.com/shop/herbes-mythiques-melange-cbd-lotus-base-florale-10g-110";
};
const handleInfoClick = () => {
  window.location.href =
    "https://mrniceguyfleur.com/shop/herbes-mythiques-melange-cbd-lotus-base-florale-10g-110";
};
</script>

<template>
  <section id="promotion" class="relative py-24 sm:py-32 overflow-hidden">
    <div class="container relative z-10">
      <Card
        class="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <CardContent class="p-6 sm:p-12">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="space-y-6">
              <div class="hidden lg:block">
                <div
                  class="inline-flex items-center gap-2 bg-primary/10 text-[#1C95A3] rounded-full px-4 py-1.5 font-medium text-sm"
                >
                  <Timer class="size-4" />
                  Offre Découverte Exclusive !
                </div>
              </div>

              <h2 class="text-4xl font-bold tracking-tight">
                Profitez de notre offre limitée.
              </h2>

              <div class="space-y-4">
                <p class="text-xl text-muted-foreground">
                  Pour chaque mélange Herbes Mythiques acheté, recevez :
                </p>

                <ul class="space-y-3 text-lg">
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
                  <li class="pl-6 text-muted-foreground">
                    • 1 Préroll Artisanal.
                  </li>
                  <li class="pl-6 text-muted-foreground">
                    • 1 Pack de Feuilles à Rouler Édition Limitée.
                  </li>
                </ul>
              </div>

              <div class="flex gap-4 flex-col sm:flex-row">
                <Button
                  size="lg"
                  class="gap-2 bg-[#1C95A3] hover:bg-[#147885]"
                  @click="handleClick"
                >
                  Commander maintenant
                  <ArrowRight class="size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  @click="handleInfoClick"
                  class="gap-2"
                >
                  En savoir plus
                  <Gift class="size-4" />
                </Button>
              </div>

              <div
                class="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Timer class="size-5" />
                <p>
                  Dépêchez-vous, l'offre est valable jusqu'à épuisement des
                  stocks !
                </p>
              </div>
            </div>

            <div class="relative group order-first lg:order-last">
              <div class="block lg:hidden mb-6">
                <div
                  class="inline-flex items-center gap-2 bg-primary/10 text-[#1C95A3] rounded-full px-4 py-1.5 font-medium text-sm"
                >
                  <Timer class="size-4" />
                  Offre Découverte Exclusive !
                </div>
              </div>
              <div
                class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500"
              ></div>
              <!-- Modified image container -->
              <div
                class="relative w-full max-w-[570px] mx-auto overflow-hidden rounded-2xl bg-background"
              >
                <img
                  src="/Herbes-Mythiques-hero.jpg"
                  alt="Herbes Mythiques - CBD Bio Français"
                  class="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>

<style scoped>
.backdrop-blur {
  backdrop-filter: blur(8px);
}
</style>
