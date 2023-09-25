<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface Emits {
    (e: "open"): void;
    (e: "close"): void;
}
const emit = defineEmits<Emits>();

const handleBackgroundClick = () => {
    emit("close");
}

const handleContainerClick = (event: MouseEvent) => {
    event.stopPropagation();
}
</script>
<template>
    <div class="dialog-background" @click="handleBackgroundClick">
        <div class="dialog-container" @click="handleContainerClick">A</div>
    </div>
</template>
<style lang="scss" scoped>
.dialog-background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .dialog-container {
        background-color: var(--color-background-soft);
        padding: 1rem;
        border-radius: 1rem;
    }
}
</style>