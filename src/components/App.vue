<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    data () {
      return {
        section: 'Head'
      }
    },
    methods: {
      ...mapActions([ 'fetchSessions', 'fetchGyms' ]),
      logout () {
        this.$store.commit('SET_USER', null)
        this.$store.commit('SET_TOKEN', null)

        if (window.localStorage) {
          window.localStorage.setItem('user', null)
          window.localStorage.setItem('token', null)
        }

        this.$router.push('/login')
      }
    },
    mounted () {
      this.fetchSessions()
      this.fetchGyms()
    }
  }
</script>

<style>
body {
  font-family: 'Avenir', 'Lato', Arial, Helvetica, sans-serif;
}

.datetime-picker input {
	height: 3em !important;
}

.input-group :first-child {
  border-radius: 20px 0 0 20px !important;
}
.input-group  :last-child {
  border-radius: 0 20px 20px 0 !important;
}
.input-group .datetime-picker :not(last-child) {
  border-radius: 0 20px 20px 0 !important;
}

.input-group > input:first-child,
:not(.input-group) > input {
  border-radius: 20px 20px 20px 20px !important;
}
</style>

