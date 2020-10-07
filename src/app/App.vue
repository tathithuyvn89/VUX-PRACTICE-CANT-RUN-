<template>
  <div class="jumbotron">
      <div class="container">
          <div class="row">
              <div class="col-ms-6 offset-ms-3">
                  <div v-if= "alert.message" :class="`alert ${alert.type}`">
                      {alert.message}
                  </div>
                  <router-view></router-view>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
   name: 'app',
   computed: {
       alert() {
           return this.$store.state.alert;
       }
   },
   watch: {
       $router(to,from) {
           //Xoa aleart khi location thay doi
           this.$store.dispatch('alert/clear')
       }
   }
}
</script>

<style>

</style>