<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  TabletSmartphone,
  BadgeCheck,
  Goal,
  Sprout,
  Leaf,
  Stamp,
  ShieldCheck,
  CigaretteOff,
} from 'lucide-vue-next';

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
  details: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: 'cigaretteOff',
    title: 'Dites adieu à la nicotine une fois pour toutes',
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
    icon: 'sprout',
    title: 'Votre Relaxation et Bien-être en Parfaite Synergie',
    description: `Grâce à l'alliance puissante
                  du CBD et du lotus bleu,
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
    details: '',
  },
  {
    icon: 'cigaretteOff',
    title: 'Une Sensation en Bouche Hors-Pair',
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
    details: '',
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
  leaf: Leaf,
  stamp: Stamp,
  shieldCheck: ShieldCheck,
  cigaretteOff: CigaretteOff,
};
</script>

<template>
  <section id="concept" class="container py-18 sm:py-15">
    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Pourquoi choisir Herbes Mythiques?®
    </h2>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="{ icon, title, description } in featureList" :key="title">
        <Card
          class="h-full bg-background border border-primary/10 hover:border-primary/20 transition-colors"
        >
          <CardHeader class="flex justify-center items-center">
            <div
              class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
            >
              <component :is="iconMap[icon]" class="size-6 text-primary" />
            </div>

            <CardTitle class="text-center text-xxl">
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p class="text-muted-foreground text-center mb-4">
              {{ description }}
            </p>
            <!-- <p class="text-sm text-muted-foreground/80 text-center">
              {{ details }}
            </p> -->
          </CardContent>
        </Card>
      </div>
    </div>
    <p class="md:w-2/3 mx-auto text-md text-center text-muted-foreground mt-12">
      Ce mélange sert de base équilibrée pour accompagner tous vos moments,
      qu'il s'agisse de favoriser une routine de sommeil apaisante ou d'ajouter
      une touche de convivialité à un contexte social festif.
    </p>
    <div>
      <img
        src="/Herbes Mythiques 13-1.jpg"
        alt="Hero Image"
        class="w-full mt-12"
      />
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
