<template>
    <button class="text-button">
        <slot></slot>
    </button>
</template>
<style scoped lang="scss">
.text-button {
    background: none;
    border: none;
    color: hsl(160, 100%, 37%);
    font-weight: bold;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
    transition: all .1s ease-in-out;
    padding: .5em 1em;

    &:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
    }
}
</style>