import moment from 'moment'

export default {
  heatmapSessions (state) {
    return state.sessions
      .map(s => ({ [String(moment(s.start_time).startOf('day').unix())]: 1 }))
      .reduce((acc, curr) => {
        Object.keys(curr).forEach(key => {
          if (typeof acc[key] === 'undefined') {
            acc[key] = 1
          } else {
            acc[key] += 1
          }
        })
        return acc
      }, {})
  },
  isAdmin (state) {
    return state.user && state.gyms && state.gyms.some(gym => gym.is_admin)
  }
}
