<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Cannabis } from "lucide-vue-next";

const compositionDetails = [
  {
    id: "item-1",
    mainTitle: "Chanvre cultivé Français",
    subTitle: "(9 Variétés de CBD Bio Mélangés)",
    content: `Principes actifs : CBD, CBG, et autres cannabinoïdes mineurs. (Conforme aux normes en teneurs de THC). 

Dans notre mélange, nous ajoutons une combinaison spéciale et variable de 9 variétés de chanvre CBD, ce qui confère à chaque lot une signature terpénique unique à chaque achat. 

Nous utilisons du CBD certifié biologique (Ecocert), non dénaturé et non traité, cultivé en France par notre partenaire de longue date, garantissant une qualité et tracabilité incomparable. 

Bienfaits : Le CBD interagit avec le système endocannabinoïde du corps, régulant l’humeur, le stress et les douleurs physiques. 

La combinaison de CBD et CBG crée un effet apaisant qui aide à réduire l’anxiété, l’inflammation et à améliorer le bien-être général, faisant de cette base le socle parfait pour notre mélange. 

Chaque gramme de mélange contiens en moyenne 50 mg de CBD et 10mg CBG qui apportent des effets thérapeutiques apaisants et régénérants.`,
  },
  {
    id: "item-2",
    mainTitle: "Fleur de Lotus Bleu d'Égypte",
    content: `Principes actifs : Nuciferine, Apomorphine 

La fleur de lotus bleu d'Égypte est renommée pour ses propriétés relaxantes et son impact positif sur l'humeur. 

La nuciferine, un alcaloïde puissant contenu dans cette fleur, induit un profond sentiment de pleine conscience, tandis que l’apomorphine génère une sensation de bien-être profondément subtile en stimulant les récepteurs dopaminergiques du cerveau. 

Ce duo synergique crée un équilibre parfait entre détente et élévation de l’humeur, réduisant ainsi l’anxiété et induisant une sensation de bien-être durable. 

Bienfaits : Il aide à réduire l'anxiété, à stimuler la concentration et à procurer un profond bien-être émotionnel. 

Chaque consommation devient ainsi une véritable expérience de relaxation, de légèreté et d’équilibre mental. 

Chaque gramme de mélange contient en moyenne 300 mg de pétales de lotus bleu, riche en apomorphine et nuciferine, assurant ainsi une concentration optimale de principes actifs pour un effet maximal.

Avertissement : Mélanger le lotus bleu avec de l'alcool peut entraîner une expérience très euphorique en raison d'une interaction potentialisante entre les deux substances. 
Cependant, il est important de faire preuve de prudence et de modération, car cette combinaison peut intensifier les effets de manière imprévisible.`,
  },
  {
    id: "item-3",
    mainTitle: "Feuille de Damiana",
    content: `Principes actifs : Damianin La feuille de Damiana est connue pour ses propriétés stimulantes et équilibrantes. “Alternatif au tabac”, 
elle contient un alcaloïde appelé damianin, qui stimule le système nerveux et favorise un équilibre énergétique. Cette plante soutient la clarté mentale et la concentration tout en réduisant le stress, ce qui en fait un excellent ajout pour tout mélange destiné à favoriser la relaxation et le bien-être mental.

Bienfaits : La Damiana offre une énergie douce, soutenant l’équilibre mental et physique sans
provoquer de nervosité, et favorise une attention calme et alerte.`,
  },
  {
    id: "item-4",
    mainTitle: "Feuille de Passiflore",
    content: `Principes actifs : Harmane, Apigénine La passiflore, ou fleur de la passion, est largement reconnue pour ses propriétés apaisantes. Elle contient de l’harmane et de l’apigénine, qui sont connus pour réduire l’anxiété et améliorer le sommeil. L’harmane aide à détendre le système nerveux, tandis que l’apigénine améliore la gestion du stress et induit un effet sédatif doux, favorisant le repos et la relaxation.
    
Bienfaits : Cette plante apporte relaxation et soulagement du stress, calmant l’esprit et le
corps, idéale pour ceux qui cherchent une manière naturelle de se détendre et de favoriser un
sommeil réparateur.`,
  },
  {
    id: "item-5",
    mainTitle: "Feuille de Guimauve",
    content: `Principes actifs :
Mucilages La feuille de guimauve offre une note subtilement terreuse et un parfum léger mais apaisant.
Lors de la consommation, elle révèle des nuances presque florales, avec une douceur naturelle
qui procure une sensation de confort.
Prisée pour ses propriétés apaisantes et hydratantes, ses feuilles riches en mucilage agissent
comme un émollient naturel, apaisant les tissus irrités et protégeant les membranes
muqueuses. Elle est particulièrement efficace pour apaiser la gorge et les voies respiratoires,
offrant un confort immédiat lors de l’inhalation. Ses propriétés émollientes ajoutent une
texture agréable, créant une expérience délicate et apaisante au palais.

Bienfaits : La guimauve ajoute une couche de confort et de protection, en particulier pour le
système respiratoire, et offre un effet apaisant et hydratant, idéal pour toute consommation
apaisante.`,
  },
  {
    id: "item-6",
    mainTitle: "Feuille de Framboisier",
    content: `Principes actifs : Tanins, Flavonoïdes

La feuille de framboisier possède des propriétés rafraîchissantes, pour une touche de fraîcheur
aromatique et une expérience agréable et vivifiante. Elle est également riche en antioxydants
et est reconnue pour sa capacité à soutenir la santé globale du corps. Les tanins et flavonoïdes
présents dans les feuilles aident à tonifier et apaiser les systèmes digestif et reproducteur. Ces
composés offrent également des propriétés astringentes douces qui favorisent la guérison et
la protection du corps, notamment des membranes muqueuses.

Bienfaits : La feuille de framboisier apporte un effet protecteur, soutenant les processus de
guérison naturels du corps tout en apportant un soulagement doux aux systèmes digestif et
reproducteur. Elle contribue à une sensation de fraîcheur et d'équilibre tout en soutenant le
bien-être général.`,
  },
  {
    id: "item-7",
    mainTitle: "Feuille de Molène",
    content: `Principes actifs : Mucilages

La feuille de molène, riche en mucilage, est une plante puissante connue pour ses propriétés
protectrices et apaisantes. Bien connue pour ses propriétés bénéfiques sur les voies
respiratoires et son effet calmant, son goût doux et apaisant se mêle harmonieusement aux
autres plantes du mélange.
Les saponines et flavonoïdes présents dans la molène agissent comme des agents apaisants
pour les muqueuses, particulièrement utiles pour soulager les irritations de la gorge et des
poumons. Ces composants contribuent à la douceur de la feuille de molène et à ses effets
réparateurs sur les tissus respiratoires.

Bienfaits : La molène protège doucement les poumons et les voies respiratoires, soulageant
les irritations et offrant un confort à chaque respiration.`,
  },
];
</script>

<template>
  <section id="composition">
    <div class="container py-12">
      <div class="space-y-6 md:hidden">
        <div class="text-left">
          <h3 class="text-2xl ml-3 md:ml-5 font-bold">
            Un mélange d'herbes mythiques, parfait
            <span class="text-[#1C95A3]">seul</span> ou
            <span class="text-[#43c841]">en base</span>, pour la vaporisation ou
            une cigarette herbale en alternative au tabac.
          </h3>
        </div>

        <div class="w-full block md:hidden">
          <img
            src="/Herbes Mythiques 4-1.jpg"
            alt="Mélange d'herbes"
            class="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        <div class="text-3xl flex justify-center font-semibold">
          La recette
          <span class="text-[#43c841] ml-1"> magique </span>
        </div>
      </div>
      <Card class="dark:bg-[#2D2C2E] mt-5 border border-primary/10">
        <CardHeader class="flex flex-col items-center gap-4">
          <div class="flex justify-center">
            <Cannabis class="size-10 text-[#43c841]" />
          </div>
          <h3 class="text-2xl font-bold text-center light:text-[#2925244d]">
            Découvrez notre formule <span class="text-[#43c841]">unique</span>.
          </h3>
          <h4 class="text-md font-semibold mt-2 text-center">
            Comment les bienfaits de nos 7 plantes mythiques agissent pour
            transformer votre bien-être.
          </h4>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible class="w-full">
            <AccordionItem
              v-for="item in compositionDetails"
              :key="item.id"
              :value="item.id"
            >
              <AccordionTrigger class="hover:text-primary whitespace-normal">
                <div
                  class="flex flex-col md:flex-row md:gap-2 items-start w-full"
                >
                  <span class="block">{{ item.mainTitle }}</span>
                  <span
                    class="block md:inline text-sm md:text-base mt-1 md:mt-0"
                    >{{ item.subTitle }}</span
                  >
                </div>
              </AccordionTrigger>
              <AccordionContent
                class="text-muted-foreground space-y-4 px-4 pb-4"
              >
                <div class="whitespace-pre-wrap">
                  {{ item.content }}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
