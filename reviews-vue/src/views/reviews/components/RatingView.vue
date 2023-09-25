<script setup lang="ts">
interface Props {
    rating: number;
}

defineProps<Props>();
</script>
<template>
    <span>
        <img alt="star" src="https://img.icons8.com/fluency/24/star--v1.png" v-for="count in rating" :key="count" />
    </span>
</template>