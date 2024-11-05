<template>
  <div class="flex flex-col items-center p-8 space-y-6">
    <h1 class="text-2xl font-semibold">Random Dice Roller</h1>

    <div v-if="!gameStarted">
      <label class="text-lg">How many dice to roll? (1-6)</label>
      <input
        type="number"
        min="1"
        max="6"
        v-model="diceCount"
        class="border rounded px-4 py-2 text-center mt-2"
      />
      <button
        @click="startGame"
        class="mt-4 bg-blue-500 text-white px-6 py-2 rounded"
      >
        Start Rolling
      </button>
    </div>

    <div v-else>
      <button
        @click="rollDice"
        class="bg-green-500 text-white px-6 py-2 rounded"
      >
        Roll Dice
      </button>
      <div class="mt-4 text-lg">Current Roll: {{ currentRoll }}</div>
      <roll-history
        :history="history"
        @clear="clearHistory"
        @deleteEntry="deleteHistoryEntry"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import RollHistoryComponent from "./components/RollHistoryComponent.vue";

export default {
  components: { RollHistoryComponent },
  setup() {
    const diceCount = ref<number | null>(null);
    const history = ref<number[][]>([]);
    const currentRoll = ref<number[]>([]);
    const gameStarted = ref(false);

    const startGame = () => {
      if (diceCount.value && diceCount.value >= 1 && diceCount.value <= 6) {
        gameStarted.value = true;
      } else {
        alert("Please enter a valid number of dice (1-6).");
      }
    };

    const rollDice = () => {
      if (!diceCount.value) return;
      const roll = Array.from(
        { length: diceCount.value },
        () => Math.floor(Math.random() * 6) + 1
      );
      currentRoll.value = roll;
      history.value.unshift(roll);

      if (history.value.length > 10) {
        history.value.pop();
      }
      if (history.value.length >= 11) {
        resetGame();
      }
    };

    const deleteHistoryEntry = (index: number) => {
      history.value.splice(index, 1);
    };

    const clearHistory = () => {
      history.value = [];
    };

    const resetGame = () => {
      alert("11 attempts reached! Restarting.");
      history.value = [];
      gameStarted.value = false;
      diceCount.value = null;
    };

    return {
      diceCount,
      currentRoll,
      gameStarted,
      history,
      startGame,
      rollDice,
      deleteHistoryEntry,
      clearHistory,
    };
  },
};
</script>

<style scoped>
/* Additional Tailwind-based styles if needed */
</style>
