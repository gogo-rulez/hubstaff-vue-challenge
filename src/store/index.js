import Vue from 'vue'
import Vuex from 'vuex'
import teamMembers from '@/store/modules/teamMembers';

Vue.use(Vuex)

// instead of having the store in one place
// we use modules for each part of the app

export default new Vuex.Store({
  modules: {
    teamMembers
  }
})
