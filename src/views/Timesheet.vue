<template>
    <div class="profile-loader"  v-if="loader">
       <Loader/>
    </div>
    <div v-if="!loader">
       <div class="project-top d-flex align-items-center gap-4 ">
          <div>
             <h2>Timesheets</h2>
          </div>
          <div class="time-sheet-button">
             <!-- <a href="" class="time-entry-btn  pe-5">Time Entry</a>
                <a href="" class="time-review-btn">In Review/Approved</a> -->
             <ul class="nav nav-pills  px-4" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                   <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Time Entry</button>
                </li>
                <li class="nav-item" role="presentation">
                   <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">In Review/Approved</button>
                </li>
             </ul>
          </div>
          <div class="time-shhetAdd">
             <div>
                <form action="" method="" class="d-flex gap-2">
                   <div>
                      <input type="datetime-local" class="form-control">
                   </div>
                   <div>
                      <button type="button" class="primary-btn py-2 px-4 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Add Task</button>
                      <div class="dropdown-menu timesheet-dropdown">
                <form>
                <input type="search" class="form-control" placeholder="search task"/>
                </form>
                </div>
                </div>
                </form>
             </div>
          </div>
       </div>
       <div class="tab-wrapper d-flex justify-content-center align-items-center">
          <div class="tab-content " id="pills-tabContent">
             <div class="tab-pane fade show active d-flex justify-content-center align-items-center" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                <div class="time-sheet-wrapper">
                   <div class="clock-image text-center py-2">
                      <img src="assets/images/timesheetClock.png"/>
                   </div>
                   <div class="timesheet-content">
                      <h3>No Timesheets Submitted</h3>
                      <p>There are no timesheets pending to be approved.</p>
                   </div>
                </div>
             </div>
             <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">No Time sheet yet</div>
          </div>
       </div>
       <div class="timesheet-table py-4">
          <table class="table">
             <thead>
                <tr>
                   <th scope="col">Task Title</th>
                   <th scope="col">Sat</th>
                   <th scope="col">Sun</th>
                   <th scope="col">Mon</th>
                   <th scope="col">Tue</th>
                   <th scope="col">Thu</th>
                   <th scope="col">Fri</th>
                   <th scope="col">Action</th>
                </tr>
             </thead>
             <tbody>
                <tr>
                   <td>Laravel</td>
                   <td>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#timeSheetModal">
                      <i class="fa-regular fa-clock"></i>
                      </a>
                   </td>
                   <td>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#timeSheetModal">
                      <i class="fa-regular fa-clock"></i>
                      </a>
                   </td>
                   <td>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#timeSheetModal">
                      <i class="fa-regular fa-clock"></i>
                      </a>
                   </td>
                   <td>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#timeSheetModal">
                      <i class="fa-regular fa-clock"></i>
                      </a>
                   </td>
                   <td>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#timeSheetModal">
                      <i class="fa-regular fa-clock"></i>
                      </a>
                   </td>
                   <td>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#timeSheetModal">
                      <i class="fa-regular fa-clock"></i>
                      </a>
                   </td>
                   <td>
                      <a href="#">
                      <i class="fa-solid fa-xmark"></i>
                      </a>
                   </td>
                </tr>
             </tbody>
          </table>
          <!---time sheet edit popup---->
          <div class="modal fade" id="timeSheetModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                   <div class="modal-header remove-timeHeader">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Time Entry:mon 3rd April 2023</h1>
                      <i class="fas fa-times fa-lg remove-closeBtn" data-bs-dismiss="modal" aria-label="Close"></i>
                   </div>
                   <div class="modal-body">
                      <form action="" method="">
                         <div class="mb-3">
                            <label>Task</label>
                            <input type="text" placeholder="task name" class="primary-bg form-control" readonly/>
                         </div>
                         <div class="mb-3">
                            <label>Project</label>
                            <input type="text" placeholder="no project assign" class="form-control" />
                         </div>
                         <div class="mb-3">
                            <label>Note</label>
                            <textarea class="form-control" placeholder="add note" rows="5"></textarea>
                         </div>
                         <div class=" row mb-3">
                            <div class="col">
                               <label>Time Hour Entry</label>
                               <select id="selectbox1" class="form-control text-dark">
                                  <option value="0" selected>Hour</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="3">4</option>
                                  <option value="3">5</option>
                                  <option value="3">6</option>
                                  <option value="3">7</option>
                                  <option value="3">8</option>
                                  <option value="3">9</option>
                                  <option value="3">10</option>
                                  <option value="3">11</option>
                                  <option value="3">12</option>
                               </select>
                            </div>
                            <div class="col">
                               <label>Time Mintues Entry</label>
                               <select id="selectbox2" class="form-control text-dark">
                                  <option value="0" selected>Mintues</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="4">5</option>
                                  <option value="4">6</option>
                                  <option value="4">7</option>
                                  <option value="4">8</option>
                                  <option value="4">9</option>
                                  <option value="4">10</option>
                                  <option value="4">11</option>
                                  <option value="4">12</option>
                                  <option value="4">13</option>
                                  <option value="4">14</option>
                                  <option value="4">15</option>
                                  <option value="4">16</option>
                                  <option value="4">17</option>
                                  <option value="4">18</option>
                                  <option value="4">19</option>
                                  <option value="4">20</option>
                                  <option value="4">21</option>
                                  <option value="4">22</option>
                                  <option value="4">23</option>
                                  <option value="4">24</option>
                                  <option value="4">25</option>
                                  <option value="4">26</option>
                                  <option value="4">27</option>
                                  <option value="4">28</option>
                                  <option value="4">29</option>
                                  <option value="4">30</option>
                               </select>
                            </div>
                         </div>
                         <div class="mb-3">
                            <input type="text" class="primary-bg form-control " readonly placeholder="Total Time: 0 hours 29 mintues"/>
                         </div>
                      </form>
                   </div>
                   <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="primary-btn px-3 py-2">Save Change</button>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </template>
 <script>
    import Loader from '../components/includes/Loading.vue'
    export default {
        name: 'TimetrackdashboardTimesheet',
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