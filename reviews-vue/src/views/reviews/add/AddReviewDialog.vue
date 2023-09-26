<script setup lang="ts">
import { Dialog, DarkInput, TextButton } from "@/components";
import { useAddReviewStore } from "./add-review.store";
import { watch } from "vue";
import type { ReviewType } from "../reviews.types";
import RatingView from "../components/RatingView.vue";

interface Props {
    isOpen?: boolean;
}

interface Emits {
    (e: "cancel"): void;
    (e: "submit", review: ReviewType): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const store = useAddReviewStore();

watch(() => props.isOpen, isOpen => {
    if (!isOpen) {
        store.reset();
    }
});
const extractValue = (event: Event) => (event.target as HTMLInputElement).value;
const handleTitleChange = (event: Event) => store.setTitle(extractValue(event));
const handleUsernameChange = (event: Event) => store.setUsername(extractValue(event));
const handleDescriptionChange = (event: Event) => store.setDescription(extractValue(event));
const handleCancelClick = () => emits("cancel");
const handleSubmitClick = () => emits("submit", store.review);
</script>
<template>
    <Dialog :is-open="props.isOpen" @click-outside="handleCancelClick">
        <div class="add-review-dialog-container">
            <h2>Submit a review</h2>
            <div class="add-review-dialog-controls">
                <div class="add-review-dialog-control">
                    <h4>Title:</h4>
                    <DarkInput autofocus :value="store.review.title" @change="handleTitleChange" />
                </div>
                <div class="add-review-dialog-control">
                    <h4>Username:</h4>
                    <DarkInput :value="store.review.username" @change="handleUsernameChange" />
                </div>
                <div class="add-review-dialog-control">
                    <h4>Rating:</h4>
                    <RatingView class="rating" is-edit :rating="store.review.rating" @select="store.setRating" />
                </div>
                <div class="add-review-dialog-control">
                    <h4>Description:</h4>
                    <DarkInput 
                        is-text-area 
                        class="description-input" 
                        :value="store.review.description" 
                        @change="handleDescriptionChange" />
                </div>
            </div>
            <div class="add-review-dialog-actions">
                <TextButton @click="handleCancelClick">Cancel</TextButton>
                <TextButton @click="handleSubmitClick">Submit</TextButton>
            </div>
        </div>
    </Dialog>
</template>
<style scoped lang="scss">
.add-review-dialog-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .add-review-dialog-controls {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        .add-review-dialog-control {
            .rating {
                min-height: 2rem;
                margin: auto 0;
            }

            .description-input {
                min-width: 24rem;
                min-height: 12rem;
            }
        }
    }

    .add-review-dialog-actions {
        display: flex;
        justify-content: end;
        gap: .5rem;
    }
}
</style>