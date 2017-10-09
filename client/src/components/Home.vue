<template>
  <div class="home-page">
    {{welcomeMessage}}
    <button @click="addItem">click me</button>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "home",
  data () {
    return {
      welcomeMessage: "Welcome to the SEVN Boilerplate"
    }
  },
  computed: mapState([
  "projects"
  ]),
  methods: {
    addItem() {
      this.$store.dispatch()
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