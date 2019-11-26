import api from '@/api'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    login () {
      console.log('login')

      return api.auth.login()
    }
  }
}
