<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: 'Choisissez',
    title: 'Un mélange CBD prêt à  l’emploi, sans tabac ni dépendance',
    description:
      'Éliminez les risques de dépendance à la nicotine. Notre solutionvous offre une routine de bien-être plus saine, avec des fleurs et feuilles thérapeutiques sourcées auprès de petits producteurs bio. Préparées à la main, ces plantes sont idéales à utiliser seules ou comme base pour ajouter du CBD ou d’autres plantes.',
    image: 'Herbes-Mythiques-4-1.jpg',
  },
  {
    badgeTitle: 'Explorez',
    title: 'Des aromates et principes actifs puissants',
    description:
      'Découvrez des mélanges d’aromates et de principes actifs puissants, 100 % naturels. Sélectionnées avec soin et préparées à la main, ces plantes offrent des propriétés synergiques pour un bien-être optimal, alliant tradition et expertise moderne.',
    image: 'Herbes-Mythiques 1.jpg',
  },
  {
    badgeTitle: 'Savourez',
    title: 'Une harmonie de plantes pour une expérience équilibrée',
    description:
      'Chaque plante agit en harmonie pour maximiser les effets bénéfiques, offrant une expérience équilibrée et subtilement puissante. Ce mélange enrichit et facilite votre expérience habituelle, pour un bien-être quotidien supérieur.',
    image: 'Herbes-Mythiques-6.jpg',
  },
  // {
  //   badgeTitle: "Collaborate",
  //   title: "L'Élégance Myrtille",
  //   description:
  //     "Une variété d'exception aux notes sucrées de myrtilles fraîches, offrant une expérience gustative unique. Notre Blueberry CBD séduit par son profil aromatique gourmand et ses effets délicatement relaxants",
  //   image: "blueberry-removebg-preview.png",
  // },
];
</script>

<template>
  <section id="features" class="container py-24 sm:py-32">
    <div class="text-center mb-8">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Plus que du CBD...
      </h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Un concepte d’herboristerie moderne
      </h2>
    </div>

    <div class="lg:w-[80%] mx-auto relative">
      <div
        v-for="(
          { badgeTitle, title, description, image }, index
        ) in HowItWorksList"
        :key="title"
        :class="[
          'flex mb-8 items-center',
          { ' flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card class="h-full bg-transparent border-0 shadow-none">
          <CardHeader>
            <div class="pb-4">
              <Badge>{{ badgeTitle }}</Badge>
            </div>

            <CardTitle>
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground">
            {{ description }}
          </CardContent>
        </Card>

        <img
          :src="image"
          :alt="`Image describing ${title} `"
          className="w-[150px]  md:w-[250px] lg:w-[300px] mx-auto rounded-xl"
        />
        <div
          :class="[
            '-z-10 absolute right-0 w-44 h-72  lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl',
            {
              'left-0': index % 2 !== 0,
            },
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>
