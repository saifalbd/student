<template>
  
  <b-row class="m-0">
     <!-- start top nav -->
     <b-col cols='12'>
       <navBar/>
     </b-col>
    <b-col cols='3'>
      <sideMenu/>
    </b-col>
      <!-- start main content -->
    <b-col cols='9'>
       <b-jumbotron header="students" lead="students list">
      <slot/>
        </b-jumbotron>
    </b-col>
    <!-- start footer -->
    <b-col cols='12'>footer</b-col>
  </b-row>
 
</template>

<script>
import navBar from './navBar.vue'
import sideMenu from './sideMenus.vue'
    export default {
        components:{navBar,sideMenu}
    }
</script>
