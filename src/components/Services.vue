<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Truck, Timer, Shield, MapPin } from "lucide-vue-next";

interface ServiceProps {
  title: string;
  description: string;
  icon: any;
}

const serviceList: ServiceProps[] = [
  {
    title: "Commandez en toute sérénité",
    description:
      "Avec nous, vous pouvez commander en toute sérénité. Nous garantissons une expérience d'achat sûre et transparente.",
    icon: Timer,
  },
  {
    title: "Satisfait ou remboursé",
    description:
      "Si vous n'êtes pas entièrement satisfait de votre achat, contactez-nous sous 10 jours et nous ferons tout pour trouver une solution qui vous convienne.",
    icon: Shield,
  },
  {
    title: "Expédition rapide",
    description:
      "Expédition rapide sous 24h via Colissimo, livraison sous 48-72h partout en France Métropolitaine.",
    icon: Truck,
  },
  {
    title: "Livraison éco-responsable à Lille",
    description:
      "Et pour nos clients Lillois, livraison éco-responsable avec réception jour-même sur Lille + point pick-up gratuit centre ville.",
    icon: MapPin,
  },
];
</script>

<template>
  <section id="garantie" class="container py-24 sm:py-32 bg-muted/30">
    <div class="mb-12">
      <h2
        class="text-4xl font-teko md:text-6xl text-center font-bold dark:text-[#F9F9F9] text-[#363636]"
      >
        Achetez sans risque
      </h2>
    </div>
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full lg:w-[80%] mx-auto"
    >
      <div v-for="{ title, description, icon } in serviceList" :key="title">
        <Card
          class="dark:bg-[#282828] bg-[#F9F9F9] border border-primary/10 hover:border-primary/20 transition-colors h-full"
        >
          <CardHeader class="text-center space-y-4">
            <div class="flex justify-center">
              <component
                :is="icon"
                class="size-8 light:text-black dark:text-white"
              />
            </div>
            <CardTitle class="text-2xl font-semibold">
              {{ title }}
            </CardTitle>
            <CardDescription
              class="dark:text-[#F9F9F9] text-[#363636]text-base"
              >{{ description }}</CardDescription
            >
          </CardHeader>
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-2px);
}
</style>
