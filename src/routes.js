import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import HistoryView from './components/views/History.vue'
import SettingView from './components/views/Setting.vue'
import GymsView from './components/views/Gyms.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'General overview'}
      }, {
        path: 'history',
        component: HistoryView,
        name: 'History',
        meta: {description: 'Log of all the sessions'}
      }, {
        path: 'settings',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings'}
      }, {
        path: 'gyms',
        component: GymsView,
        name: 'Gyms',
        meta: {description: 'My active gyms'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
