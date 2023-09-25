<script setup lang="ts">
import { type ReviewType } from "../reviews.types";
import RatingView from "./RatingView.vue";

interface Props {
  review: ReviewType;
}

defineProps<Props>();
</script>
<template>
    <div>
        <div class="header">
            <div>
                <h2 class="green">{{ review.title }}</h2>
                <h3>By {{ review.username }}</h3>
            </div>
            <RatingView :rating="review.rating" />
        </div>
        <p>{{ review.description }}</p>
    </div>
</template>
<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
}
</style>