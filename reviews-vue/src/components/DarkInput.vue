<script setup lang="ts">
import type { TextareaHTMLAttributes } from "vue";

interface Props extends /* @vue-ignore */ TextareaHTMLAttributes {
    isTextArea?: boolean;
}

const props = defineProps<Props>();
</script>
<template>
    <textarea v-if="isTextArea" class="dark-input" />
    <input v-else class="dark-input" v-bind="props" />
</template>
<style scoped lang="scss">
.dark-input {
    background-color: var(--color-background-mute);
    padding: .2em .4em;
    color: var(--color-text);
    border-color: var(--color-border);
    border-radius: .7em;
}
</style>