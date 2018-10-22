<template>
  <section class="content">
    <div class="row center-block">
      <h1 class="text-center">Activity Log</h1>
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6">
          <div class="box box-success">
            <div class="box-header"><h3>Weekly progress</h3></div>
            <div class="box-body">
              <h4>1:30 hr of exercise</h4>
            </div>
            <!-- /.info-box-content -->
          </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6">
          <div class="box box-success">
            <div class="box-header"><h3>Monthly progress</h3></div>
            <div class="box-body">
              <h4>1:30 hr of exercise</h4>
            </div>
            <!-- /.info-box-content -->
          </div>
        </div>
      </div>
      <ul class="timeline">
        <!-- timeline time label -->
        <li class="time-label">
          <span class="bg-green">{{today}}</span>
        </li>
        <!-- timeline item -->
        <li v-for="(session, key) in timeline" :key="key">
          <!-- timeline icon -->
          <i class="fa fa-dumbbell bg-green"></i>
          <div class="timeline-item">
            <span class="time" data-toggle="tooltip" :title="formatDate(session.date)"><i class="far fa-clock"></i>&nbsp;{{calculateTime(session.date)}}</span>
            <h3 class="timeline-header">{{`${catpializeFirst(session.device_type)}`}}</h3>
            <div class="timeline-body">
              <p v-if="session.description">{{catpializeFirst(session.description)}}</p>
              <p v-if="session.duration"><strong>Duration: </strong>{{toMinutes(session.duration)}}</p>
            </div>
            <div class="timeline-footer">
              <p>Gym: <a :href="`gyms?${session.gym_id}`">{{session.gym_name}}</a></p>
            </div>
          </div>
        </li>
      <!-- END timeline item -->
      </ul>
    </div>
  </section>
</template>
<script>
  import moment from 'moment'
  import {sessions} from '../../demo'
  import momentDurationFormatSetup from 'moment-duration-format'
  momentDurationFormatSetup(moment)

  export default {
    name: 'History',
    computed: {
      today () {
        return moment().format('MMM Do YY')
      },
      timeline () {
        return sessions
      }
    },
    methods: {
      calculateTime (date) {
        return moment(date).fromNow()
      },
      toMinutes (duration) {
        return moment.duration(duration, 'minutes').format('mm:ss')
      },
      catpializeFirst (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      },
      formatDate (date) {
        return moment(date).format('dddd, MMMM DD, YYYY')
      }
    }
  }
</script>

<style>
  .timeline-footer a.btn {
    margin-right: 10px;
  }
</style>
