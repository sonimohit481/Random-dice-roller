<template>
  <div class="player p-4 bg-white rounded-lg shadow-md text-center">
    <img src="./image/dice2.png" alt="Dice" class="w-full h-20 mx-auto mb-4" />
    <span class="block text-4xl font-extrabold text-gray-700">{{ score }}</span>
    <p class="text-sm font-semibold text-gray-500">Dice {{ member }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    member: { type: Number, required: true },
    score: { type: Number, required: true },
  },
});
</script>

<style scoped>
/* Custom styling */
</style>
