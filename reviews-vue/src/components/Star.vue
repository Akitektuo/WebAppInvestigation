<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface Props {
    size?: number;
}

defineProps<Props>();
</script>
<template>
<img alt="star" :src="`https://img.icons8.com/fluency/${size || 32}/star--v1.png`" draggable="false" />
</template>