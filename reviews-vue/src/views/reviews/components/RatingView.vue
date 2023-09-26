<script setup lang="ts">
import classNames from "classNames";
import { MAXIMUM_NUMBER_OF_STARS } from "@/shared/constants";
import { Star } from "@/components";

interface Props {
    rating: number;
    isEdit?: boolean;
}

interface Emits {
    (e: "select", rating: number): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const handleClick = (rating: number) => {
    if (props.isEdit) {
        emits("select", rating);
    }
}
</script>
<template>
    <span 
        :class="classNames(`rating`, {
            [`is-edit`]: isEdit
        })">
        <Star 
            v-for="count in MAXIMUM_NUMBER_OF_STARS" 
            :key="count" 
            :class="classNames(`rating-star`, {
                missing: count > rating,
                [`is-edit`]: isEdit
            })"
            @click="handleClick(count)" />
    </span>
</template>
<style scoped lang="scss">
$missing-opacity: .1;
$default-size: 1.5rem;
$enlarged-size: 2rem;

@mixin selected {
    opacity: 1;
    height: $enlarged-size;
    width: $enlarged-size;
}

@mixin missing {
    opacity: $missing-opacity;
    height: $default-size;
    width: $default-size;
}

.rating {
    display: flex;
    align-items: center;

    &.is-edit {
        cursor: pointer;

        &:hover .rating-star,
        .rating-star:hover {
            @include selected();
        }

        .rating-star:hover ~ .rating-star {
            @include missing();
        }
    }

    .rating-star {
        transition: all .2s ease-in-out;
        height: $default-size;
        width: $default-size;

        &.missing {
            opacity: $missing-opacity;
        }
    }
}
</style>