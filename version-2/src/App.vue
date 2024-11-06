<template>
  <div class="flex flex-col items-center min-h-screen bg-gray-100">
    <header class="my-6">
      <h1 class="text-4xl font-extrabold text-blue-600 underline">
        Throw The Dice
      </h1>
    </header>

    <div v-if="!diceCountSelected" class="my-6 text-center">
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

    <div v-else class="w-full max-w-6xl">
      <!-- Two main sections: Dice and History -->
      <div class="flex flex-col md:flex-row gap-6 justify-center">
        <!-- Dice Cards and Result Section -->
        <div class="flex-1">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-6 justify-items-center"
          >
            <DiceComponent
              v-for="index in diceCount"
              :key="index"
              :member="index"
              :score="scores[index - 1]"
              :resultType="resultTypes[index - 1]"
              :isLoading="isLoading"
            />
          </div>

          <div class="my-4 text-center">
            <p class="text-2xl font-bold" :class="resultColor">
              {{ resultMessage }}
            </p>
          </div>

          <!-- Roll The Dice Button in the first section -->
          <div class="my-4 flex justify-center">
            <button
              @click="rollDice"
              class="w-full md:w-auto bg-green-600 text-white py-2 px-8 rounded-lg font-bold text-2xl"
            >
              Roll The Dice
            </button>
          </div>
        </div>

        <!-- Roll History Section -->
        <div class="flex-1">
          <div class="flex flex-col items-center gap-6">
            <RollHistory :history="history" @clear="clearHistory" />
          </div>
        </div>
      </div>
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
    const resultTypes = ref<string[]>([]);
    const history = ref<string[]>([]);
    const resultMessage = ref("");
    const resultColor = ref("");
    const isLoading = ref(false);

    const startRolling = () => {
      diceCountSelected.value = true;
      scores.value = Array(diceCount.value).fill(0);
      resultTypes.value = Array(diceCount.value).fill("");
    };

    const rollDice = () => {
      isLoading.value = true;
      resultMessage.value = "Rolling...";

      setTimeout(() => {
        scores.value = scores.value.map(
          () => Math.floor(Math.random() * 6) + 1
        );
        const highestScore = Math.max(...scores.value);
        const winners = scores.value
          .map((score, i) => (score === highestScore ? i + 1 : null))
          .filter(Boolean);

        if (winners.length > 1) {
          resultMessage.value = `It's a draw between ${winners.join(" and ")}`;
          resultColor.value = "text-blue-500";
          resultTypes.value = scores.value.map((score) =>
            score === highestScore ? "draw" : ""
          );
        } else {
          resultMessage.value = `Member ${winners[0]} Wins!`;
          resultColor.value = "text-green-500";
          resultTypes.value = scores.value.map((score, i) =>
            i + 1 === winners[0] ? "win" : ""
          );
        }

        history.value.unshift(resultMessage.value);
        if (history.value.length > 10) history.value.pop();

        isLoading.value = false;
      }, 1000);
    };

    const clearHistory = () => {
      history.value = [];
    };

    return {
      diceCount,
      diceCountSelected,
      scores,
      resultTypes,
      history,
      resultMessage,
      resultColor,
      isLoading,
      startRolling,
      rollDice,
      clearHistory,
    };
  },
};
</script>
