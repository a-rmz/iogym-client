import cache from 'lscache'
import moment from 'moment'

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
    return api
        .request('GET', `/sessions/${sessionId}/frames`)
        .then(response => {
          commit('SET_FRAMES', { sessionId, frames: response.data.frames.map(f => ({ ...f, visible: false })) })
        })
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
  },
  refreshUsersByGym ({ commit }, gymId) {
    api
      .request('GET', `/gyms/${gymId}/users`)
      .then(response => commit('SET_USERS', { gym_id: gymId, users: response.data.users }))
  },
  addUser({ commit }, { user, gymId }) {
    const formattedUser = {
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      birthday: moment(user.birthday).format('MM/D/YYYY'),
      rfid_code: user.rfidCode
    }

    return api
      .request('POST', '/users', formattedUser)
      .then(response => {
        commit('ADD_USER', { user: response.data.user, gymId })
        return response.data.user.user_id
      })
      .then(user_id => api.request('POST', `/gyms/${gymId}/users/${user_id}`, { is_admin: false }))
      .catch(console.error)
  },
  removeUser ({ commit }, { gymId, userId }) {
    api
      .request('DELETE', `/gyms/${gymId}/users/${userId}`)
      .then(() => commit('REMOVE_USER', { gymId, userId }))
      .then(() => api.request('DELETE', `/users/${userId}`))
      .catch(console.error)
  }
}
