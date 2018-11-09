<template>
  <div>
    <h1 class="text-center">My Gyms</h1>
    <section class="content" style="top:100%">
      <div class="row">
        <div v-for="(gym, key) in gyms" :key="key" class="col-md-3">
          <div class="box box-info">
            <div class="box-header"><h3>{{gym.name}}</h3></div>
            <div class="box-footer"><em>{{gym.address}}</em></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
require('moment')
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Gyms',
  computed: {
    ...mapState([ 'gyms' ])
  },
  methods: {
    ...mapActions([ 'fetchGyms' ])
  },
  mounted () {
    this.fetchGyms()
  }
}
</script>
