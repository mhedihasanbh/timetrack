<template>
   <div class="my-1">
      <TopFilter/>
   </div>
  <div class="project-task-area bg-white p-5">
     <h6>User Name</h6>
     <div class="project-taskArea">
      <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
         <button class="nav-link active" id="nav-task-tab" data-bs-toggle="tab" data-bs-target="#nav-task" type="button" role="tab" aria-controls="nav-task" aria-selected="true">Tasks</button>
         <button class="nav-link" id="nav-access-tab" data-bs-toggle="tab" data-bs-target="#nav-access" type="button" role="tab" aria-controls="nav-access" aria-selected="false">Access</button>
         <button class="nav-link" id="nav-status-tab" data-bs-toggle="tab" data-bs-target="#nav-status" type="button" role="tab" aria-controls="nav-status" aria-selected="false">Status</button>
         <button class="nav-link" id="nav-Forecast-tab" data-bs-toggle="tab" data-bs-target="#nav-forecast" type="button" role="tab" aria-controls="nav-forecast" aria-selected="false">Forecast</button>
         <button class="nav-link" id="nav-note-tab" data-bs-toggle="tab" data-bs-target="#nav-note" type="button" role="tab" aria-controls="nav-note" aria-selected="false">Note</button>
         <button class="nav-link" id="nav-setting-tab" data-bs-toggle="tab" data-bs-target="#nav-setting" type="button" role="tab" aria-controls="nav-setting" aria-selected="false">Settings</button>
       </div>
     </nav>
      <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active my-4" id="nav-task" role="tabpanel" aria-labelledby="nav-task-tab" tabindex="0">
         <form action="" method="">
           <div class="project-task-area d-flex justify-content-between">
             <div class="project-task-left d-flex align-items-center gap-2">
               <select class="form-select primary-bg" aria-label="Default select example">
                  <option selected>Show Active</option>
                 </select>
                  <div class="project-task-search p-2 d-flex align-items-center primary-bg">
                  <i class="fa-solid fa-magnifying-glass me-2"></i>
                  <input type="search" class="border-none bg-none" placeholder="Find by name"/>
              </div>
             </div>
             <div class="project-task-right d-flex align-items-center gap-2">
               <input type="text" class="primary-bg border-none p-2" placeholder="Add New Task"/>
               <a href="#" class="primary-btn px-3 py-2">Add</a>
            </div>
           </div>
         </form>
         <table class="table my-3">
            <thead>
               <tr>
                  <th>Name</th>
                  <th scope="col">Assignees</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Ashik</td>
                  <td>
                     <div class="dropdown">
                     <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Anyone
                     </button>
                     <ul class="dropdown-menu">
                        <div class="project-dropdown-area">
                              <form action="" method="">
                                 <div class="project-dropdown-header p-3">
                                    <i class="fa-solid fa-magnifying-glass me-2"></i>
                                    <input type="search" class="border-none" placeholder="Find Users or Groups..."/>
                                 </div>
                                 <div class="d-flex justify-content-between align-items-center p-4">
                                    <p>Show</p>
                                 <select class="form-select w-50  border-none">
                                 <option selected>Active</option>
                                 <option >Inactive</option>
                                 </select>
                                 </div>
                           
                           <hr/>
                           <div class="project-dropdown-body project-access-dropdown px-3">
                              <div class="form-check border-bottom py-2">
                                 <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                 <label class="form-check-label" for="flexCheckDefault">
                                    Select All
                                 </label>
                              </div>
                              
                              <div class="form-check py-2 ">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" >
                              <label class="form-check-label" for="flexCheckChecked">
                                 User name
                              </label>
                              </div>
                           </div> 
                        </form>
                        </div>
                     </ul>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
      <div class="tab-pane fade" id="nav-access" role="tabpanel" aria-labelledby="nav-access-tab" tabindex="1">
         <div class="access-content py-4">
            <p class="fw-bold">Visibility </p>
            <p>Everyone can track time on public projects.</p>
            <div class="access-btns py-2">
               <form action="" method="">
                     <div class="form-check form-check-inline primary-bg px-4 py-2">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">Private</label>
                     </div>
                     <div class="form-check form-check-inline primary-bg px-4 py-2">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked>
                        <label class="form-check-label" for="inlineCheckbox1">Public</label>
                     </div>
                 </form>
                 <div class="addMember-btn my-2">
                    <a href="#" class="primary-btn px-3 py-2" data-bs-toggle="modal" data-bs-target="#memberModal"><i class="fa-solid fa-plus me-2"></i>Add Member</a>
                 </div>
                  <!-- Modal -->
                  <div class="modal fade" id="memberModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg">
                     <div class="modal-content">
                        <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Set Rate</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="member-add-area">
                            <p class="member-title fw-bold py-2"><i class="fa-solid fa-check"></i> We'll apply this rate to all entries made by Ashikur Rahim Ashik on this project.</p>
                            <form action="" method="">
                               <div class="py-2">
                                 <input type="text" class="form-control primary-bg w-75" placeholder="What is the new billable rate"/>
                               </div>
                               <div class="bill-rate">
                                 <p>Apply this billable rate to:</p>
                                 <div class="time-entry-from d-flex gap-3 align-items-center py-2">
                                    <p><i class="fa-solid fa-check rate-check me-2"></i> Time entries from</p>
                                    <div class="calander-icon">
                                      <i class="fa-regular fa-calendar-days icon me-2"></i>  
                                      <input type="date" class="form-control filter-by-week"  placeholder="filter date">
                                   </div> 
                                   <p>Onwards</p>
                                 </div>
                                 <p><i class="fa-solid fa-check rate-check me-2"></i>All past and future time entries </p>
                               </div>
                            </form>
                          </div>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="primary-bg px-3 py-2 border-none" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="primary-btn px-3 py-2">Save changes</button>
                        </div>
                     </div>
                  </div>
                  </div>
               
            </div>
         </div>
        
         <table class="table my-3">
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Billable Rate (USD)</th>
                  <th>Role</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Ashik</td>
                  <td>
                     <div class="d-flex gap-4">
                        <div class="primary-bg px-4 py-2">
                        <a href=""><i class="fas fa-ellipsis-h"></i></a>
                     </div>
                    <div class="primary-bg px-4 py-2">
                     <a href=""><i class="fa-solid fa-arrows-rotate me-2"></i>Change</a>
                    </div>
                     </div>
                     
                  </td>
                  <td>Owner</td>
               </tr>
            </tbody>
         </table>
      </div>
      <div class="tab-pane fade" id="nav-status" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
        <div class="row py-5">
           <div class="col-lg-4">
            <table class="table table-bordered">
            <tbody>
               <tr>
                  <td>Tracked</td>
                  <td class="fw-bold">0.00 h</td>
               </tr>
               <tr>
                  <td>Billable</td>
                  <td class="fw-bold">0.00 h</td>
               </tr>
               <tr>
                  <td>Non-Billable</td>
                  <td class="fw-bold">0.00 h</td>
               </tr>
               <tr>
                  <td>Amount</td>
                  <td class="fw-bold">0.00 USD</td>
               </tr>
            </tbody>
            </table>
           </div>
           <div class="col-lg-8">
             <div class="status-right primary-bg ">
                <div class="h-100 d-flex align-items-center justify-content-center py-5">
                  <p>0.00 h</p>
                </div>
                <div class="status-billBtns d-flex align-items-center justify-content-center primary-bg py-5">
                  
                  <form action="" method="">
                     <div class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                     <label class="form-check-label" for="inlineRadio1">Billable</label>
                     </div>
                     <div class="form-check form-check-inline">
                     <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                     <label class="form-check-label" for="inlineRadio2">Non-Billable</label>
                     </div>
                  </form>
                </div>
             </div>
           </div>
        </div>
        <div class="row">
         <div class="col-lg-12">
            <div class="status_show d-flex justify-content-end">
               <div class="py-2">
                  <select class="form-select primary-bg" aria-label="Default select example">
                  <option selected>Show All</option>
                  <option value="1">Show Active</option>
                  <option value="2">Show Done</option>
                 </select>
               </div>
               
            </div>
            <table class="table table-bordered px-3 primary-bg">
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Assignees</th>
                     <th>Tracked</th>
                     <th>Amount</th>
                  </tr>
                 
               </thead>
            <tbody>
              <tr>
               <td>Ashik</td>
               <td>Anyone</td>
               <td>0,00h</td>
               <td>0,00 USD</td>
              </tr>
              
            </tbody>
            </table>
         </div>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-forecast" role="tabpanel" aria-labelledby="nav-forecast-tab" tabindex="0">
         <div class="forecast-area py-5 h-100">
            <div class="forecast-header py-2 px-3">
               <a href="#" class="me-3">Pro Feature</a>
               <a href="#" class="upgrade-btn px-3 py-2">Upgrade</a>
            </div>
            <div class="forecast-content primary-bg  d-flex flex-column justify-content-center align-items-center py-5">
                <div class="forcast-image text-center">
                  <img src="assets/images/forecast.png" class="pt-5"/>
                </div>
               <p class="pb-5 pt-2">Visualize project progress, compare scheduled vs tracked time, and see if the project will go over estimate.<a href="#">Learn more</a></p>
            </div>
         </div>
      </div>
      <div class="tab-pane fade" id="nav-note" role="tabpanel" aria-labelledby="nav-note-tab" tabindex="0">
         <div class="note-area py-5 h-100">
            <form action="" method="">
               <div class="mb-3">
               <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="add note"></textarea>
               </div>
               <div class="text-end">
                  <button type="submit" class="primary-btn py-2 px-4">Add</button>
               </div>
            </form>
         </div>
      </div>
      <div class="tab-pane fade" id="nav-setting" role="tabpanel" aria-labelledby="nav-setting-tab" tabindex="0">
         <div class="project-setting-area py-5">
             <form>
               <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label fw-bold">Name</label>
               <input type="text" class="form-control primary-bg w-50" id="exampleFormControlInput1" placeholder="Ashik">
               </div>
               <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label fw-bold">Client</label>
                <select class="form-select primary-bg w-25"  @change="searchClient">
                  <option value="0" selected>No Client</option>
                  <option value="projectclient">Search Client</option>
                  </select>
                  <small>Used for grouping similar projects together.</small>
               </div>
              
               <form action="" method="">
                  <div class="project-dropdown-area w-25 mb-4" v-if="projectHistory==='projectclient' ">
                  <div class="project-dropdown-header p-3">
                     <i class="fa-solid fa-magnifying-glass me-2"></i>
                     <input type="search" class="border-none" placeholder="Find by name"/>
                  </div>
                  <div class="d-flex justify-content-between align-items-center p-4">
                     <p>Show</p>
                  <select class="form-select w-50  border-none">
                  <option selected>Active</option>
                  <option >Inactive</option>
                  </select>
                  </div>
                  <hr/>
                  <div class="no-client py-3 text-center">
                     <p><i class="fas fa-ban me-2"></i>No Clients Yet</p>
                  </div>
                  </div>

               </form>
               <!-- <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label fw-bold">Color</label>
               <input type="color" class="form-control" id="" name=""/>
               <small>Use colour  to visually differentiate projects.</small>
              </div> -->

              <div class="mb-3 form-switch p-0">
                  <p class="fw-bold">Billable by default</p>
                  <p>All new entries on this project will be initially set as billable.</p>
                  <div class="ps-4 my-3">
                     <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                  <label class="form-check-label ms-2" for="flexSwitchCheckChecked">Yes</label>
                  </div>
                 
               </div>
               <div class="mb-3 form-switch p-0">
                  <p class="fw-bold">Project billable rate</p>
                  <p>Billable rate used for calculating billable amount for this project.</p>
                  <p class="py-2 fw-bold">Hourly rate (USD)</p>
                  <div class="project-rate d-flex py-2">
                     <input type="text" class="form-control " placeholder="---">
                     <button type="submit" class="">Set Rate</button>
                  </div>
                 
               </div>
               <div class="mb-3 form-switch p-0">
                  <p class="fw-bold">Project estimate</p>
                  <p>Choose how you wish to track project progress (time or fixed fee budget).</p>
                   <div class="project-rate d-flex py-2">
                  <select class="form-select primary-bg w-25" aria-label="Default select example">
                  <option selected>No Estimate</option>
                  <option selected>Time Estimate </option>
                  <option selected>Project Budget</option>
                  </select>
                  </div>
                 
               </div>
            </form>
            <div class="project-setting-upgrade">
               <div class="upgrade-header p-2">
                  <a href="#">Pro Feature</a>
                  <a href="#" class="upgrade-btn px-3 py-2 ms-3">Upgrade</a>
               </div>
               <div class="mb-3 form-switch p-0">
                  <p class="fw-bold py-2">Add Additional Fields</p>
                  <p>All time entries on this project will have these fields.</p>
                   <div class="project-rate d-flex py-2">
                  <select class="form-select primary-bg w-25" aria-label="Default select example">
                  <option selected>Add more fields...</option>
                  </select>
                  </div>
                 
               </div>
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
   name: 'projectOne',
   components:{TopFilter},
 
   data() {
       return {
         projectHistory:""
       };
   },
 
   mounted() {
       
   },
 
   methods: {
      searchClient(event){
         console.log(event.target.value);
        this.projectHistory=event.target.value;
      }
   },
 };
 </script>
 
 <style  scoped>
 
 </style>