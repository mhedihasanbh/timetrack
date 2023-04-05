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
            <div class="screenShoot-downloadBtn ">
            <a href="#" class="py-2 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-plus me-2"></i>Add New Task</a>
             </div>
           
           <!-- Modal -->
           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog  modal-dialog-centered modal-lg">
                  <div class="modal-content ms-5">
                     <div class="modal-header report-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                         <div class="meeting-edit-form">
                            <form action="" method="">
                              <div class="mb-3">
                                <label>Task Title</label>
                                <input type="text" class="form-control" placeholder="task tittle" name="" />
                              </div>
                              <div class=" row mb-3">
                                 <div class="col">
                                    <label>Priority</label>
                                 <select id="selectbox1" class="form-control text-dark">
                                    <option value="0">Critical</option>
                                    <option value="1">High</option>
                                    <option value="2">Medium</option>
                                    <option value="3">Low</option>
                                 </select>
                                 </div>
                                 <div class="col">
                                    <label>Status</label>
                                 <select id="selectbox2" class="form-control text-dark">
                                    <option value="0">Not Started</option>
                                    <option value="1">In Progress</option>
                                    <option value="2">In Review</option>
                                    <option value="3">Complete</option>
                                    <option value="4">Cancel</option>
                                   
                                    
                                </select>
                                 </div>
                              </div>
                              
                             <div class="row mb-3">
                              <div class="col task-date">
                                 <label>Start Date</label>
                                <input type="date" class="form-control" placeholder="add meeting tittle" name="" />
                              </div>
                              <div class="col task-date">
                                 <label>End Date</label>
                                <input type="date" class="form-control" placeholder="add meeting tittle" name="" />
                              </div>
                             </div>
                              
                              
                              <div class="mb-3">
                                 <label>Details</label>
                                 <textarea class="form-control"></textarea>
                              </div>
                             
                            
                             
                           
                             
                            </form>
                          </div>
                      </div>
                     <div class="modal-footer">
                     <button type="button" class=" btn primary-bg report-close text-dark" data-bs-dismiss="modal">Close</button>
                     <button type="button" class="btn primary-btn">Create</button>
                    </div>
                  </div>
               </div>
            </div>
           <div class="screenShoot-downloadBtn ">
            
            <a href="#" class="py-2 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal2">
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
         <table class="table table-padding table-sm">
            <thead>
               <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Status</th>
                  <th scope="col">Planned End</th>
                  <th scope="col">Priority</th>
                  <th class="text-center">Plan Start</th>
                  <th class="text-center">Plan End</th>
                
                  <th scope="col">Action</th>
               </tr>
            </thead>
            <tbody>
               
               <tr>
                  <td>test title </td>
                  <td>Not Started </td>
                  <td>Select</td>
                  <td>Medium</td>
                  <td class="text-center task-date" >
                     <input type="date" class="form-control" value="12-3.09"/>
                  </td>
                  <td class="text-center task-date">
                     <input type="date" class="form-control"  value="12-3.09"/>
                  </td>
                  <td>
                     <a href="#" class="dropdown-toggle pt-3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis-vertical fa-xl"></i>
                     </a>
                     <ul class="dropdown-menu action-multiList">
                        <li><a href="#"> <i class="fa-regular fa-clipboard me-2"></i>Copy</a></li>
                        <li><a href="#"> <i class="fa-solid fa-up-down-left-right me-2"></i>Move</a></li>
                        <li><a href="#"> <i class="fa-solid fa-trash-can me-2"></i>Delete</a></li>
                        
                     </ul>
                     </td>
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