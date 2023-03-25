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
      <div class="report-table table-bg">
         <table class="table table-padding">
            <thead>
               <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Members</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Type</th>
                  <th scope="col">Invoiced</th>
                  <th scope="col">Actions</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td class="report-folder">
                     <i class="fa-solid fa-folder"></i> Title Name
                     </td>
                  <td>08</td>
                  <td>02:00:00</td>
                  <td>Type Name</td>
                  <td>01</td>
                  <td>2h 10m</td>
               </tr>
               <tr>
                  <td class="report-folder">
                     <i class="fa-solid fa-folder"></i> Title Name
                     </td>
                  <td>08</td>
                  <td>02:00:00</td>
                  <td>Type Name</td>
                  <td>01</td>
                  <td>2h 10m</td>
               </tr>
               <tr>
                  <td class="report-folder">
                     <i class="fa-solid fa-folder"></i> Title Name
                     </td>
                  <td>08</td>
                  <td>02:00:00</td>
                  <td>Type Name</td>
                  <td>01</td>
                  <td>2h 10m</td>
               </tr>
              
            </tbody>
        </table>
      </div>
      <div class="user-btn d-flex justify-content-end pb-5">
         <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal3"><i class="fa-regular fa-circle-user me-2"></i>See by Users</a>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog  modal-dialog-centered modal-xl">
                  <div class="modal-content ms-5">
                     <div class="modal-header report-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <i class="fa-regular fa-circle-user me-2"></i>
                        See by Users
                        </h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                        
                        <div class="user-info-table table-bg">
                           <table class="table table-bordered">
                              <thead>
                                 <tr>
                                    <th scope="col">User</th>
                                    <th scope="col">Work Time</th>
                                    <th scope="col">Invoiced</th>
                                  </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td >User Name</td>
                                    <td>00:20:20</td>
                                    <td>02</td>
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