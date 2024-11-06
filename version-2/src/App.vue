<template>
  <div class="flex flex-col items-center min-h-screen bg-gray-100">
    <header class="my-6">
      <h1 class="text-4xl font-extrabold text-blue-600 underline">
        Throw The Dice
      </h1>
    </header>

    <div v-if="!diceCountSelected" class="my-6">
      <label class="text-lg font-semibold text-gray-700"
        >Choose Number of Dice:</label
      >
      <select
        v-model="diceCount"
        class="ml-4 p-2 rounded border border-gray-300"
      >
        <option v-for="n in 5" :key="n" :value="n + 1">{{ n + 1 }}</option>
      </select>
      <button
        @click="startRolling"
        class="ml-4 px-4 py-2 bg-green-500 text-white font-bold rounded"
      >
        Start
      </button>
    </div>

    <div v-else class="w-full max-w-3xl">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <DiceComponent
          v-for="index in diceCount"
          :key="index"
          :member="index"
          :score="scores[index - 1]"
        />
      </div>

      <div class="my-4">
        <button
          @click="rollDice"
          class="w-full md:w-1/2 bg-green-600 text-white py-2 rounded-lg font-bold text-2xl"
        >
          Roll The Dice
        </button>
      </div>

      <div class="my-4">
        <p class="text-2xl font-bold text-center" :class="resultColor">
          {{ resultMessage }}
        </p>
      </div>

      <RollHistory :history="history" @clear="clearHistory" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import DiceComponent from "./components/DiceComponent.vue";
import RollHistory from "./components/RollHistory.vue";

export default {
  components: { DiceComponent, RollHistory },
  setup() {
    const diceCount = ref(2);
    const diceCountSelected = ref(false);
    const scores = ref<number[]>([]);
    const history = ref<string[]>([]);
    const resultMessage = ref("");
    const resultColor = ref("");

    const startRolling = () => {
      diceCountSelected.value = true;
      scores.value = Array(diceCount.value).fill(0);
    };

    const rollDice = () => {
      resultMessage.value = "Rolling...";
      scores.value = scores.value.map(() => Math.floor(Math.random() * 6) + 1);

      setTimeout(() => {
        const highestScore = Math.max(...scores.value);
        const winners = scores.value
          .map((score, i) => (score === highestScore ? i + 1 : null))
          .filter(Boolean);

        if (winners.length > 1) {
          resultMessage.value = `It's a draw between ${winners.join(" and ")}`;
          resultColor.value = "text-blue-500";
        } else {
          resultMessage.value = `Member ${winners[0]} Wins!`;
          resultColor.value = "text-green-500";
        }

        history.value.unshift(resultMessage.value);
        if (history.value.length > 10) history.value.pop();
      }, 1000);
    };

    const clearHistory = () => {
      history.value = [];
    };

    return {
      diceCount,
      diceCountSelected,
      scores,
      history,
      resultMessage,
      resultColor,
      startRolling,
      rollDice,
      clearHistory,
    };
  },
};
</script>
