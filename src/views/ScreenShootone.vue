<template>
   <div class="profile-loader"  v-if="loader">
     <Loader/>
  </div>
  <div v-if="!loader">
   <div class="filter-left d-flex align-items-center flex-wrap bg-white rounded p-3 w-100 ">
             <form action="" method="" class="project-filer d-flex gap-2">
               <select class="form-select filter-by-week" aria-label="Default select example">
                  <option selected>All Teams</option>
                  <option value="1">
                      All Team
                  </option>
                  <option value="2">Nasir Uddin</option>
                  <option value="3">Mehedi</option>
                  </select>
                 
                   <select class="form-select filter-by-week">
                    <option selected>Project</option>
                    <option value="1">Project Name 1</option>
                    <option value="1">Project Name 2</option>
                    <option value="2">Project Name 3</option>
                    <option value="2">Project Name 4</option>
                 </select>
             
                 <select class="form-select filter-by-week">
               <option selected>Name</option>
               <option value="1">sajib</option>
               <option value="2">mehedi</option>
            </select>
            <select class="form-select filter-by-week">
               <option value="1">Ascending</option>
               <option value="2">Descending</option>
            </select>
                        
                
                   <select class="form-select filter-by-week">
                     <option selected>Last Week</option>
                     <option value="1">Last Month</option>
                     <option value="2">Last year</option>
                  </select>
                  <a href="#" class="pt-2"> <i class="fa-solid fa-arrows-rotate"></i></a>
               
                 <div class="filter-btn w-100">
                    <button type="submit" class="primary-btn p-2">Apply Filter</button> 
                   
                 </div>
               </form>
       </div>

<div class="user-wrapper bg-white p-2 my-3 ">
   <!-----TOP AREA START----->
   <div class="user-info-filter d-flex justify-content-between px-3 py-3">
     <div class="back">
      <router-link to="/user"><i class="fa-solid fa-arrow-left fa-xl"></i></router-link>
     </div>
      <div class="user-info-title">
         <h4>Users</h4>
      </div>
     
   </div>
   <!-----TOP AREA END----->
   <div class="user-main-content my-3 rounded-3 px-4 py-4">
      <div class="user-name-area d-flex justify-content-between">
         <div class="user-name d-flex gap-2 align-items-center">
            <i class="fa-solid fa-user-large"></i>
            <h5>Ashikur Rahim Ashik</h5>
         </div>
         <div class="user-track-time">
            <a href="#"><i class="fa-solid fa-circle me-2"></i>Tracking Start</a>
         </div>
      </div>
      <!-----USER INFO START----->
      <div class="user-info-area d-flex justify-content-between my-3">
         <div class="user-all-info">
            <p class="py-2">Id:<span>0000000fff0000000</span></p>
            <p class="py-2">Team::<span>Default team</span></p>
            <p>Last synced::<span>Jun 20, 10:20PM</span></p>
         </div>
         <div class="user-all-info">
            <p class="py-2">Work Time::<span>00:08:00 hr</span></p>
            <p class="py-2">Break Time:::<span>00:00:20 hr</span></p>
         </div>
         <div class="user-all-info user-progress">
            <h6 class="py-2">Progress</h6>
            <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
               <div class="progress-bar progress-bar-striped bg-warning" style="width: 75%;background-color:#913175"></div>
            </div>
         </div>
      </div>
       <!-----USER INFO END----->
      <div class="user-screenshoot-area d-flex gap-3">
         <!-----LEFT CARD START----->
         <div class="screenshoot-left w-50 ">
            <div class="card h-100">
               <p class="user-activity-title  p-2">Jun 20, 10:20PM</p>
               <div class="card-body">
                  <div class="user-all-info bg-white px-3 ">
                     <p class="py-2">Work Time::<span>10 Minutes</span></p>
                     <p class="py-2">From Which Away-:::<span>00:00:00</span></p>
                     <p class="py-2">Break Time:::<span>00:00:00</span></p>
                     <div class="time-maintain-btn secondary-btn d-flex align-items-end">
                        <a href="#" class="secondary-btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">Remove Time</a>
                        <a href="#" class="secondary-btn"  data-bs-toggle="modal" data-bs-target="#addTimeModal"  >Add Manual Time</a>
                     </div>
                     <!-----remove time popup start----->
                     <!-- Button trigger modal -->
                      <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                           <div class="modal-content">
                              <div class="modal-header remove-timeHeader">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Remove Manual Time</h1>
                              
                                 <i class="fas fa-times fa-lg remove-closeBtn" data-bs-dismiss="modal" aria-label="Close"></i>
                             

                              </div>
                              <div class="modal-body text-center">
                                  <form action="" method="" class="d-flex gap-2 align-items-center justify-content-center">
                                       <div class="calander-icon">
                                           <label>Start Date</label>
                                          <input type="datetime-local" class="form-control filter-by-week"  placeholder="Filter  Date">
                                       </div> 
                                       <div class="calander-icon">
                                           <label>End Date Date</label>
                                          <input type="datetime-local" class="form-control filter-by-week"  placeholder="Filter  Date">
                                       </div> 
                                   </form>
                                   <div class=" text-center">
                                       <p class="py-3 ">Removing 00:00:00</p>
                                      <a href="#" class="primary-btn py-2 px-4">Preview</a>
                                     </div>
                                 </div>
                             </div>
                        </div>
                        </div>
                     <!-----remove time popup end----->
                     <!-----Add time popup start----->
                     <!-- Button trigger modal -->
                      <!-- Modal -->
                      <div class="modal fade" id="addTimeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-lg">
                           <div class="modal-content">
                              <div class="modal-header remove-timeHeader">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Manual Time</h1>
                              
                                 <i class="fas fa-times fa-lg remove-closeBtn" data-bs-dismiss="modal" aria-label="Close"></i>
                              </div>
                              <div class="modal-body">
                                 <form action="" method="" class="d-flex gap-2 align-items-center justify-content-center">
                                       <div class="calander-icon">
                                           <label>Start Date</label>
                                          <input type="datetime-local" class="form-control filter-by-week"  placeholder="Filter  Date">
                                       </div> 
                                       <div class="calander-icon">
                                           <label>End Date Date</label>
                                          <input type="datetime-local" class="form-control filter-by-week"  placeholder="Filter  Date">
                                       </div> 
                                   </form>
                                    <div class=" text-center">
                                       <p class="py-3 ">Adding 00:00:00</p>
                                    </div>
                                    <div class="addTime-btns d-flex justify-content-center gap-2">
                                       <a href="#" class="primary-btn py-2 px-3">Work Time</a>
                                       <a href="#" class="primary-bg py-2 px-3">Break Time</a>
                                    </div>
                                    <p class="text-center py-2">Note: Any existing tracking data for the selected period will be overwritten</p>
                                    <div class="submit-btn text-center">
                                       <button type="submit" class="primary-btn py-2 px-3">Submit</button>
                                    </div>
                                 </div>
                             </div>
                        </div>
                        </div>
                     <!-----Add time popup end----->
                  </div>
               </div>
            </div>
         </div>
         <!-----LEFT CARD END----->
         <!-----RIGHT CARD START----->
         <div class="screenshoot-right w-50">
            <div class="card ">
               <div class="screnshot-title d-flex justify-content-between p-2">
                  <p class="text-white">No Task</p>
                  <p class="text-white">00:10:20</p>
               </div>
               <div class="card-body">
                  <div class="user-all-info bg-white px-3 py-5 ">
                     <a href="#" class="secondary-btn px-3">View All</a>
                  </div>
                  <div class="screnshot-title d-flex justify-content-between p-2 mt-3">
                     <p class="text-white">Screenshots</p>
                  </div>
                  <div class="screenshoot-images d-flex justify-content-around bg-white px-3 py-5 ">
                     <div class="screenshoot-image">
                        <img src="assets/images/screenshoot1.png" class="d-block"/>
                        <small>14:20:00</small>
                     </div>
                     <div class="screenshoot-image">
                        <img src="assets/images/screenshoot2.png" class="d-block"/>
                        <small>14:20:00</small>
                     </div>
                     <div class="screenshoot-image">
                        <img src="assets/images/screenshoot3.png" class="d-block"/>
                        <small>14:20:00</small>
                     </div>
                     <div class="screenshoot-image">
                        <img src="assets/images/screenshoot4.png" class="d-block"/>
                        <small>14:20:00</small>
                     </div>
                  </div>
                  <router-link to="/screenshotTwo"  class="secondary-btn px-4 ms-4">View All</router-link>
               </div>
            </div>
         </div>
         <!-----RIGHT CARD END----->
      </div>
      <!----BOTTOM TABLE START----->
      <div class="screenshoot-bottom py-3">
         <table class="table table-borderless">
            <tbody>
               <tr>
                  <td>
                     <a href="">
                     <img src="assets/images/activitygoogle.png"/>
                     <small class="ms-2">Google account</small>
                     </a>
                  </td>
                  <td>Browsing</td>
                  <td>Ashikur Rahim</td>
                  <td class="screenshot-hour">4h 10m</td>
               </tr>
               <tr>
                  <td>
                     <a href="">
                     <img src="assets/images/activitygoogle.png"/>
                     <small class="ms-2">Google account</small>
                     </a>
                  </td>
                  <td>Browsing</td>
                  <td>Ashikur Rahim</td>
                  <td class="screenshot-hour">4h 10m</td>
               </tr>
               <tr>
                  <td>
                     <a href="">
                     <img src="assets/images/activitygoogle.png"/>
                     <small class="ms-2">Google account</small>
                     </a>
                  </td>
                  <td>Browsing</td>
                  <td>Ashikur Rahim</td>
                  <td class="screenshot-hour">4h 10m</td>
               </tr>
               <tr>
                  <td>
                     <a href="">
                     <img src="assets/images/activitygoogle.png"/>
                     <small class="ms-2">Google account</small>
                     </a>
                  </td>
                  <td>Browsing</td>
                  <td>Ashikur Rahim</td>
                  <td class="screenshot-hour">4h 10m</td>
               </tr>
            </tbody>
         </table>
      </div>
      <!----BOTTOM TABLE END----->
   </div>
</div> 
  </div>
    
</template>

<script>
import Loader from '../components/includes/Loading.vue'
export default {
  name: 'TimetrackdashboardUser',
  componets:{Loader},

  data() {
      return {
          loader:true
      };
  },

  mounted() {
      
  },
  created(){
        setTimeout(() => {
        this.loader=false
      }, 1000);
},
  methods: {
      
  },
};
</script>

<style  scoped>

</style>