<template>
  <ul class="sidebar-menu">
    <li class="header">Activity</li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fas fa-chart-line"></i>
        <span class="page">Dashboard</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/history">
      <a>
        <i class="far fa-chart-bar"></i>
        <span class="page">History</span>
      </a>
    </router-link>

    <li class="header">Profile</li>
    <router-link tag="li" class="pageLink" to="/gyms">
      <a>
        <i class="fas fa-dumbbell"></i>
        <span class="page">My Gyms</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/settings">
      <a>
        <i class="fa fa-cog"></i>
        <span class="page">Settings</span>
      </a>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'SidebarMenu'
}
</script>
<style>
/* override default */
.sidebar-menu > li > a {
  padding: 12px 15px 12px 15px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

.treeview-title {
  z-index: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-90deg);
  }
}
</style>
