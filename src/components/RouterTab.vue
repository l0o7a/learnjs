<script setup>
import { RouterLink } from 'vue-router';


</script>
<template>
    <div class="tabs is-centered">
  <ul>
        <li><RouterLink to="/">Todo</RouterLink></li>
        <li><router-link to="/modals">modals</router-link></li>
        <li><a href="/modals">modals</a></li>

  </ul>
</div>
</template>