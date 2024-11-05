<template>
  <div class="w-full mt-6">
    <h2 class="text-xl font-medium mb-4">Roll History</h2>
    <ul class="space-y-2">
      <li
        v-for="(entry, index) in history"
        :key="index"
        class="flex justify-between items-center p-2 bg-gray-100 rounded"
      >
        <span>Roll {{ index + 1 }}: {{ entry.join(", ") }}</span>
        <button
          @click="$emit('deleteEntry', index)"
          class="text-red-500 hover:underline"
        >
          Delete
        </button>
      </li>
    </ul>
    <button
      @click="$emit('clear')"
      class="mt-4 bg-red-500 text-white px-4 py-2 rounded"
    >
      Clear All
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    history: {
      type: Array as PropType<number[][]>,
      required: true,
    },
  },
});
</script>

<style scoped>
/* Optional Tailwind customizations */
</style>
