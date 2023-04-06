<template>
    <div>
        <div class="left-menu py-5">
      <div class="menubar-content py-3">
         <div class="sidebar-profile d-flex gap-2">
             <img src="assets/images/userprofile.png"/>
             <div class="profile-text">
                <h5>Ashikur</h5>
                <h6>Manager</h6>
             </div>
           </div>
         <nav class="animated bounceInDown">
             <ul id="sidebar">
                <li class="setItemClear" id="dashboard">
                 <router-link to="/">
                   <img src="assets/images/dashboard.png"/>
                   Dahboard 
                 </router-link>
               </li>
               <!----dropdownlist start------>
                 

                   
                 <li class="drop-down">
                   <div class="icon-link title">
                     <router-link to="/project">
                      <img src="assets/images/project.png"/>
                       <span>Project</span>
                      </router-link>
                    
                   </div>
                  
                  </li>
                   <!----dropdownlist end------>
                    <!----dropdownlist start------>
                 <li class="drop-down" @click='toggleone = !toggleone'>
                   <div class="icon-link title d-flex justify-content-between align-items-center pe-4">
                     <a class="">
                       <img src="assets/images/report (3).png"/>
                       <span>Reports</span>
                      </a>
                      <i class="fa-solid fa-angle-down angel-icon"></i>
                   </div>
                   <div class="sub-menu" v-show='toggleone'>
                     <router-link to="/user"              class="link" @click='toggleone = !toggleone' v-on:click='dropdown("toggleone")'>User</router-link>
                     <router-link to="/screenshotTwo"      class="link" @click='toggleone = !toggleone' v-on:click='dropdown("toggleone")'>Screenshots</router-link>
                     <router-link to="/task"              class="link" @click='toggleone = !toggleone' v-on:click='dropdown("toggleone")'>Tasks</router-link>
                     <router-link to="/webapp"      class="link" @click='toggleone = !toggleone' v-on:click='dropdown("toggleone")'>App Usage</router-link>
                     <router-link to="/attendance"        class="link" @click='toggleone = !toggleone' v-on:click='dropdown("toggleone")'>Attendance</router-link>
                     <router-link to="/productivityrating"          class="link" @click='toggleone = !toggleone' v-on:click='dropdown("toggleone")'>Productivity</router-link>
                   </div>
                  </li>
                   <!----dropdownlist end------>
                  
                 <li class="drop-down">
                   <div class="icon-link title">
                     <router-link to="/newboard">
                       <img src="assets/images/board.png"/>
                       <span>Board</span>
                      </router-link>
                    
                   </div>
                  
                  </li>
                  <li  id="meeting">
                   <div class="icon-link">
                     <router-link to="/meeting">
                       <img src="assets/images/meeting.png"/>
                       <span>Meeting</span>
                      </router-link>
                    </div>
                  </li>
                  <li  id="task" >
                   <div class="icon-link">
                     <router-link to="/task">
                       <img src="assets/images/task.png"/>
                       <span>Task</span>
                      </router-link>
                   </div>
                 </li>
                  <li class="drop-down" @click='toggletwo = !toggletwo'>
                   <div class="icon-link title d-flex justify-content-between align-items-center pe-4">
                     <router-link to="/timesheet">
                       <img src="assets/images/timesheet.png"/>
                       <span>Timesheets</span>
                      </router-link>
                   </div>
                  
                  </li>
                  
                 <li  id="editTime">
                   <div class="icon-link ">
                     <router-link to="/edittime">
                       <img src="assets/images/edittime.png"/>
                       <span>Edit Time</span>
                      </router-link>
                     
                   </div>
                   
                  </li>
                  <li class="drop-down" @click='togglefour = !togglefour'>
                   <div class="icon-link title d-flex justify-content-between align-items-center pe-4">
                     <a>
                       <img src="assets/images/setting.png"/>
                       <span>Settings</span>
                      </a>
                      <i class="fa-solid fa-angle-down angel-icon"></i>
                   </div>
                   <div class="sub-menu" v-show='togglefour'>
                     <router-link to="/billing" class="link" @click='togglefour = !togglefour' v-on:click='dropdown("togglefour")'>Billing</router-link>
                     <router-link to="/userseeting" class="link" @click='userseeting = !userseeting' v-on:click='dropdown("userseeting")'>User</router-link>
                     <router-link to="/emailNotification" class="link" @click='togglefour = !togglefour' v-on:click='dropdown("togglefour")'>Email Notifications</router-link>
                     <router-link to="/integration"   class="link" @click='togglefour = !togglefour' v-on:click='dropdown("togglefour")'>Integrations</router-link>
                     <router-link to="/compnay"   class="link" @click='togglefour = !togglefour' v-on:click='dropdown("togglefour")'>Company Setting</router-link>
                     <router-link to="/workschedule"  class="link" @click='togglefour = !togglefour' v-on:click='dropdown("togglefour")'>Work Schedules</router-link>
                   </div>
                  </li>
                  <li  id="messanger">
                   <div class="icon-link ">
                     <router-link to="/messanger" >
                       <img src="assets/images/messenger.png"/>
                       <span>Messanger</span>
                      </router-link> 
                  </div>
                </li>
                  <li  id="download">
                   <div class="icon-link ">
                     <router-link to="/download" href="download.html ">
                       <img src="assets/images/download (40).png"/>
                       <span>Download</span>
                      </router-link> 
                  </div>
                </li>
                 
                  <li  id="profile">
                   <div class="title">
                     <router-link to="/profile" @click="pageLoad()">
                     <div v-if="loading" class="spinner-border"></div>
                       <img src="assets/images/profile.png"/>
                       <span>Profile</span>
                      </router-link>
                     </div>
                 </li>
               </ul>
           </nav>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'TimetrackdashboardSidebar',
    data() {
        return {
          loading:false,
          toggle: false,
          toggleone: false,
          toggletwo: false,
          togglethree:false,
          togglefour:false,
          userseeting:false
        };
    },
    methods:{
      pageLoad(){
        this.loading=!false;
       setTimeout(()=>{
         this.loading=!true
       },1000)
      },
      dropdown(e){
        if('toggle' == e){
          this.toggleone = false
          this.toggletwo = false
          this.togglethree = false
          this.togglefour=false
        }
        if('toggleone' == e){
          this.toggle = false
          this.toggletwo = false
          this.togglethreee = false
          this.togglefour=false
        }
        if('toggletwo' == e){
          this.toggle = false
          this.toggleone = false
          this.togglethree = false
          this.togglefour=false
        }
        if('togglethree' == e){
          this.toggle = false
          this.toggleone = false
          this.toggletwo = false
          this.togglefour=false
        }
        if('togglefour' == e){
          this.toggle = false
          this.toggleone = false
          this.toggletwo = false
          this.togglethree = false
        }
        if('userseeting' == e){
          this.toggle = false
          this.toggleone = false
          this.toggletwo = false
          this.togglethree = false
          this.togglefour=false
        }
      }
    },
   
};
</script>

<style scoped>
</style>