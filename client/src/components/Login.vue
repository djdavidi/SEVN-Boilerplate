<template>
  <div class="login-page">
   <button @click="loginUser"></button>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";
export default {
  name: "login",
  data () {
    return {
      welcomeMessage: "Welcome to the SEVN Boilerplate"
    }
  },
  computed: mapState([
  "projects"
  ]),
  methods: {
    loginUser() {
      axios.get("/api/login")
      .then((result) => {
        if(result.user) {
          // redirect home logged in
        } else {
          // show error and prompt again
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>