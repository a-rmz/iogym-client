import cache from 'lscache'
const CACHE_TTL = 5

export default {
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_SESSIONS (state, sessions) {
    state.sessions = sessions
    cache.set('sessions', sessions, CACHE_TTL)
  },
  SET_FRAMES (state, frames) {
    state.frames = { ...state.frames, [frames.sessionId]: { data: frames.frames, visible: true } }
    cache.set(`frames-${frames.sessionId}`, frames.frames, CACHE_TTL)
  },
  TOGGLE_FRAMES (state, session_id) {
    const previousState = state.frames[session_id].visible
    state.frames = { ...state.frames, [session_id]: { data: state.frames[session_id].data, visible: !previousState } }
    cache.set(`frames-${frames.sessionId}`, frames.frames, CACHE_TTL)
  },
  SET_GYMS (state, gyms) {
    state.gyms = gyms
    cache.set('gyms', gyms, CACHE_TTL)
  },
  SET_USERS (state, { gym_id, users }) {
    state.users = { ...state.users, [gym_id]: users }
  }
}
