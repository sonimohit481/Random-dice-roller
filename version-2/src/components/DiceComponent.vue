<template>
  <div
    :class="[
      'player',
      resultClass,
      'p-4 bg-white rounded-lg shadow-md text-center',
    ]"
  >
    <img
      v-if="!isLoading"
      src="../assets/dice2.png"
      alt="Dice"
      class="w-full h-20 mx-auto mb-4"
    />
    <img
      v-else
      src="../assets/Dice.gif"
      alt="Loading"
      class="w-40 h-40 mx-auto"
    />
    <span
      v-if="!isLoading"
      class="block text-4xl font-extrabold text-gray-700"
      >{{ score }}</span
    >
    <p class="text-sm font-semibold text-gray-500">Dice {{ member }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    member: { type: Number, required: true },
    score: { type: Number, required: true },
    resultType: { type: String, required: false, default: "" },
    isLoading: { type: Boolean, required: true },
  },
  setup(props) {
    const resultClass = computed(() => {
      if (props.resultType === "win")
        return "bg-green-100 border border-green-500";
      if (props.resultType === "draw")
        return "bg-blue-100 border border-blue-500";
      return "";
    });

    return { resultClass };
  },
});
</script>

<style scoped>
.player {
  width: 180px;
  height: 200px;
}
</style>
