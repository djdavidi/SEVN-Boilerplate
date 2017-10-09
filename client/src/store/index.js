import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    projects: []
  },
  actions: {
    LOAD_ITEMS: ({ commit }) => {
      axios.get("/api/item").then((response) => {
        console.log("ITEMS", response)
        commit("SET_ITEMS", { list: response.data })
      }, (err) => {
        console.log("LOAD_Items Error: ", err);
      })
    },
    CREATE_ITEM: (state, {commit}) => {
    axios.post("/api/item").then((response) => {
        commit("SET_ITEMS", { item: response.data })
      }, (err) => {
        console.log("LOAD_Items Error: ", err);
      })
    }
  },
  mutations: {
    SET_ITEMS: (state, { list }) => {
      state.projects = list
    },
    ADD_ITEM: (state, {item}) => {
      state.projects.push(item)
    }
  },
  getters: {
    openProjects: state => {
      return state.projects;
    }
  }
})
export default store;