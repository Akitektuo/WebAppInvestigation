import { ref } from "vue";
import { defineStore } from "pinia";
import { EMPTY_REVIEW, type ReviewType } from "../reviews.types";
import { copy } from "@/shared/utils";

export const useAddReviewStore = defineStore("add-review", () => {
    const review = ref<ReviewType>(copy(EMPTY_REVIEW));

    const setTitle = (title: string) => review.value.title = title;

    const setUsername = (username: string) => review.value.username = username;

    const setRating = (rating: number) => review.value.rating = rating;

    const setDescription = (description: string) => review.value.description = description;

    const reset = () => review.value = copy(EMPTY_REVIEW);

    return { review, setTitle, setUsername, setRating, setDescription, reset };
});