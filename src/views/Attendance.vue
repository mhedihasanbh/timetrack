<template>
<TopFilter/>
 <!-----ATTDANCE TOP START----->

<!-----ATTDANCE TOP END----->
<div class="app-mainContent bg-white py-3">
   <div class="attendance-topBox my-3 px-3">
      <div class="app-header d-flex justify-content-between align-items-center py-2 px-3">
         <div class="app-header-left">
            <i class="fa-regular fa-user me-2"></i>
            <span>Ashikur Rahim</span>
         </div>
         <div class="app-header-right d-flex gap-2">
            <div class="app-time-one">
               <i class="fa-regular fa-clock me-2"></i>
               <span>Work Time:00:00:00</span>
            </div>
            <div class="app-time-two ms-2">
               <i class="fa-regular fa-clock me-2"></i>
               <span>Break Time: Time:00:00:00</span>
            </div>
         </div>
      </div>
      <div class="attendance-details-area d-flex justify-content-between">
         <div class="attendance-details-left py-4">
            <p class="py-2 fw-bold">Mail:<span>ashik00@gmail.com</span></p>
            <p class="py-2 fw-bold">Team::<span>Default team</span></p>
            <p class="py-2 fw-bold">Last synced::<span>Jun 20, 10:20PM</span></p>
         </div>
         <div class="attendance-details-right py-5 w-50">
            <h6 class="py-2">Time</h6>
            <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
               <div class="progress-bar progress-bar-striped " style="width: 75%;background-color:#913175"></div>
            </div>
            <div class="screenShoot-downloadBtn  d-flex justify-content-end  gap-3 py-4">
               <a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
               Started At: 09:05
               </a>
               <a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
               Finished At: 14:40
               </a>
            </div>
         </div>
      </div>
   </div>
   <!--attandance details start--->
   <div class=" text-end me-2">
   <a href="#" class="primary-btn px-3 py-2 dropdown-toggle" data-bs-toggle="modal" data-bs-target="#attdanceDetails">Details  </a> 
  </div>
  
 <div class="modal fade" id="attdanceDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog  modal-fullscreen">
         <div class="modal-content">
            <div class="modal-header remove-timeHeader">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Attdance Details</h1>
             <i class="fas fa-times fa-lg remove-closeBtn" data-bs-dismiss="modal" aria-label="Close"></i>
            </div>
            <div class="modal-body text-center">
         <div class="top-filter-area bg-white rounded p-3 d-flex justify-content-between align-items-center">
            <div class="filter-left d-flex align-items-center flex-wrap gap-4 w-100">
             <form action="" method="" class="filter-form d-flex gap-2">
               
                  <select class="form-select filter-by-week">
                     <option selected>All User</option>
                     <option value="1">sajib</option>
                     <option value="2">rakib</option>
                     <option value="3">ashik</option>
                  </select>
                 
              
                  <select class="form-select filter-by-week">
                     <option selected>All Team</option>
                     <option value="1">Web design</option>
                     <option value="2">Marketing</option>
                     <option value="2">Graphic Design</option>
                  </select>
                   <select class="form-select filter-by-week">
                     <option selected>Last Week</option>
                     <option value="1">Last Month</option>
                     <option value="2">Last year</option>
                  </select>
             
                  
              
             
               <div class="mb-3">
                 <button type="submit" class="primary-btn p-2">Filter</button>
               </div>
               
             </form>
             <div class="dashboard-table w-100">
               <table class="table  table-bordered my-3">
            <thead>
               <tr>
                  <th>User Name</th>
                  <th>Project Name</th>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>Stop Time</th>
                  <th>Duration</th>
                  <th>High Spend</th>
               </tr>
            </thead>
            <tbody>
              <tr>
               <td>ashik</td>
               <td>web design</td>
               <td>4/8/2023</td>
               <td>10 AM</td>
               <td>5 PM</td>
               <td>8.00 hours</td>
               <td>Facebook</td>
              </tr>
              <tr>
               <td>ashik</td>
               <td>web design</td>
               <td>8/8/2023</td>
               <td>10 AM</td>
               <td>5 PM</td>
               <td>6.00 hours</td>
               <td>vs code</td>
              </tr>
               <tr>
               <td>ashik</td>
               <td>web design</td>
               <td>10/8/2023</td>
               <td>10 AM</td>
               <td>5 PM</td>
               <td>5.00 hours</td>
               <td>w3 school</td>
              </tr>
             
            </tbody>
            </table>
             </div>
            
             </div>
               
              </div>
              <div class="attdance-symmary">
               <div class="row g-2">
                  <div class="col-lg-12">
                    <div class="attdance-box-wrapper d-flex gap-4 justify-content-center">
                   <div class="box boxone p-5 primary-btn rounded-3">
                    <div class="d-flex align-items-center gap-3">
                      <i class="fa-regular fa-clock"></i>
                      <div>
                       <h6> Total work this week</h6>
                       <h6 class="fw-bold">12.44.00</h6>
                      </div>
                    
                    </div>
                   </div>
                    <div class="box boxtwo p-5  rounded-3">
                    <div class="d-flex align-items-center gap-3">
                      <i class="fa-regular fa-clock"></i>
                      <div>
                       <h6> Total Productivity this week</h6>
                       <h6 class="fw-bold">7.44.00</h6>
                      </div>
                    
                    </div>
                   </div>
                    <div class="box boxthree p-5  rounded-3">
                    <div class="d-flex align-items-center gap-3">
                      <i class="fa-regular fa-clock"></i>
                      <div>
                       <h6> Total unproductivity this week</h6>
                       <h6 class="fw-bold">5.44.00</h6>
                      </div>
                    
                    </div>
                   </div>
                    <div class="box boxfour p-5 bg-dark text-white rounded-3">
                    <div class="d-flex align-items-center gap-3">
                      <i class="fa-regular fa-clock"></i>
                      <div>
                       <h6> Total Progress this week</h6>
                       <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped " style="width: 75%;background-color:#913175"></div>
         </div>
                      </div>
                    
                    </div>
                   </div>
                   </div> 
                  
                  </div>
                 
               </div>
              </div>
              
               </div>
            </div>
      </div>
      </div>


   <!--attandance details end--->
  
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