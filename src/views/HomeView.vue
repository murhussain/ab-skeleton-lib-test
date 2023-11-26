<template>
  <div>
    <h1>Home</h1>
    <p>Home page content</p>
    <special-uploader :customImg="randomImg"/>
  </div>
</template>

<script setup lang="ts">
const randomImg = () => `https://picsum.photos/200/300?random=${Math.random()}`;
</script>