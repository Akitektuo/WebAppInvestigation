<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface Props {
    isOpen?: boolean;
}

interface Emits {
    (e: "clickOutside"): void;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();

const handleBackgroundClick = () => {
    emit("clickOutside");
}

const handleContainerClick = (event: MouseEvent) => {
    event.stopPropagation();
}
</script>
<template>
    <div v-if="props.isOpen" class="dialog-background" @mousedown="handleBackgroundClick">
        <div class="dialog-container" @mousedown="handleContainerClick">
            <slot></slot>
        </div>
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