import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { ReviewType } from "./reviews.types";

const PREDEFINED_REVIEWS: ReviewType[] = [{
    title: "Template review",
    username: "Ion",
    rating: 4,
    description: "I liked the predefined options (TS, scoping, routing, stores) and the template covers a few good examples of how Vue functions."
}, {
    title: "JS interpolation",
    username: "Dan",
    rating: 2,
    description: "It is nice that you can interpolate HTML with JS, but it seems weird and inconsistent. In some places you use {{}}, for events @action and for binding values :property."
}, {
    title: "Weird linting issues",
    username: "Ana",
    rating: 3,
    description: "Autocompletion is very good when it works, but it has random moments when it fails and the linting gets messed-up where it does not recognize variables and color highlighting becomes random."
}]

export const useReviewsStore = defineStore("reviews", () => {
    const reviews = ref<ReviewType[]>(PREDEFINED_REVIEWS);
    const reviewsCount = computed(() => reviews.value.length);

    return { reviews, reviewsCount };
});