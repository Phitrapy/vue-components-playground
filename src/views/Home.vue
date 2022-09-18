<script setup lang="ts"></script>

<template>
  <div class="layout-home">
    <div>
      <a href="https://github.com/phitrapy" target="_blank">
        <img
          src="https://avatars.githubusercontent.com/u/15626586?v=4"
          class="logo"
          alt="Vite logo"
        />
      </a>
    </div>
    <h1>Components Playground</h1>

    <router-link to="/separators">Separators</router-link>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.layout-home {
  max-width: 1280px;
  margin: auto auto;
  padding: 2rem;
  text-align: center;
}
</style>
