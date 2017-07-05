<template>
  <div class="user-profile-page">
   <h1>User Profile</h1>
    <div class="user-details">
      <div>{{user.name}}</div> 
      <div>{{user.email}}</div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "user-profile",
  data () {
    return {
    }
  },
  computed: mapState([
  "user"
  ]),
  created: () {
    $store.dispatch("fetchUser");
  }
}
</script>

<style scoped>
  .user-profile-page {
    width: 100%;
    height: 100%;
  }
</style>
