<template>
    <button class="add-button">+</button>
</template>
<style lang="scss" scoped>
.add-button {
    font-size: 2rem;
    background: none;
    color: var(--color-text);
    border-radius: 1em;
    line-height: 0;
    width: 1em;
    height: 1em;
    text-align: center;
    border: .1rem solid;
    cursor: pointer;

    &:hover {
        color: hsl(160, 100%, 37%);
        border-color: hsl(160, 100%, 37%);
    }
}
</style>