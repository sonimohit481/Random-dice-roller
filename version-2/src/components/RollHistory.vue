<template>
  <div class="my-6 w-full max-w-md mx-auto">
    <h2 class="text-xl font-bold text-gray-700 mb-4">Roll History</h2>
    <ul class="list-disc pl-5">
      <li
        v-for="(entry, index) in history"
        :key="index"
        :class="[
          'text-gray-600',
          entry.includes('Wins')
            ? 'text-green-500'
            : entry.includes('draw')
            ? 'text-blue-500'
            : '',
        ]"
      >
        {{ entry }}
      </li>
    </ul>
    <button
      @click="$emit('clear')"
      class="w-full mt-4 py-2 bg-red-500 text-white font-bold rounded"
    >
      Clear History
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    history: { type: Array as PropType<string[]>, required: true },
  },
});
</script>
