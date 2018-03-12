<template>
  <div class="app-wrapper" :class="{hideSidebar:sidebar}">
    <!--head-->
    <top @toggleSideBar="toggleSideBar"></top>
    <!--sidebar-->
    <sidebar></sidebar>
    <!--masking-->
    <masking></masking>
    <!--main-->
    <div class="main-wrapper">
      <h1 class="title">{{msg}}</h1>
    </div>
  </div>
</template>

<script>
import top from './head/header.vue'
import sidebar from './sidebar/sidebar'
import masking from './masking/masking.vue'
export default {
  name: 'app-wrapper',
  data () {
    return {
      sidebar: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toggleSideBar () {
      this.sidebar = !this.sidebar
      console.log('sidebar current value: ' + this.sidebar)
    }
  },
  components: {
    top,
    sidebar,
    masking
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss">
  .app-wrapper {
    overflow-x: hidden;
    .top {
      transition: all .28s ease-out;
      transform: translateX(0);
    }
    .sidebar {
      width: 13rem;
      transition: all .28s ease-out;
      transform: translate(0);
    }
    /*main_wrapper*/
    .main-wrapper {
      padding-top: 1.95rem;
      transition: all .28s ease-out;
      transform: translateX(13rem);
    }
    .footer {
      transition: all .28s ease-out;
      transform: translateX(13rem);
    }

    &.hideSidebar {
      .top {
        transform: translateX(0);
      }
      .sidebar {
        transform: translateX(-13rem);
      }
      .masking {
        display: none;
      }
      .main_wrapper {
        transform: translateX(0);
      }
      .footer {
        transform: translateX(0);
      }
    }
  }
</style>
