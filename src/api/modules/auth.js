import api from '@/api/api'

export default {
  login () {
    console.log('login req')

    api.post('/api/login.js')
  }
}
