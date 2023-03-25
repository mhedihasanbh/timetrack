<template>
       <TopFilter/>
       <div class="user-wrapper bg-white p-2 my-3 ">
           <div class="user-info-filter d-flex justify-content-between px-3">
             <div class="user-info-title">
                <h4>Users</h4>
             </div>
             <div class="user-info-right w-25">
               <form action="" method="" class="d-flex gap-2 align-items-center">
                  <select class="form-select">
                   <option selected>Name</option>
                   <option value="1">sajib</option>
                   <option value="2">mehedi</option>
                </select>
                <select class="form-select">
                   <option value="1">Ascending</option>
                   <option value="2">Descending</option>
                </select>
             </form>
           </div>
           </div>
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
                            <a href="#" class="secondary-btn">Remove Time</a>
                            <a href="#" class="secondary-btn">Add Manual Time</a>
                         </div>
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