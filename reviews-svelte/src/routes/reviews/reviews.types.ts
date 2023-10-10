export interface ReviewType {
    title: string;
    username: string;
    rating: number;
    description: string;
}

export const EMPTY_REVIEW: ReviewType = {
    title: "",
    username: "",
    rating: 0,
    description: ""
};