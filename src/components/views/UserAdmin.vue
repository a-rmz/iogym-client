<template>
  <div>
    <section class="content" style="top:100%">
      <div class="row center-block">
        <button type="button" class="btn btn-success" style="float:right;">
          Add user <span><i class="fas fa-plus-circle"></i></span>
        </button>
      </div>
      <br/>
      <div class="row">
        <div v-for="(user, key) in users" :key="key" class="col-md-3">
          <div class="box box-info">
            <div class="box-header"><h4>{{user.first_name}} {{user.last_name}}</h4></div>
            <div class="box-body">
              <p>{{formatBirthday(user.birthday)}}</p>
              <a :href="`mailto:${user.email}`">{{user.email}}</a>
            </div>
            <div class="box-footer">
              <button type="button" class="btn btn-danger" style="float:right;">Deactivate account</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'UserAdmin',
  computed: {
    ...mapState({
      gyms: 'gyms',
      activeGym: state => state.gyms.find(gym => gym.is_admin),
      users: state => state.users[state.gyms.find(gym => gym.is_admin).gym_id]
    })
  },
  methods: {
    ...mapActions([ 'fetchUsersByGym' ]),
    formatBirthday (date) {
      return moment(date).format('DD/MM/YYYY')
    }
  },
  mounted () {
    this.fetchUsersByGym(this.activeGym.gym_id)
  }
}
</script>
