<script>
    import Star from "../../components/Star.svelte";

</script>
<svelte:head>
    <title>Reviews</title>
    <meta name="reviews" content="Sample of more complex state management" />
</svelte:head>

<div>
    <div class="header">
        <h1>Reviews (0 in total - average of 0 <Star size={28} />)</h1>
        <!-- <AddButton @click="handleAddClick" /> -->
    </div>
    <!-- <ReviewView :review="review" class="review" v-for="review in store.reviews" :key="review.title" /> -->
</div>
<!-- <AddReviewDialog :is-open="store.isAddDialogOpen" @cancel="handleClose" @submit="handleNewReview" /> -->