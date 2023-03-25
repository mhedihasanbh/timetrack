<template>
  <TopFilter/>
  <div class="user-report-area my-3 bg-white rounded p-3 h-100">
     <div class="top-filter-area bg-white rounded p-3 d-flex justify-content-between">
          <div class="report-left d-flex align-items-center flex-wrap gap-4 w-75">
            <p class="fw-bold">Attendance</p>
           </div>
         <div class="report-right d-flex w-50 justify-content-end gap-3">
           <div class="screenShoot-downloadBtn d-flex justify-content-end">
           <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-download me-2"></i>Download Detailed</a>
            </div>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg  modal-dialog-centered">
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
                       <div class="project-report-table table-bg pb-5">
                          <table class="table table-bordered">
                              <tbody>
                                <tr>
                                   <td >
                                    <i class="fa-regular fa-clipboard me-3"></i>Task Report Per User
                                    </td>
                                   <td class="attendance-finish">
                                    <i class="fa-solid fa-check me"></i>
                                     Finished
                                    </td>
                                   <td>
                                    <div class="screenShoot-downloadBtn text-center">
                                      <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                      <i class="fa-solid fa-download me-2"></i>Download File
                                    </a>
                                     </div>
                                    </td> 
                                  </tr>
                                  <tr>
                                   <td >
                                    <i class="fa-regular fa-clipboard me-3"></i>Task Report Per User
                                    </td>
                                    <td class="attendance-finish">
                                    <i class="fa-solid fa-check me"></i>
                                     Finished
                                    </td>
                                   <td>
                                    <div class="screenShoot-downloadBtn text-center">
                                      <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                      <i class="fa-solid fa-download me-2"></i>Download File
                                    </a>
                                     </div>
                                    </td> 
                                  </tr>
                                  <tr>
                                   <td >
                                    <i class="fa-regular fa-clipboard me-3"></i>Task Report Per User
                                    </td>
                                    <td class="attendance-finish">
                                    <i class="fa-solid fa-check me"></i>
                                     Finished
                                    </td>
                                   <td>
                                    <div class="screenShoot-downloadBtn text-center">
                                      <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                      <i class="fa-solid fa-download me-2"></i>Download File
                                    </a>
                                     </div>
                                    </td> 
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
          <div class="screenShoot-downloadBtn  d-flex justify-content-end">
           
           <a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <i class="fa-solid fa-download me-2"></i>Download Overview
           </a>
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
  <div class="attendance-details-wrapper bg-white pb-2">
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

    <div class="attendance-details-area d-flex justify-content-between py-3 my-4">
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
                Not Started Yet
               </a>
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