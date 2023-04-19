<template>
   <div class="profile-loader"  v-if="loader">
     <Loader/>
  </div>
<div v-if="!loader">
   <div class="my-3">
      <TopFilter/>
   </div>
   <div class="row py-5">
     <div class="col-lg-4 col-xl-3 col-md-6">
        <div class="boardBox-wrapper h-100 px-3 py-2" id="box1" >
           <div class="board-title">
              <h6>Not Started</h6>
           </div>
           <div class="board-task my-3">
              <!-- Button trigger modal -->
              <a href="#" class="px-2 py-3" data-bs-toggle="modal" data-bs-target="#board-task">
              Add New Task
              </a>
              <!-- Modal -->
              <div class="modal fade" id="board-task" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
           </div>
           <div id="box-One" class="sortable-list" ondrop="drop(event)" ondragover="allowDrop(event)">
              <div class="item bg-white px-2 py-2 rounded-2 my-2" id="drag2" draggable="true" ondragstart="drag(event)">
                 <div class="board-details board-box">
                    <p class="itemcontent">outreach plan Process design and blogging test</p>
                 </div>
              </div>
              <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag10" draggable="true" ondragstart="drag(event)">
                 <p class="itemcontent">Create Brand Assistance for launch</p>
                 <form action="" method="" class="py-2">
                    <input type="date" class="border-none"/>
                 </form>
                 <div class="user-image d-flex justify-content-end">
                    <img src="assets/images/user.jpg" width="20" height="20" rounded-circle/>
                    <img src="assets/images/user.jpg" width="20" height="20"/>
                 </div>
              </div>
              <div class="item bg-white px-2 py-2 rounded-2 my-2" id="drag4" draggable="true" ondragstart="drag(event)">
                 <div class="board-details board-box">
                    <p class="itemcontent">Product Branding</p>
                 </div>
              </div>
              <div class="item bg-white px-2 py-2 rounded-2 my-2" id="drag5" draggable="true" ondragstart="drag(event)">
                 <div class="board-details board-box">
                    <p class="itemcontent">Product Video</p>
                 </div>
              </div>
           </div>
        </div>
     </div>
     <div class="col-lg-4 col-xl-3 col-md-6">
        <div class="boardBox-wrapper h-100 px-3 py-2" id="box1" >
           <div class="board-title">
              <h6>In Review</h6>
           </div>
           <div class="board-task my-3 bg-dark">
              <!-- Button trigger modal -->
              <a href="#" class=" px-2 py-3" data-bs-toggle="modal" data-bs-target="#board-task">
              Add New Task
              </a>
              <div class="modal fade" id="board-task" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
           </div>
           <div id="box-two" ondrop="drop(event)" class="sortable-list" ondragover="allowDrop(event)">
              <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag9" draggable="true" ondragstart="drag(event)">
                 <p class="itemcontent">outreach plan Process design and blogging</p>
              </div>
              <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag10" draggable="true" ondragstart="drag(event)">
                 <p class="itemcontent">Create Brand Assistance for launch</p>
                 <form action="" method="" class="py-2">
                    <input type="date" class="border-none"/>
                 </form>
                 <div class="user-image d-flex justify-content-end">
                    <img src="assets/images/user.jpg" width="20" height="20" rounded-circle/>
                    <img src="assets/images/user.jpg" width="20" height="20"/>
                 </div>
              </div>
              <div class="board-box bg-white px-2 py-2 rounded-2 my-2 itemcontent" id="drag11" draggable="true" ondragstart="drag(event)">
                 <p  class="itemcontent">Product Branding</p>
              </div>
              <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag12" draggable="true" ondragstart="drag(event)">
                 <p class="itemcontent">Product Video</p>
              </div>
           </div>
        </div>
     </div>
     <div class="col-lg-4 col-xl-3 col-md-6">
        <div class="boardBox-wrapper h-100 px-3 py-2" id="box1" >
           <div class="board-title">
              <h6>In Progress</h6>
           </div>
           <div class="board-task my-3 primary-btn">
              <!-- Button trigger modal -->
              <a href="#" class="px-2 py-3" data-bs-toggle="modal" data-bs-target="#progressModal">
              Add New Task
              </a>
              <!-- Modal -->
              <div class="modal fade" id="progressModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
           </div>
           <div id="box-three" ondrop="drop(event)" class="sortable-list" ondragover="allowDrop(event)">
              <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag9" draggable="true" ondragstart="drag(event)">
                 <p class="itemcontent">outreach plan Process design and blogging</p>
              </div>
              <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag10" draggable="true" ondragstart="drag(event)">
                 <p class="itemcontent">Create Brand Assistance for launch</p>
                 <form action="" method="" class="py-2">
                    <input type="date" class="border-none"/>
                 </form>
                 <div class="user-image d-flex justify-content-end">
                    <img src="assets/images/user.jpg" width="20" height="20" rounded-circle/>
                    <img src="assets/images/user.jpg" width="20" height="20"/>
                 </div>
              </div>
              <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag11" draggable="true" ondragstart="drag(event)">
                 <p class="itemcontent">Product Branding</p>
              </div>
              <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag12" draggable="true" ondragstart="drag(event)">
                 <p class="itemcontent">Product Video</p>
              </div>
           </div>
        </div>
     </div>
     <div class="col-lg-4 col-xl-3 col-md-6">
        <div class="boardBox-wrapper h-100 px-3 py-2" id="box1" >
           <div class="board-title">
              <h6>Complete</h6>
           </div>
           <div class="board-task primary-bg  my-3">
              <!-- Button trigger modal -->
              <a href="#" class="text-dark px-2 py-3" data-bs-toggle="modal" data-bs-target="#board-task">
              Add New Task
              </a>
              <!-- Modal -->
              <div class="modal fade" id="board-task" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
           </div>
           <div id="box-four" ondrop="drop(event)"  class="sortable-list" ondragover="allowDrop(event)">
              <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag13" draggable="true" ondragstart="drag(event)">
                 <p class="itemcontent">outreach plan Process design and blogging</p>
              </div>
              <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag14" draggable="true" ondragstart="drag(event)">
                 <p  class="itemcontent">Create Brand Assistance for launch</p>
                 <form action="" method="" class="py-2">
                    <input type="date" class="border-none"/>
                 </form>
                 <div class="user-image d-flex justify-content-end">
                    <img src="assets/images/user.jpg" width="20" height="20" rounded-circle/>
                    <img src="assets/images/user.jpg" width="20" height="20"/>
                 </div>
              </div>
              <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag15" draggable="true" ondragstart="drag(event)">
                 <p  class="itemcontent">Product Branding</p>
              </div>
              <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag16" draggable="true" ondragstart="drag(event)">
                 <p class="itemcontent">Product Video</p>
              </div>
           </div>
        </div>
     </div>
  </div>
</div>
  
  
</template>
<script>

import Loader from '../components/includes/Loading.vue'
  import TopFilter from '../components/includes/TopFilter.vue';
  export default {
      name: 'TimetrackdashboardNewboard',
      components:{Loader,TopFilter},
  
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
<style  scoped>
</style>