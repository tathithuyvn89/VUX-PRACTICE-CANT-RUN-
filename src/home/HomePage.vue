<template>
  <div>
      <h1>Hi {{user.username}}</h1>
      <p>You're logged in with vue + Vuex + JWT</p>
      <h3>Users from secure api end point</h3>
      <em v-if="users.loading">Loading users..</em>
      <span v-if="user.error" class="text-danger">
          ERROR: {{user.error}}
      </span>
      <ul v-if="users.items">
          <li v-for="user in users.items" :key="user.id">
              {{user.fullname}}
          </li>
      </ul>
      <router-link to="/logout">Log Out</router-link>
  </div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.$store.authentication.user;
        },

        users() {
            return this.$store.state.uses.all;
        },
        created() {
            this.$store.dispath('users/getAll');
        }

    }

};
</script>

<style>

</style>