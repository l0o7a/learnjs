<script setup>
import { RouterLink } from 'vue-router';


</script>
<template>
    <div class="tabs is-centered">
  <ul>
        <li :class="{'is-active': $route.path === '/'}">
            <RouterLink to="/">Todo</RouterLink></li>

        <li :class="{'is-active': $route.path === '/modals'}">
            <router-link to="/modals">modals</router-link></li>


  </ul>
</div>
</template>