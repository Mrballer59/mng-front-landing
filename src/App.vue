<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
// import Hero from './components/Hero.vue';
import HeroTwo from "./components/Hero_copy.vue";
// import Benefits from './components/Benefits.vue';
import Features from "./components/Features.vue";
import Services from "./components/Services.vue";
// import HowItWorks from './components/HowItWorks.vue';
// import Sponsors from './components/Sponsors.vue';
import Testimonials from "./components/Testimonials.vue";
//import Team from "./components/Team.vue";
//import Pricing from "./components/Pricing.vue";
//import Community from "./components/Community.vue";
import Contact from "./components/Contact.vue";
//import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";
import AccordionSection from "./components/AccordionSection.vue";
import CTASection from "./components/CTASection.vue";
import BackToTop from "./components/custom/BackToTop.vue";
import ModalPopup from "./components/ui/modal/Modal-popup.vue";
</script>

<template>
  <Navbar />
  <!-- <Hero /> -->
  <HeroTwo />
  <Features />
  <AccordionSection />
  <Testimonials />
  <Services />
  <CTASection />
  <Contact />
  <ModalPopup />
  <!-- <Benefits /> -->
  <!-- <HowItWorks /> -->
  <!-- <Sponsors /> -->
  <!-- <Team /> -->
  <!-- <Community /> -->
  <!-- <Pricing /> -->
  <!-- <FAQ /> -->
  <Footer />
  <BackToTop />
</template>
