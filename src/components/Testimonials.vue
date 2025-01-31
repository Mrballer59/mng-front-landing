<script setup lang="ts">
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Star } from "lucide-vue-next";

interface ReviewProps {
  // image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    // image: 'https://github.com/shadcn.png',
    name: "Mathias",
    userName: "Client de Le couvent Rbx",
    comment: "C’est super doux, j’ai envie d’en fumer pleins là.",
    rating: 5.0,
  },
  {
    // image: 'https://github.com/shadcn.png',
    name: "Anon",
    userName: "Un expert en cannabis trouvé au Couvent.",
    comment:
      "Faut aller chercher, et vite hein ! Perdez pas votre temps. Arrêtez le tabac.",
    rating: 4.8,
  },
  {
    name: "Aniki",
    userName: "Rappeur de la scène Roubaisienne",
    comment:
      "J'sais pas si c'est parce que t'as mis le bon dosage ou quoi, mais nan franchement, propre.",
    rating: 4.9,
  },
  {
    name: "Anon 2",
    userName: "Un connaiseur de Roubaix.",
    comment:
      "Nan, vrai, il est bon. J'ai envie de me faire une tisane avec. C'est pas mal !",
    rating: 4.9,
  },
  {
    // image: 'https://github.com/shadcn.png',
    name: "Louis",
    userName: "Un ami de Mathias",
    comment:
      "J'ai l'impression que c'est un mélange parfait. J'ai l'impression de courir dans une prairie.",
    rating: 4.9,
  },
  {
    // image: 'https://github.com/shadcn.png',
    name: "Anon 3",
    userName: "Un pote de Anon 2 aussi de Roubaix.",
    comment: "Ouais, ouais, ça passe bien. Ça passe bien.",
    rating: 4.9,
  },
];
</script>

<template>
  <section id="testimonials" class="container py-20 sm:py-32">
    <div class="text-center mb-8">
      <h2
        class="text-5xl font-teko md:text-5xl text-center mb-2 tracking-wider"
      >
        Témoignages
      </h2>

      <h2
        class="text-4xl md:text-5xl text-center font-bold mb-4 font-teko dark:text-[#F9F9F9] text-[#363636]"
      >
        Ce qu’en pensent nos
        <span class="text-[#48DC1B]"> utilisateurs </span>
      </h2>
    </div>

    <div class="max-w-4xl mx-auto mb-16">
      <div
        class="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl"
      >
        <div
          class="absolute inset-0 bg-muted/20 flex items-center justify-center"
        >
          <iframe
            v-if="true"
            class="w-full aspect-video rounded-lg shadow-xl"
            src="https://player.vimeo.com/video/1041404969?dnt=1&byline=0&portrait=0&title=0"
            title="Client Testimonial Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <Carousel
      :opts="{
        align: 'start',
        loop: true, // Enable infinite loop
      }"
      class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
    >
      <CarouselContent>
        <CarouselItem
          v-for="review in reviewList"
          :key="review.name"
          class="md:basis-1/2 lg:basis-1/3 min-h-[300px]"
        >
          <Card class="dark:text-[#F9F9F9] text-[#363636] h-full">
            <div class="flex flex-col h-full justify-between">
              <CardContent class="pt-6 pb-0">
                <div class="flex gap-1 pb-6">
                  <Star class="size-4 fill-primary text-primary" />
                  <Star class="size-4 fill-primary text-primary" />
                  <Star class="size-4 fill-primary text-primary" />
                  <Star class="size-4 fill-primary text-primary" />
                  <Star class="size-4 fill-primary text-primary" />
                </div>

                "{{ review.comment }}"
              </CardContent>

              <CardHeader>
                <div class="flex flex-row items-center gap-4">
                  <div class="flex flex-col">
                    <CardTitle class="text-lg">{{ review.name }}</CardTitle>
                    <CardDescription>{{ review.userName }}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </div>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
</template>
