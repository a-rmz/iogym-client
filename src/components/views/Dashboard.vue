<template>
  <!-- Main content -->
  <section class="content">
    <!-- Info boxes -->
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="info-box bg-green">
          <div class="info-box-content">
            <span class="info-box-text">Challege progress</span>
            <span class="info-box-number">25km out of 40 km</span>

            <div class="progress">
              <div class="progress-bar" style="width: 70%"></div>
            </div>
                <span class="progress-description">
                  50% Increase
                </span>
          </div>
          <!-- /.info-box-content -->
        </div>
      </div>
    </div>
    <!-- /.row -->

    <div class="col-xs-6">
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title"></h3>
          <div class="box-body">
            <div class="col-sm-12 col-xs-12">
              <h2 class="text-center">Activity</h2>
              <canvas id="activityGraph" ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->

    <!-- Main row -->
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-6">
        <div class="info-box">
          <span class="info-box-icon bg-yellow"><i class="fa fa-medal"></i></span>

          <div class="info-box-content">
            <span class="info-box-text">Leaderboard</span>
            <span class="info-box-number">1. Jon Snow</span>
            <span class="progress-description">
              25 km out of 40 km
            </span>
            <br/>
            <span class="info-box-number">2. Jon Snow</span>
            <span class="progress-description">
              20 km out of 40 km
            </span>
            <br/>
            <span class="info-box-number">3. Jon Snow</span>
            <span class="progress-description">
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
import Chart from 'chart.js'
import moment from 'moment'
import {sessions} from '../../demo'

export default {
  data () {
    return {
      generateRandomNumbers (numbers, max, min) {
        var a = []
        for (var i = 0; i < numbers; i++) {
          a.push(Math.floor(Math.random() * (max - min + 1)) + max)
        }
        return a
      }
    }
  },
  computed: {
    coPilotNumbers () {
      return this.generateRandomNumbers(12, 1000000, 10000)
    },
    personalNumbers () {
      return this.generateRandomNumbers(12, 1000000, 10000)
    },
    isMobile () {
      return (window.innerWidth <= 800 && window.innerHeight <= 600)
    }
  },
  mounted () {
    this.$nextTick(() => {
      var ctx = document.getElementById('activityGraph').getContext('2d')
      var config = {
        type: 'line',
        data: {
          labels: sessions.map(s => moment(s.date).format('DD-MM-YYYY')),
          datasets: [{
            label: 'Sessions',
            fill: false,
            borderColor: '#284184',
            pointBackgroundColor: '#284184',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            data: sessions.map(s => s.duration)
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: !this.isMobile,
          legend: {
            position: 'bottom',
            display: true
          },
          tooltips: {
            mode: 'label',
            xPadding: 10,
            yPadding: 10,
            bodySpacing: 10
          }
        }
      }

      new Chart(ctx, config) // eslint-disable-line no-new
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
</style>
