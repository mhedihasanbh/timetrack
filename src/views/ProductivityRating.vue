<template>
  <div class="top-filter-area bg-white rounded p-3 d-flex justify-content-between">
          <div class="filter-left d-flex align-items-center flex-wrap gap-4">
           <form action="" method="" class="d-flex gap-2">
             <div class="mb-3">
                <input type="search" class="form-control filter-by-week" id="exampleInputEmail1" placeholder="Search">
             </div>
              <div class="tema-select">
                <select class="form-select " aria-label="Default select example">
                <option selected>All Teams</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </select>
              </div>
             </form>
           </div>
             <div class="filter-form">
              <form action="" method="" class="d-flex gap-2 align-items-center">
                 <div class="calander-icon">
                    <i class="fa-regular fa-calendar-days icon me-2"></i>  
                   <input type="text" class="form-control filter-by-week" id="datepicker" placeholder="Filter  Date">
                 </div> 
                 <select class="form-select filter-by-week">
                   <option selected>Last Week</option>
                   <option value="1">Last Month</option>
                   <option value="2">Last year</option>
                </select>
                <a href=""> <i class="fa-solid fa-arrows-rotate"></i></a>
             </form>
        </div>
  </div>
  
 <div class="productivity-mainContent py-3 bg-white px-3 my-3">
   <div class="productivity-header d-flex justify-content-between align-items-center py-2 px-3">
    <div class="app-header-left">
      <i class="fa-regular fa-user me-2"></i>
      <span>Ashikur Rahim</span>
    </div>
   </div>
   <div class="productivity-details-wrapper bg-white p-2">
    <div class="productivity-details-area d-flex justify-content-between">
       <div class="attendance-details-left py-4 px-3">
         <p class="py-2 fw-bold">Mail:<span>ashik00@gmail.com</span></p>
         <p class="py-2 fw-bold">Team::<span>Default team</span></p>
         <p class="py-2 fw-bold">Last synced::<span>Jun 20, 10:20PM</span></p>
        </div>
        <div class="productivity-details-right py-5 w-50">
          <table class="table table-bordered">
                  <thead>
                     <tr>
                        <th scope="col">App/Website</th>
                        <th scope="col">Productivity</th>
                        <th scope="col">Duration</th>
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
                        <td>2h 10m</td>
                     </tr>
                    
                     
                     
                     
                  </tbody>
                  </table>
        </div>
        </div>
      </div>
   </div>
 </template>

<script>
export default {
  name: 'TimetrackdashboardUser',

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