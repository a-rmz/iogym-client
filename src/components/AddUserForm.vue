<template>
  <section class="content">
    <div class="col-md-12">
      <div class="box box-success">
        <!-- Input Addons -->
        <div class="box-header with-border">
          <h3 class="box-title"><i class="fa fa-user"></i>&nbsp User profile</h3>
        </div>

        <div class="box-body">

          <h4>Name</h4>
          <div class="input-group">
            <input class="form-control" placeholder="First name" type="text" v-model="firstName">
          </div>
          <div class="input-group">
            <input class="form-control" placeholder="Last name" type="text" v-model="lastName">
          </div>
          <br />

          <h4>Email</h4>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-fw fa-envelope"></i></span>
            <input class="form-control" placeholder="Email" type="email" v-model="email">
          </div>
          <br />

          <h4>RFID Code</h4>
          <div class="input-group">
            <span class="input-group-addon"><i class="far fa-id-card"></i></span>
            <input class="form-control" placeholder="AFAFAFAF" maxlength=8 v-model="rfidCode">
          </div>
          <br />

          <h4>Birthday</h4>
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-fw fa-calendar"></i>
            </span>
            <datepicker format="d/MM/yyyy" id="dateInput" width="100%" v-model="birthday"></datepicker>
          </div>
          <br />
          <br />

          <!-- Success/Error heads up input -->
          <h4>Personal information</h4>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-weight"></i></span>
            <input class="form-control" placeholder="Weight" type="number" min=0 max=300 step=0.1 v-model="weight">
            <span class="input-group-addon">m</span>
          </div>
          <div class="input-group">
            <span class="input-group-addon"><i class="fa fa-fw fa-ruler"></i></span>
            <input class="form-control" placeholder="Height" type="number" min=0 max=3 step=0.01 v-model="height">
            <span class="input-group-addon">kg</span>
          </div>
          <br />

          <button class="btn btn-primary" style="float:right;margin-left:1em;" v-on:click="submit">Register</button>
          <button class="btn btn-secondary" style="float:right" v-on:click="cancel">Cancel</button>
        </div>
        <!-- /.box-body -->
      </div>
    </div>
  </section>
</template>
<script>
require('moment')
import datepicker from 'vuejs-datepicker'

export default {
  name: 'Add user',
  components: { datepicker },
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      rfidCode: '',
      birthday: new Date(),
      weight: 0,
      height: 0
    }
  },
  methods: {
    submit () {
      this.$emit('submit', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        rfidCode: this.rfidCode,
        birthday: this.birthday,
        weight: this.weight,
        height: this.height
      })
      this.clearForm()
    },
    cancel () {
      this.$emit('cancel')
      this.clearForm()
    },
    clearForm () {
      this.firstName = ''
      this.lastName = ''
      this.email = ''
      this.rfidCode = ''
      this.birthday = new Date()
      this.weight = 0
      this.height = 0
    }
  }
}
</script>

<style>
.datetime-picker input {
  height: 4em !important;
}
</style>
