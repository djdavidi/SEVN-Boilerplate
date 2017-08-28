import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login"
import UserProfile from "@/components/User-Profile";

Vue.use(Router);
// show id example, going to user profile here.
export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path:"/login",
      name: "Login",
      component: Login
    }
    {
   		path:"/user/:id",
   		name: "UserProfile",
   		component: UserProfile
    }
  ]
});
