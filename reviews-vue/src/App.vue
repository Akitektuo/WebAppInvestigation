<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { HelloWorld } from "@/components";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld message="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/counter">Counter</RouterLink>
        <RouterLink to="/reviews">Reviews</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped src="./App.scss" />
