<template>
  <div>
    <h1 class="text-center">Settings</h1>
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <div class="box box-info">
            <!-- Input Addons -->
            <div class="box-header with-border">
              <h3 class="box-title"><i class="fa fa-user"></i>&nbsp User profile</h3>
            </div>

            <div class="box-body">

              <h4>Name</h4>
              <div class="input-group">
                <input class="form-control" placeholder="First name" type="text">
              </div>
              <div class="input-group">
                <input class="form-control" placeholder="Last name" type="text">
              </div>
              <br />

              <h4>Email</h4>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-fw fa-envelope"></i></span>
                <input class="form-control" placeholder="Email" type="email">
              </div>
              <br />

              <h4>Birthday</h4>
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-fw fa-calendar"></i>
                </span>
                <datepicker :readonly="true" format="MMM/D/YYYY" id="dateInput" width="100%"></datepicker>
              </div>
              <br />
              <br />

              <!-- Success/Error heads up input -->
              <h4>Personal information</h4>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-weight"></i></span>
                <input class="form-control" placeholder="Weight" type="number" min=0 max=300 step=0.1>
                <span class="input-group-addon">m</span>
              </div>
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-fw fa-ruler"></i></span>
                <input class="form-control" placeholder="Height" type="number" min=0 max=3 step=0.01>
                <span class="input-group-addon">kg</span>
              </div>
              <br />

            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
require('moment')
import datepicker from 'vuejs-datepicker'

export default {
  name: 'Settings',
  components: { datepicker },
  computed: {
    datetime () {
      return new Date()
    }
  },
  methods: {
    clearInput (vueModel) {
      vueModel = ''
    }
  }
}
</script>

<style>
.datetime-picker input {
  height: 4em !important;
}
</style>
