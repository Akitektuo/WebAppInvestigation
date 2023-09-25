<script setup lang="ts">
import ReviewView from "./components/ReviewView.vue";
import AddButton from "../../components/AddButton.vue";
import Dialog from "../../components/Dialog.vue";
import { useReviewsStore } from "./reviews.store";

const store = useReviewsStore();
const handleClose = () => {
    console.log("Will close");
}
</script>
<template>
    <div>
        <div class="header">
            <h1>Reviews ({{ store.reviewsCount }} in total)</h1>
            <AddButton />
        </div>
        <ReviewView :review="review" class="review" v-for="review in store.reviews" :key="review.title" />
    </div>
    <Dialog @close="handleClose"></Dialog>
</template>
<style lang="scss" scoped>
.header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}

.review {
    border-top: .1rem solid;
    padding: 1rem .5rem;
}
</style>