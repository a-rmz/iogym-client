import cache from 'lscache'
import api from '../api'

export default {
  fetchSessions ({ commit, state }) {
    const sessions = cache.get('sessions')

    if (!sessions) {
      api
        .request('GET', `/users/${state.user.user_id}/sessions`)
        .then(response => {
          commit('SET_SESSIONS', response.data.sessions)
        })
    } else {
      commit('SET_SESSIONS', sessions)
    }
  },
  fetchSessionFrames ({ commit, state }, sessionId) {
    const frames = cache.get(`frames-${sessionId}`)

    if (!frames) {
      api
        .request('GET', `/sessions/${sessionId}/frames`)
        .then(response => {
          commit('SET_FRAMES', { sessionId, frames: response.data.frames.map(f => ({ ...f, visible: false })) })
        })
    } else {
      commit('SET_FRAMES', { sessionId, frames })
    }
  },
  fetchGyms ({ commit, state }) {
    const gyms = cache.get('gyms')

    if (!gyms) {
      api
        .request('GET', `/users/${state.user.user_id}/gyms`)
        .then(response => {
          commit('SET_GYMS', response.data.gyms)
        })
    } else {
      commit('SET_GYMS', gyms)
    }
  },
  fetchUsersByGym ({ commit }, gymId) {
    const users = cache.get(`users-${gymId}`)

    if (!users) {
      api
        .request('GET', `/gyms/${gymId}/users`)
        .then(response => commit('SET_USERS', { gym_id: gymId, users: response.data.users }))
    } else {
      commit('SET_USERS', users)
    }
  }
}
