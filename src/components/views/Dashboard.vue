<template>
  <!-- Main content -->
  <section class='content'>
    <!-- Info boxes -->
    <div class='row'>
      <div class='col-md-12 col-sm-12 col-xs-12'>
        <div class='info-box bg-green'>
          <div class='info-box-content'>
            <span class='info-box-text'>Challege progress</span>
            <span class='info-box-number'>25km out of 40 km</span>

            <div class='progress'>
              <div class='progress-bar' style='width: 70%'></div>
            </div>
                <span class='progress-description'>
                  50% Increase
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
    </div>
    <!-- /.row -->

    <div class='col-md-12 col-sm-12 col-xs-12'>
      <div class='box'>
        <div class='box-header with-border'>
          <h3 class='box-title'></h3>
          <div class='box-body'>
            <h2 class='text-center'>Activity</h2>
            <figure id='heatmap'></figure>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->

    <!-- Main row -->
    <div class='row'>
      <div class='col-md-6 col-sm-6 col-xs-6'>
        <div class='info-box'>
          <span class='info-box-icon bg-yellow'><i class='fa fa-medal'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Leaderboard</span>
            <span class='info-box-number'>1. Jon Snow</span>
            <span class='progress-description'>
              25 km out of 40 km
            </span>
            <br/>
            <span class='info-box-number'>2. Jon Snow</span>
            <span class='progress-description'>
              20 km out of 40 km
            </span>
            <br/>
            <span class='info-box-number'>3. Jon Snow</span>
            <span class='progress-description'>
              10 km out of 40 km
            </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
    </div>
    <!-- /.row -->
  </section>
  <!-- /.content -->
</template>

<script>
import { mapGetters } from 'vuex'
import { Chart } from 'frappe-charts/dist/frappe-charts.min.esm'
import moment from 'moment'

export default {
  computed: {
    ...mapGetters({
      sessions: 'heatmapSessions'
    })
  },
  methods: {
    drawHeatMap () {
      new Chart('#heatmap', { // eslint-disable-line
        type: 'heatmap',
        data: {
          dataPoints: { ...this.sessions },
          start: moment().subtract(11, 'month').toDate(),
          end: moment().add(1, 'month').toDate()
        },
        discreteDomains: '1'
      })
    }
  },
  mounted () {
    this.drawHeatMap()
    this.$store.watch((state, getters) => state.sessions.length > 0, () => {
      this.drawHeatMap()
    })
  }
}
</script>
<style>
.info-box {
  cursor: pointer;
}
.info-box-content {
  text-align: center;
  vertical-align: middle;
  display: inherit;
}
.fullCanvas {
  width: 100%;
}
.vuejs-heatmap {
  text-align: center;
}
.vuejs-heatmap svg {
  font-family: 'Avenir';
  min-height: 150px;
}
</style>
