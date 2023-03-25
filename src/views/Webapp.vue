<template>
  <TopFilter/>
  <div class="user-report-area my-3 bg-white rounded p-3 h-100">
     <div class="top-filter-area bg-white rounded p-3 d-flex justify-content-between">
          <div class="report-left d-flex align-items-center flex-wrap gap-4 w-75">
           <form action="" method="" class="d-flex gap-2 w-75">
              <select class="form-select filter-by-week">
                   <option selected>Project</option>
                   <option value="1">Project Name 1</option>
                   <option value="1">Project Name 2</option>
                   <option value="2">Project Name 3</option>
                   <option value="2">Project Name 4</option>
                </select>
                <select class="form-select filter-by-week">
                   <option selected>Sprint</option>
                   <option value="1">Sprint Name 1</option>
                   <option value="1">Sprint Name 2</option>
                   <option value="1">Sprint Name 3</option>
                   <option value="1">Sprint Name 4</option>
                   
                </select>
                <select class="form-select filter-by-week">
                   <option selected>Ashikur Rahim</option>
                   <option value="1">Select All</option>
                   <option value="2">User Email</option>
                </select>
             
             </form>
           </div>
         <div class="report-right d-flex gap-3">
           <div class="screenShoot-downloadBtn d-flex justify-content-end">
           <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-download me-2"></i>User Report</a>
            </div>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog  modal-dialog-centered">
                 <div class="modal-content ms-5">
                    <div class="modal-header report-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa-regular fa-file"></i> User Report</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                       <div class="report-generate-content d-flex flex-column justify-content-center p-5">
                          <p class="py-4 text-center"><i class="fa-solid fa-check me-2 "></i>Report generation is done</p>
                          <div class="screenShoot-downloadBtn text-center">
                          <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <i class="fa-solid fa-download me-2"></i>Download File
                         </a>
                       </div>
                       </div>
                     </div>
                    <div class="modal-footer">
                    <button type="button" class="btn report-close" data-bs-dismiss="modal">Close</button>
                   </div>
                 </div>
              </div>
           </div>
          <div class="screenShoot-downloadBtn d-flex justify-content-end">
           
           <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <i class="fa-solid fa-download me-2"></i>Project Report
           </a>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog  modal-dialog-centered modal-xl">
                 <div class="modal-content ms-5">
                    <div class="modal-header report-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                       <i class="fa-regular fa-file"></i>
                       Project Report
                       </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                       <div class="top-filter-area bg-white rounded p-3 ">
                        <form action="" method="" class="d-flex justify-content-between">
                          <div class="mb-3">
                             <input type="search" class="form-control filter-by-week" id="exampleInputEmail1" placeholder="Search">
                          </div>
                          <div class="mb-3">
                             <input type="search" class="form-control filter-by-week" id="exampleInputEmail1" placeholder="[filename].zip">
                          </div>
                         </form>
                       </div>
                       <div class="project-report-table table-bg pb-5">
                          <table class="table table-bordered">
                             <thead>
                                <tr>
                                   <th scope="col">Name</th>
                                   <th scope="col">Type</th>
                                   <th scope="col">Format</th>
                                   <th scope="col">Duration</th>
                                </tr>
                             </thead>
                             <tbody>
                                <tr>
                                   <td >User Name</td>
                                   <td>Project</td>
                                   <td>Zip</td>
                                   <td>20 Jun 2023 - 28 Jun 2023e</td>
                                </tr>
                                <tr>
                                   <td  colspan="3">
                                      <div class="form-check form-switch">
                                      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                                      <label class="form-check-label" for="flexSwitchCheckChecked">Include Headers</label>
                                      </div>
                                   </td>
                                   
                                   <td class="text-right">
                                      <div class="screenShoot-downloadBtn d-flex justify-content-end">
                                      <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                         <i class="fa-solid fa-download me-2"></i>Export Project
                                      </a>
                                   </div>
                                   </td>
                                </tr>
                           </tbody>
                       </table>
                      </div>
                      <p class="text-end">Here you can see the export progress of your reports & download them </p>
                     </div>
                    <div class="modal-footer">
                    <button type="button" class="btn report-close" data-bs-dismiss="modal">Close</button>
                   </div>
                 </div>
              </div>
           </div>
       </div>
     </div>
 </div>
 <div class="app-mainContent">
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
    <div class="app-details-area d-flex gap-5">
       <div class="app-details-left">
        <div class="screenShoot-downloadBtn pt-5">
           <a href="#">
            <i class="fa-solid fa-download me-2"></i>
             Download Zip
            </a>
            </div>
            <div class="app-left-image pb-5">
             <img src="assets/images/appimage.png"/> 
              <!-- <div class="container">
               <div class="image-area">
                 <div class="image-box active" style="--i:1" data-id="content1">
                  <img src="assets/images/googlenew.png" />
                  </div>
                  <div class="image-box" style="--i:2" data-id="content2">
                     <img src="assets/images/googlenew.png" />
                  </div>
                  <div class="image-box" style="--i:3" data-id="content3">
                     <img src="assets/images/googlenew.png" />
                  </div>
                  <div class="image-box" style="--i:4" data-id="content4">
                     <img src="assets/images/googlenew.png" />
                  </div>
                  <div class="image-box" style="--i:5" data-id="content5">
                     <img src="assets/images/googlenew.png" />
                  </div>
                  <div class="image-box" style="--i:6" data-id="content6">
                     <img src="assets/images/googlenew.png" />
                  </div>
                  <div class="image-box" style="--i:7"  data-id="content7">
                     <img src="assets/images/googlenew.png" />
                  </div>
                  <div class="image-box" style="--i:8"  data-id="content8">
                     <img src="assets/images/googlenew.png" />
                  </div>
               </div>
               <div class="content">
                  <div class="contentbx active" id="content1">
                     <div class="card">
                     <div class="textBox">
                        <h3>TODAY<br> <span>6 h 30 m</span> </h3>
                       </div>
                     </div>
                  </div>
                  </div>
               </div> -->
            </div>
         </div>
        <div class="app-details-right py-5 w-50 ">
        <table class="table table-bordered table-padding">
          <thead>
            <tr>
              <th scope="col">App/Website</th>
              <th scope="col">Type</th>
              <th scope="col">Duration</th>
             </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <a href="#">
                    <img src="assets/images/activitychrome.png" class="me-2"/>
                   <span>Google Chrome</span>
                  </a>
                 
                </div>
              </td>
              <td>Browsing</td>
              <td>2h 10m</td>
           </tr>
           <tr>
              <td>
                <div>
                  <a href="#">
                    <img src="assets/images/activitygoogle.png" class="me-2"/>
                  <span>Google Chrome</span>
                  </a>
                </div>
              </td>
              <td>Browsing</td>
              <td>2h 10m</td>
           </tr>
           <tr>
              <td>
                <div>
                  <a href="">
                    <img src="assets/images/activityfacebook.png" class="me-2"/>
                  <span>Google Chrome</span>
                  </a>
                </div>
              </td>
              <td>Browsing</td>
              <td>2h 10m</td>
           </tr>
           <tr>
              <td>
                <a href="#">
                  <div>
                  <img src="assets/images/activitychrome.png" class="me-2"/>
                  <span>Google Chrome</span>
                </div>
                </a>
              </td>
              <td>Browsing</td>
              <td>2h 10m</td>
           </tr>
           <tr>
              <td>
                <div>
                  <img src="assets/images/activitygoogle.png" class="me-2"/>
                  <span>Google Chrome</span>
                </div>
              </td>
              <td>Browsing</td>
              <td>2h 10m</td>
           </tr>
           <tr>
              <td>
                <div>
                  <img src="assets/images/activityfacebook.png" class="me-2"/>
                  <span>Google Chrome</span>
                </div>
              </td>
              <td>Browsing</td>
              <td>2h 10m</td>
           </tr>
           <tr>
              <td colspan="2" align="right">
                <div class="screenShoot-downloadBtn">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#appDetailsLog">
                   Show Detailed Log
                    </a>
                 </div>
                </td>
              <td>
                <div class="screenShoot-downloadBtn">
                  <a href="#">
                    Show Full List
                    </a>
                </div>
              </td>
           </tr>
          </tbody>
       </table>
           <!----modal---->
           <div class="modal fade" id="appDetailsLog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog  modal-dialog-centered modal-xl">
                 <div class="modal-content ms-5">
                    <div class="modal-header report-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                     <i class="fa-regular fa-eye"></i>
                       Show Detailed Log
                       </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   
                    </div>
                    <div class="modal-body">
                     <div class="app-activity-header d-flex justify-content-between py-4">
                      <p>App usage log for user name</p>
                      <div class="screenShoot-downloadBtn">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#appDetailsLog">
                           Download Zip
                        </a>
                     </div>
                    </div>
                       <div class="project-report-table table-bg pb-5">
                          <table class="table table-bordered">
                             <thead>
                                <tr>
                                   <th scope="col">Url</th>
                                   <th scope="col">Start Time</th>
                                   <th scope="col">End Time</th>
                                   <th scope="col">Duration</th>
                                </tr>
                             </thead>
                             <tbody>
                                <tr>
                                   <td >
                                    <a href="#">www.google.com</a>
                                   </td>
                                   <td>12:45 AM</td>
                                   <td>02:45 AM</td>
                                   <td>02:00:00</td>
                                </tr>
                                <tr>
                                   <td >
                                    <a href="#">www.google.com</a>
                                   </td>
                                   <td>12:45 AM</td>
                                   <td>02:45 AM</td>
                                   <td>02:00:00</td>
                                </tr>
                                <tr>
                                   <td >
                                    <a href="#">www.google.com</a>
                                   </td>
                                   <td>12:45 AM</td>
                                   <td>02:45 AM</td>
                                   <td>02:00:00</td>
                                </tr>
                                <tr>
                                   <td >
                                    <a href="#">www.google.com</a>
                                   </td>
                                   <td>12:45 AM</td>
                                   <td>02:45 AM</td>
                                   <td>02:00:00</td>
                                </tr>
                           </tbody>
                       </table>
                      </div>
                   
                     </div>
                    <div class="modal-footer">
                    <button type="button" class="btn report-close" data-bs-dismiss="modal">Close</button>
                   </div>
                 </div>
              </div>
              </div>
       </div>
     </div>
     <div class="app-footer d-flex justify-content-between align-items-center py-2 px-3">
    <div class="app-header-left">
      <i class="fa-regular fa-user me-2"></i>
      <span>Nasir Uddin</span>
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

<style lang="scss" scoped>

</style>