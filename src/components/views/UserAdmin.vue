<template>
  <div>
    <section class="content" style="top:100%">
      <div class="row center-block">
        <button type="button" class="btn btn-success" v-show="!isAddingUser"
                style="margin-left:1em;float:right;" v-on:click="isAddingUser=!isAddingUser">
          Add user <span><i class="fas fa-plus-circle"></i></span>
        </button>
        <button type="button" class="btn btn-info" style="float:right;" v-on:click="refreshUsersByGym(activeGym.gym_id)">
          Refresh <span><i class="fas fa-sync-alt"></i></span>
        </button>
      </div>
      <br/>
      <div v-show="isAddingUser" class="row center-block">
        <add-user-form
          v-on:cancel="closeForm"
          v-on:submit="submitForm"></add-user-form>
      </div>
      <div class="row">
        <div v-for="(user, key) in users" :key="key" class="col-md-3">
          <div class="box box-info">
            <div class="box-header"><h4>{{user.first_name}} {{user.last_name}}</h4></div>
            <div class="box-body">
              <p>{{formatBirthday(user.birthday)}}</p>
              <a :href="`mailto:${user.email}`">{{user.email}}</a>
            </div>
            <div class="box-footer">
              <button type="button" v-bind:id="`delete-${user.user_id}`" class="btn btn-danger" style="float:right;"
                                    v-on:click="toggle(user.user_id)" >
                Deactivate account
              </button>
              <button type="button" v-bind:id="`confirm-${user.user_id}`" style="float:right;"
                      v-on:click="toggle(user.user_id);removeUser({ gymId: activeGym.gym_id, userId: user.user_id })"
                      class="btn btn-outline-danger hidden" >
                Confirm
              </button>
              <button type="button" v-bind:id="`cancel-${user.user_id}`" style="float:right;"
                                    v-on:click="toggle(user.user_id)" class="btn btn-link hidden" >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AddUserForm from '@/components/AddUserForm'
import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'UserAdmin',
  components: {
    AddUserForm
  },
  data () {
    return {
      isAddingUser: false
    }
  },
  computed: {
    ...mapState({
      gyms: 'gyms',
      activeGym: state => (state.gyms) ? state.gyms.find(gym => gym.is_admin) : {},
      users: state => state.users[state.gyms.find(gym => gym.is_admin).gym_id]
    })
  },
  methods: {
    ...mapActions([ 'fetchUsersByGym', 'refreshUsersByGym', 'addUser', 'removeUser' ]),
    formatBirthday (date) {
      return moment(date).format('DD/MM/YYYY')
    },
    toggle (id) {
      document.getElementById(`delete-${id}`).classList.toggle('hidden')
      document.getElementById(`confirm-${id}`).classList.toggle('hidden')
      document.getElementById(`cancel-${id}`).classList.toggle('hidden')
    },
    submitForm (user) {
      this.addUser({ user, gymId: this.activeGym.gym_id })
        .then(() => this.closeForm())
    },
    closeForm () {
      this.isAddingUser = false
    }
  },
  mounted () {
    this.fetchUsersByGym(this.activeGym.gym_id)
  }
}
</script>

<style>
.hidden {
  display: none;
}

.btn {
  border: 0;
}

.btn-outline-danger {
  color: #dc3545;
  background-color: transparent;
  background-image: none;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:focus, .btn-outline-danger.focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}
</style>
