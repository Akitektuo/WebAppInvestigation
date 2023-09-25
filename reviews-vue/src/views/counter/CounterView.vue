<script setup lang="ts">
import { useCounterStore } from "./counter.store";
const store = useCounterStore();
</script>
<template>
    <div>
        <h1>Simple state management with a counter</h1>
        <p>Current count is {{ store.count }}</p>
        <p>Double of count is {{ store.doubleCount }}</p>
        <div class="actions">
            <button @click="store.decrement">Decrement</button>
            <button @click="store.increment">Increment</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.actions {
    display: flex;
    gap: 1rem;
    margin: .5rem;
}
</style>