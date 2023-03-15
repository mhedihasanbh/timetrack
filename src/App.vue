<template>

  <div class="main-wrapper">
    <Header/>
    <Sidebar/>
  </div>
 <div class="content-wrapper"> 
    <section class="dashboard-top-sec"> 
      <div class="container-fluid py-4 px-4"> 
        <router-view/>
      </div>
    </section>
   </div>
</template>

<script>
import Header from './components/includes/Header.vue';
import Sidebar from './components/includes/Sidebar.vue';

export default {
  name: 'App',
  components: {Header,Sidebar}
}
</script>

<style>

</style>
