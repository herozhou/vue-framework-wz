<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <sidebar-item :routes='siderbar_routers.children'></sidebar-item>
     <!--  <ul class="nav">
        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link"><i class="wz-icon wz-icon-speedometer"></i> Dashboard <span class="badge badge-info">NEW</span></router-link>
        </li>
         <li class="nav-item">
          <router-link :to="'/charts'" class="nav-link"><i class="wz-icon wz-icon-speedometer"></i> Charts <span class="badge badge-info">NEW</span></router-link>
        </li>
         <li class="nav-item">
          <router-link :to="'/hoverbuttons'" class="nav-link"><i class="wz-icon wz-icon-speedometer"></i> Hover-Button <span class="badge badge-info">NEW</span></router-link>
        </li>
         <li class="nav-item">
          <router-link :to="'/scroll'" class="nav-link"><i class="wz-icon wz-icon-speedometer"></i> Scroll <span class="badge badge-info">NEW</span></router-link>
        </li>
          <li class="nav-item">
          <router-link :to="'/table'" class="nav-link"><i class="wz-icon wz-icon-speedometer"></i> Table <span class="badge badge-info">NEW</span></router-link>
        </li>
          <li class="nav-item">
          <router-link :to="'/jsontree'" class="nav-link"><i class="wz-icon wz-icon-speedometer"></i> JsonTree </router-link>
        </li>
      </ul> -->
    </nav>
  </div>
</template>
<script>
   import SidebarItem from './SidebarItem';
import { mapGetters } from 'vuex';
export default {
  name: 'sidebar',
  components: { SidebarItem },
      computed: {
        ...mapGetters([
          'siderbar_routers'
        ])
      },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
</style>
