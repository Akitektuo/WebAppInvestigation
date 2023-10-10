import { derived, writable } from "svelte/store";
import type { ReviewType } from "./reviews.types";
import { round } from "../../shared/utils";

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
}, {
    title: "Default state management is awesome!",
    username: "Luke",
    rating: 5,
    description: "I was amazed how similar, powerful and boiler-plate free the state management with Pinia is. It feels very similar to MobX. There doesn't seem to be any weird glitches, but when setting default objects, a deep copy should always be used."
}];

const createReviewsStore = () => {
    const reviews = writable(PREDEFINED_REVIEWS);
    const isAddDialogOpen = writable(false);

    const averageRating = derived(reviews, reviews => {
        const totalRatingsSum = reviews.map(({ rating }) => rating)
            .reduce((accumulated, rating) => accumulated + rating);

        const average = totalRatingsSum / reviews.length;
        return round(average);
    });

    const setIsAddDialogOpen = (isOpen: boolean) => isAddDialogOpen.set(isOpen);
    const add = (review: ReviewType) => reviews.update(existingReviews => [...existingReviews, review]);

    return { reviews, isAddDialogOpen, averageRating, setIsAddDialogOpen, add };
}

export const reviewsStore = createReviewsStore();