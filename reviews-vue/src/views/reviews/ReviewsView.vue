<script setup lang="ts">
import ReviewView from "./components/ReviewView.vue";
import { useReviewsStore } from "./reviews.store";
import AddReviewDialog from "./add/AddReviewDialog.vue";
import type { ReviewType } from "./reviews.types";
import { AddButton, Star } from "@/components";

const store = useReviewsStore();

const handleAddClick = () => store.setIsAddDialogOpen(true);
const handleClose = () => store.setIsAddDialogOpen(false);
const handleNewReview = (review: ReviewType) => {
    store.add(review);
    handleClose();
}
</script>
<template>
    <div>
        <div class="header">
            <h1>Reviews ({{ store.reviewsCount }} in total - average of {{ store.averageRating }} <Star :size="28" />)</h1>
            <AddButton @click="handleAddClick" />
        </div>
        <ReviewView :review="review" class="review" v-for="review in store.reviews" :key="review.title" />
    </div>
    <AddReviewDialog :is-open="store.isAddDialogOpen" @cancel="handleClose" @submit="handleNewReview" />
</template>
<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.review {
    border-top: .1rem solid;
    padding: 1rem .5rem;
}
</style>