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
          <span class="bg-green" data-toggle="tooltip" title="Today">{{today}}</span>
        </li>
        <!-- timeline item -->
        <li v-for="(session, key) in sessions" :key="key">
          <!-- timeline icon -->
          <i class="fa fa-dumbbell bg-green"
             data-toggle="tooltip"
             :title="getDate(session)"></i>
          <div class="timeline-item" v-on:click="toggleDetail(session)">
            <span
              v-if="session.end_date"
              class="time" data-toggle="tooltip"
              :title="getTimeDifference(session)">
              <i class="far fa-clock"></i>&nbsp;{{calculateDuration(session)}}
            </span>
            <span
              v-else
              class="time">
              <i class="far fa-clock"></i>&nbsp;Active
            </span>
            <h3 class="timeline-header">{{`${catpializeFirst(session.device_type)}`}}</h3>
            <div class="timeline-body">
              <p v-if="session.description">{{catpializeFirst(session.description)}}</p>
              <div v-show="frames[session.session_id] && frames[session.session_id].visible">
                <canvas :id="session.session_id"></canvas>
              </div>
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
  import { mapState, mapActions, mapMutations } from 'vuex'
  import momentDurationFormatSetup from 'moment-duration-format'
  import Chart from 'chart.js'
  momentDurationFormatSetup(moment)

  export default {
    name: 'History',
    computed: {
      ...mapState([ 'sessions', 'frames' ]),
      today () {
        return moment().format('MMM Do YY')
      }
    },
    methods: {
      ...mapActions({
        fetchSessions: 'fetchSessions',
        fetchSessionFrames: 'fetchSessionFrames'
      }),
      ...mapMutations({
        toggleFrames: 'TOGGLE_FRAMES'
      }),
      calculateDuration (session) {
        const start = moment(session.start_time)
        const end = moment(session.end_time)
        return moment.duration(end.diff(start, 'minutes')).humanize()
      },
      getTimeDifference (session) {
        const start = moment(session.start_time)
        const end = moment(session.end_time)
        return `${start.format('hh:mm:ss')} - ${end.format('hh:mm:ss')}`
      },
      getDate (session) {
        return this.formatDate(session.end_time)
      },
      catpializeFirst (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      },
      formatDate (date) {
        return moment(date).format('dddd, MMMM DD, YYYY')
      },
      toggleDetail (session) {
        const { session_id } = session
        if (!this.frames[session_id]) {
          this.fetchSessionFrames(session_id)
            .then(() => {
              const ctx = document.getElementById(session_id).getContext('2d')
              const frames = this.frames[session_id].data

              new Chart(ctx, {  // eslint-disable-line no-new
                type: 'line',
                data: {
                  datasets: [{
                    label: 'Activity',
                    data: frames.map(f => ({ x: f.start_time, y: (f.data * 1000) })),
                    borderColor: [
                      '#f6bd60',
                      '#f7ede2',
                      '#f5cac3',
                      '#84a59d',
                      '#f28482'
                    ]
                  }]
                },
                options: {
                  scales: {
                    xAxes: [{
                      type: 'time',
                      time: {
                        unit: 'minute'
                      }
                    }]
                  }
                }
              })
            })
        } else {
          this.toggleFrames(session_id)
        }
      }
    }
  }
</script>

<style>
  .timeline-footer a.btn {
    margin-right: 10px;
  }
</style>
