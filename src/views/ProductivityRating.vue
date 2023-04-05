<template>
<TopFilter/>
<div class="productivity-boxWrapper bg-white py-5 my-3">
   <div class="productivity-topBox ">
      <div class="productivity-header d-flex justify-content-between align-items-center py-2 px-3">
         <div class="app-header-left">
            <i class="fa-regular fa-user me-2"></i>
            <span>Ashikur Rahim</span>
         </div>
      </div>
     
         <div class="row">
            <div class="col-lg-4">
               <div class="attendance-details-left py-4 px-3">
            <p class="py-2 fw-bold">Mail:<span>ashik00@gmail.com</span></p>
            <p class="py-2 fw-bold">Team::<span>Default team</span></p>
            <p class="py-2 fw-bold">Last synced::<span>Jun 20, 10:20PM</span></p>
         </div>
            </div>
            <div class="col-lg-8">
               <div class="productivity-details-right py-5 px-4 ">
            <table class="table table-bordered table-sm">
               <thead>
                  <tr>
                     <th scope="col">App/Website</th>
                     <th scope="col">Productivity</th>
                     <th scope="col">Scope</th>
                     <th scope="col">Time Used</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>
                        <img src="assets/images/activitychrome.png"/>
                        <span class="ms-2">Google Chrome</span>
                     </td>
                     <td>
                        <a href="#" class="productivity-status productivity-btn">Productive</a>
                     </td>
                     <td>Global</td>
                     <td>2h 10m</td>
                  </tr>
                  <tr>
                     <td>
                        <img src="assets/images/activitychrome.png"/>
                        <span class="ms-2">Google Chrome</span>
                     </td>
                     <td>
                        <a href="#" class="productivity-status unproductivity-btn">Unproductive</a>
                     </td>
                     <td>
                        Global
                     </td>
                     <td>2h 10m</td>
                  </tr>
                  <tr>
                     <td>
                        <img src="assets/images/activityfacebook.png"/>
                        <span class="ms-2">Facebook.com</span>
                     </td>
                     <td>
                        <a href="#" class="productivity-status neutral-btn">Neutral</a>
                     </td>
                     <td>Local</td>
                     <td>2h 10m</td>
                  </tr>
               </tbody>
            </table>
         </div>
            </div>
         </div>
        
        
      
   </div>
   <div class="productivity-bottomBox py-4">
      <div class="productivity-header d-flex justify-content-between align-items-center py-2 px-3">
         <div class="app-header-left">
            <i class="fa-regular fa-user me-2"></i>
            <span>Nasir Uddin</span>
         </div>
      </div>
        <div class="row">
         <div class="col-lg-4">
            <div class="attendance-details-left py-4 px-3">
            <p class="py-2 fw-bold">Mail:<span>ashik00@gmail.com</span></p>
            <p class="py-2 fw-bold">Team::<span>Default team</span></p>
            <p class="py-2 fw-bold">Last synced::<span>Jun 20, 10:20PM</span></p>
         </div>
         </div>
         <div class="col-lg-8">
            <div class="productivity-details-right py-5 px-4 ">
            <table class="table table-bordered">
               <thead>
                  <tr>
                     <th scope="col">App/Website</th>
                     <th scope="col">Productivity</th>
                     <th scope="col">scope</th>
                     <th scope="col">Time Used</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>
                        <img src="assets/images/activitychrome.png"/>
                        <span class="ms-2">Google Chrome</span>
                     </td>
                     <td>
                        <a href="#" class="productivity-status productivity-btn">Productive</a>
                     </td>
                     <td>
                        Global
                     </td>
                     <td>2h 10m</td>
                  </tr>
                  <tr>
                     <td>
                        <img src="assets/images/activitychrome.png"/>
                        <span class="ms-2">Google Chrome</span>
                     </td>
                     <td>
                        <a href="#" class="productivity-status unproductivity-btn">Unproductive</a>
                     </td>
                     <td>Global</td>
                     <td>2h 10m</td>
                  </tr>
                  <tr>
                     <td>
                        <img src="assets/images/activityfacebook.png"/>
                        <span class="ms-2">Facebook.com</span>
                     </td>
                     <td>
                        <a href="#" class="productivity-status neutral-btn">Neutral</a>
                     </td>
                     <td>Global</td>
                     <td>2h 10m</td>
                  </tr>
               </tbody>
            </table>
         </div>
         </div>
        </div>
        
         
      
   </div>
</div>
</template>

<script>
import TopFilter from '../components/includes/TopFilter.vue';
export default {
  name: 'TimetrackdashboardUser',
  components:{TopFilter},

  data() {
      return {
          
      };
  },

  mounted() {
      
  },

  methods: {
      
  },
};
</script>

<style  scoped>

</style>