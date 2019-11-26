import api from '@/api/api'

export default {
  login () {
    return api.post('/api/login.js')
  }
}
