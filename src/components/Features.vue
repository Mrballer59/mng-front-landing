<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TabletSmartphone,
  BadgeCheck,
  Goal,
  Sprout,
  Sparkle,
  Stamp,
  ShieldCheck,
  CigaretteOff,
  Scale,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
  details: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "cigaretteOff",
    title: "Dites adieu à la nicotine une fois pour toutes",
    description: `Abandonnez la nicotine
                  et le tabac grâce à un
                  mélange conçu pour
                  votre satisfaction la plus
                  profonde. Contrairement
                  à la nicotine, qui
                  provoque un pic suivi
                  d'un crash rapide de
                  dopamine, les alcaloïdes
                  actifs du lotus bleu
                  (l’apomorphine et la
                  nuciférine) offrent une
                  montée douce et stable,
                  sans chute rapide, pour
                  une satisfaction
                  profonde sans
                  dépendance.`,
    details: ``,
  },
  {
    icon: "scale",
    title: "Votre Relaxation et Bien-être en Parfaite Synergie",
    description: `Grâce à l'alliance puissante
                  du  <span class="text-[#43c841]">CBD</span>  et du <span class="text-[#1C95A3]">lotus bleu</span>,
                  notre mélange fait effet en
                  seulement quelques minutes
                  après inhalation. Bien que
                  plus lent que le rush de la
                  nicotine, il procure une
                  satisfaction durable, sans
                  entraîner le comportement
                  addictif lié à la quête
                  incessante de dopamine. Ici,
                  les niveaux de dopamine
                  augmentent naturellement,
                  de façon progressive et
                  stable, sans chute rapide,
                  pour une expérience
                  apaisante et équilibrée.`,
    details: "",
  },
  {
    icon: "sparkle",
    title: "Une Sensation en Bouche Hors-Pair",
    description: `Son arôme supérieur
                provient des terpènes de
                notre CBD bio français,
                mélangé à nos 9 variétés
                uniques, offrant un goût
                digne d'une expérience
                coffeeshop. Composé de 2
                fleurs sacrées et 5 feuilles
                aromatiques soigneusement
                sélectionnées, notre mélange
                offre une base douce et
                savoureuse, non irritante. Les
                autres feuilles apportent une
                saveur neutre, proche du thé,
                pour un équilibre parfait.
                Dites adieu aux goûts de foin
                des autres mélanges et
                bonjour à votre nouveau
                coup de cœur.`,
    details: "",
  },
];
const iconMap: Record<
  string,
  typeof TabletSmartphone | typeof BadgeCheck | typeof Goal
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  sprout: Sprout,
  sparkle: Sparkle,
  stamp: Stamp,
  shieldCheck: ShieldCheck,
  cigaretteOff: CigaretteOff,
  scale: Scale,
};
</script>

<template>
  <section id="concept" class="container py-18 sm:py-15">
    <div class="max-w-5xl mx-auto my-12 px-4 block md:hidden">
      <img
        src="/Herbes-Mythiques 11.jpg"
        alt="Hero Image"
        class="w-full md:w-3/4 lg:w-2/3 mx-auto object-cover rounded-lg shadow-lg"
      />
    </div>
    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4 md:mb-8">
      Pourquoi choisir
      <span class="text-[#5D95A1]">Herbes Mythiques ? ®</span>
    </h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="{ icon, title, description } in featureList" :key="title">
        <Card
          class="h-full transition-colors dark:bg-[#2925244d] light:bg-[#ffffff] dark:text-white border border-primary/10 hover:border-primary/20"
        >
          <CardHeader class="flex justify-center items-center">
            <div class="p-2 rounded-full mb-4">
              <component
                :is="iconMap[icon]"
                class="size-7 light:text-black dark:text-white"
              />
            </div>

            <CardTitle class="text-center text-xxl">
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p
              class="dark:text-text-white/70 light:text-[#2925244d] text-center mb-4"
              v-html="description"
            ></p>
          </CardContent>
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
