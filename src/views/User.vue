<template>
   <div class="profile-loader"  v-if="loader">
     <Loader/>
  </div>
<div v-if="!loader">
<!--user filter area start-->
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
                  <select id="selectbox3" class="form-control user-filterBtn decorated"  >
                  <option selected>Name</option>
                  <option value="1">Team</option>
                  <option value="2">Id</option>
                  <option value="2">Tracking Status</option>
                </select>
                  <select id="selectbox4" class="form-control user-filterBtn">
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
    <!--user filter area end-->
   <div class="user-wrapper bg-white p-2 my-3 ">
   <div class="user-info-filter d-flex justify-content-between px-3">
      <div class="user-info-title">
         <h4>Users</h4>
      </div>
     
   </div>
   <!-----USER INFO BOX1 START----->
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
      <div class="user-info-area d-flex justify-content-between ">
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
            <h6 class="py-2">Time</h6>
            <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
               <div class="progress-bar progress-bar-striped " style="width: 75%;background-color:#913175"></div>
            </div>
         </div>
      </div>
      <div class="full-screen-arrow">
         <router-link to="/screenshotone" > <i class="fa-sharp fa-solid fa-up-right-and-down-left-from-center"></i></router-link>
      </div>
   </div>
   <!-----USER INFO BOX1 END----->
   <!-----USER INFO BOX2 START----->
   <div class="user-main-content my-3 rounded-3 px-4 py-4">
      <div class="user-name-area d-flex justify-content-between">
         <div class="user-name d-flex gap-2 align-items-center">
            <i class="fa-solid fa-user-large"></i>
            <h5>Ashikur Rahim Ashik</h5>
         </div>
         <div class="user-track-end">
            <a href="#"><i class="fa-solid fa-circle me-2"></i>Tracking Stopped </a>
         </div>
      </div>
      <div class="user-info-area d-flex justify-content-between ">
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
            <h6 class="py-2">Time</h6>
            <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
               <div class="progress-bar progress-bar-striped " style="width: 75%;background-color:#913175"></div>
            </div>
         </div>
      </div>
      <div class="full-screen-arrow">
         <router-link to="/screenshotone" > <i class="fa-sharp fa-solid fa-up-right-and-down-left-from-center"></i></router-link>
      </div>
   </div>
   <!-----USER INFO BOX2 END----->
   <!-----USER INFO BOX3 START----->
   <div class="user-main-content my-3 rounded-3 px-4 py-4">
      <div class="user-name-area d-flex justify-content-between">
         <div class="user-name d-flex gap-2 align-items-center">
            <i class="fa-solid fa-user-large"></i>
            <h5>Ashikur Rahim Ashik</h5>
         </div>
         <div class="user-track-end">
            <a href="#"><i class="fa-solid fa-circle me-2"></i>Tracking Stopped </a>
         </div>
      </div>
      <div class="user-info-area d-flex justify-content-between ">
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
            <h6 class="py-2">Time</h6>
            <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
               <div class="progress-bar progress-bar-striped " style="width: 75%;background-color:#913175"></div>
            </div>
         </div>
      </div>
      <div class="full-screen-arrow">
         <router-link to="/screenshotone" > <i class="fa-sharp fa-solid fa-up-right-and-down-left-from-center"></i></router-link>
      </div>
   </div>
   <!-----USER INFO BOX3 END----->
   <!-----USER INFO BOX4 START----->
   <div class="user-main-content my-3 rounded-3 px-4 py-4">
      <div class="user-name-area d-flex justify-content-between">
         <div class="user-name d-flex gap-2 align-items-center">
            <i class="fa-solid fa-user-large"></i>
            <h5>Ashikur Rahim Ashik</h5>
         </div>
         <div class="user-track-end">
            <a href="#"><i class="fa-solid fa-circle me-2"></i>Tracking Stopped </a>
         </div>
      </div>
      <div class="user-info-area d-flex justify-content-between ">
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
            <h6 class="py-2">Time</h6>
            <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
               <div class="progress-bar progress-bar-striped " style="width: 75%;background-color:#913175"></div>
            </div>
         </div>
      </div>
      <div class="full-screen-arrow">
         <router-link to="/screenshotone" > <i class="fa-sharp fa-solid fa-up-right-and-down-left-from-center"></i></router-link>
      </div>
   </div>
   <!-----USER INFO BOX4 END----->
  </div>
</div>
   
  
</template>

<script>
 import Loader from '../components/includes/Loading.vue'
export default {
    name: 'TimetrackdashboardUser',
    components:{Loader},

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

<style lang="scss" scoped>

</style>