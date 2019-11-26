<template>
  <div>
    <h1>Авторизоваться</h1>
    <button @click="startLogin">Авторизоваться</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Auth',
  methods: {
    ...mapActions('auth', ['login']),

    startLogin () {
      this.login()
        .then(() => this.$router.push({ name: 'home' }))
        .catch({})
    }
  }
}
</script>

<style lang="scss">

</style>
