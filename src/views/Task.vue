<template>
    <!--user task area start-->
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
    <!--user task area end-->
   <div class="user-report-area my-3 bg-white rounded p-3 h-100">
      <div class="top-filter-area bg-white rounded p-3 d-flex justify-content-between">
           
          <div class="report-right d-flex gap-3">
            <div class="screenShoot-downloadBtn ">
            <a href="#" class="py-2 px-3" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-plus me-2"></i>Add New Task</a>
             </div>
           
           <!-- Modal -->
           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog  modal-dialog-centered modal-lg">
                  <div class="modal-content ms-5">
                     <div class="modal-header report-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa-solid fa-bars-progress me-2"></i>Add Task</h1>
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
 
 <style lang="scss" scoped>
 
 </style>