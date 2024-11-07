<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
//import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { AlertCircle,  } from "lucide-vue-next"; 
//(Stuff that was coming from lucide-vue-next) Building2, Phone, Mail, Clock
import { userService } from "@/services/userService";

interface ContactFormeProps {
  firstName: string;
  lastName: string;
  email: string;
  // subject: string;
  // message: string;
}

const contactForm = reactive<ContactFormeProps>({
  firstName: "",
  lastName: "",
  email: "",
  // subject: "Web Development",
  // message: "",
});

const isSubmitting = ref(false);
const invalidInputForm = ref<boolean>(false);
const successMessage = ref<string>("");
const errorMessage = ref<string>("");
const showSuccess = ref(false);

const handleSubmit = async () => {
  try {
    // Reset states
    invalidInputForm.value = false;
    errorMessage.value = "";
    successMessage.value = "";
    showSuccess.value = false;

    // Validate form
    if (!contactForm.firstName || !contactForm.lastName || !contactForm.email) {
      invalidInputForm.value = true;
      errorMessage.value = "Please fill in all required fields.";
      return;
    }

    isSubmitting.value = true;

    // Send user data to backend
    const response = await userService.createUser({
      firstName: contactForm.firstName,
      lastName: contactForm.lastName,
      email: contactForm.email,
    });

    // Show success message
    successMessage.value = 
      `Thank you ${response.user.firstName} for registering! Please check your email (${response.user.email}).`;
    showSuccess.value = true;


    // Optionally, reset the form after successful submission
    contactForm.firstName = "";
    contactForm.lastName = "";
    contactForm.email = "";
    // contactForm.subject = "Web Development";
    // contactForm.message = "";

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  } catch (error: any) {
    invalidInputForm.value = true;
    errorMessage.value =
      error.response?.data?.message || "An error occurred. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="container py-24 sm:py-32">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <h2 class="text-3xl md:text-4xl font-bold">Connect With Us</h2>
      <!-- <div>
        <div class="mb-4">
          <h2 class="text-lg text-primary mb-2 tracking-wider">Contact</h2>

        </div>
        <p class="mb-8 text-muted-foreground lg:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          ipsam sint enim exercitationem ex autem corrupti quas tenetur
        </p>

        <div class="flex flex-col gap-4">
          <div>
            <div class="flex gap-2 mb-1">
              <Building2 />
              <div class="font-bold">Find Us</div>
            </div>

            <div>742 Evergreen Terrace, Springfield, IL 62704</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Phone />
              <div class="font-bold">Call Us</div>
            </div>

            <div>+1 (619) 123-4567</div>
          </div>

          <div>
            <div class="flex gap-2 mb-1">
              <Mail />
              <div class="font-bold">Mail Us</div>
            </div>

            <div>leomirandadev@gmail.com</div>
          </div>

          <div>
            <div class="flex gap-2">
              <Clock />
              <div class="font-bold">Visit Us</div>
            </div>

            <div>
              <div>Monday - Friday</div>
              <div>8AM - 4PM</div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- form -->
      <Card class="bg-muted/60 dark:bg-card">
        <CardHeader class="text-primary text-2xl"> </CardHeader>
        <CardContent>
          <form @submit.prevent="handleSubmit" class="grid gap-4">
            <!-- Success Message -->
            <Transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="transform -translate-y-2 opacity-0"
              enter-to-class="transform translate-y-0 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="transform translate-y-0 opacity-100"
              leave-to-class="transform -translate-y-2 opacity-0"
            >
              <Alert
                v-if="showSuccess"
                variant="default"
                class="bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-800"
              >
                <AlertCircle
                  class="w-4 h-4 text-green-600 dark:text-green-400"
                />
                <AlertTitle class="text-green-800 dark:text-green-200"
                  >Success</AlertTitle
                >
                <AlertDescription class="text-green-700 dark:text-green-300">
                  {{ successMessage }}
                </AlertDescription>
              </Alert>
            </Transition>
            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex flex-col w-full gap-1.5">
                <Label for="first-name">First Name</Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder="Jacob"
                  v-model="contactForm.firstName"
                  required
                  :disabled="isSubmitting"
                />
              </div>

              <div class="flex flex-col w-full gap-1.5">
                <Label for="last-name">Last Name</Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder="Jones"
                  v-model="contactForm.lastName"
                  required
                  :disabled="isSubmitting"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Mrniceguy@Lille.com"
                v-model="contactForm.email"
                required
                :disabled="isSubmitting"
              />
            </div>

            <!-- <div class="flex flex-col gap-1.5">
              <Label for="subject">Subject</Label>

              <Select v-model="contactForm.subject">
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Mobile Development">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="Figma Design"> Figma Design </SelectItem>
                    <SelectItem value="REST API "> REST API </SelectItem>
                    <SelectItem value="FullStack Project">
                      FullStack Project
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div> -->

            <!-- <div class="flex flex-col gap-1.5">
              <Label for="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows="5"
                v-model="contactForm.message"
              />
            </div> -->

            <Alert v-if="invalidInputForm" variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                There is an error in the form. Please check your input.
              </AlertDescription>
            </Alert>

            <Button
              class="mt-4"
              :disabled="isSubmitting"
              :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
            >
              {{ isSubmitting ? "Sending..." : "Send message" }}
            </Button>
          </form>
        </CardContent>

        <CardFooter></CardFooter>
      </Card>
    </section>
  </section>
</template>
<style scoped>
.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
