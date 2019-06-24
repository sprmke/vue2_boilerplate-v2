<template>
  <div id="login-view">
    <div class="login-form">
      <form @submit.prevent="onSubmit">
        <div class="inputs">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email">
        </div>
        <div class="inputs">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./login.js"></script>

<style lang="scss" scoped>
  @import './login.scss';
</style>
