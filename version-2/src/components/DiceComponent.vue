<template>
  <div class="flex flex-col items-center">
    <button
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      @click="rollDice"
    >
      Roll Dice
    </button>
    <p v-if="result" class="text-lg mt-4">You rolled: {{ result }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";

const result = ref<number | null>(null);
const emit = defineEmits<{
  (event: "roll", value: number): void;
}>();

function rollDice() {
  const value = Math.floor(Math.random() * 6) + 1;
  result.value = value;
  emit("roll", value);
}
</script>

<style scoped>
/* Scoped component styles can be added here if needed */
</style>
