<template>
  <div id="main-view">
    <!-- Header -->
    <header>
      <main-header/>
    </header>

    <!-- Main -->
    <main>
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer>
      <main-footer/>
    </footer>
  </div>
</template>

<script src="./main.js"></script>

<style lang="scss">
  @import './main.scss';
</style>

