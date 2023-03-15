<template>
      <div class="project-top d-flex justify-content-between ">
   <div>
      <h2>Tasks</h2>
   </div>
   <div class="top-item-area d-flex gap-5 bg-white rounded p-2 px-3">
      <div class="top-item">
         <a href="">
         <img src="assets/images/filter.png"/>
         <span class="ms-2">Filter</span>
         </a>
      </div>
      <div class="top-item">
         <a  id="export">
         <img src="assets/images/groupStatus.png"/>
         <span class="ms-2">Import/Export</span>
         </a>
      </div>
      <div class="top-item meeting-top-add">
         <a @click="toggle=!toggle">
         <i class="fa-solid fa-plus"></i>
         </a>
      </div>
   </div>
</div>
<!---task plus details start--->
<div class="task-area bg-white rounded-3 p-3 my-4 " v-show="toggle">
   <div class="view-box d-flex justify-content-between py-3">
      <div class="box-icon d-flex gap-5">
         <a href="">
         <img src="assets/images/copy.png"/>
         <span class="ps-2">Copy</span>
         </a>
      </div>
   </div>
   <div class="view-box d-flex justify-content-between py-3">
      <div class="box-icon d-flex gap-5">
         <a href="">
         <img src="assets/images/color.png"/>
         <span class="ps-2">color</span>
         </a>
      </div>
   </div>
   <div class="view-box d-flex justify-content-between py-3">
      <div class="box-icon d-flex gap-5">
         <a href="">
         <img src="assets/images/publiclink.png"/>
         <span class="ps-2">public link</span>
         </a>
      </div>
   </div>
   <div class="view-box d-flex justify-content-between py-3">
      <div class="box-icon d-flex gap-5">
         <a href="">
         <img src="assets/images/task.png"/>
         <span class="ps-2">Move Task </span>
         </a>
      </div>
   </div>
   <div class="view-box d-flex justify-content-between py-3">
      <div class="box-icon d-flex gap-5">
         <a href="">
         <img src="assets/images/archive.png"/>
         <span class="ps-2">Archive</span>
         </a>
      </div>
   </div>
   <div class="view-box d-flex justify-content-between py-3">
      <div class="box-icon d-flex gap-5">
         <a href="">
         <img src="assets/images/trash.png"/>
         <span class="ps-2">Delete</span>
         </a>
      </div>
   </div>
</div>
<!-----task plus details end---->
<div class="task-tittle-area d-flex justify-content-around  bg-white rounded-3 py-4 my-2">
   <div class="row w-100">
      <div class="col-lg-2">
        <p>Tittle</p>
      </div>
      <div class="col-lg-2">
         <small>ID</small>
      </div>
      <div class="col-lg-2">
         <small>Progress</small>
      </div>
      <div class="col-lg-2">
         <small>Status</small>
      </div>
      <div class="col-lg-2">
         <small>Planned End</small>
      </div>
      <div class="col-lg-2">
         <small>Priority</small>
      </div>
   </div>
</div>
<div class="task-details-area d-flex justify-content-around  bg-white rounded-3 py-4 my-2">
   <div class="row w-100">
      <div class="col-lg-2">
         <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
         bizpeak
         </button>
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen ">
               <div class="modal-content">
                  <div class="modal-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                     <img src="assets/images/task-title.PNG"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="col-lg-2">
         <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
         01123860
         </button>
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen ">
               <div class="modal-content">
                  <div class="modal-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                     <img src="assets/images/task-title.PNG"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="col-lg-2">
         <div class="col-lg-2">
            <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
           2
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog modal-fullscreen ">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                        <img src="assets/images/task-title.PNG"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="col-lg-2">
        
        <button type="button" class="btn overdue-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3" data-bs-whatever="@mdo">
          Not Started
         </button>
         <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog  ">
               <div class="modal-content">
                  <div class="modal-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                     <img src="assets/images/projectstatus.PNG"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="col-lg-2">
        <small>Select</small>
      </div>
      <div class="col-lg-2">
         <button type="button" class="btn overdue-btn" data-bs-toggle="modal" data-bs-target="#exampleModal4" data-bs-whatever="@mdo">
         Medium
         </button>
         <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog  ">
               <div class="modal-content">
                  <div class="modal-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                     <img src="assets/images/project-medium.PNG"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<div class="new-task">
   <!-- Button trigger modal -->
   <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
   <i class="fa-regular fa-plus me-2"></i>Add New Task
   </button>
   <!-- Modal -->
   <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog ">
         <div class="modal-content">
            <div class="modal-header">
               <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Task</h1>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="">
               <div class="modal-body">
                  <div class="mb-3">
                     <label for="exampleFormControlInput1" class="form-label text-start">Title</label>
                     <input type="text" name="" class="form-control" id="exampleFormControlInput1" placeholder="Title">
                  </div>
                  <div class="mb-3">
                     <label for="exampleFormControlInput1" class="form-label text-start">Assigned To (Optional)</label>
                     <input type="text" name="" class="form-control" id="exampleFormControlInput1" placeholder="Assigned To (Optional)">
                  </div>
                  <div class="mb-3">
                     <label for="exampleFormControlInput1" class="form-label text-start">Priority</label>
                     <select class="form-control">
                        <option>Critical</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                     </select>
                  </div>
                  <div class="row g-3 mb-3">
                     <div class="col">
                        <label for="exampleFormControlInput1" class="form-label text-start">Status</label>
                        <select class="form-control">
                           <option>Not Stated</option>
                           <option>Not Progress</option>
                           <option>In Review</option>
                           <option>Complete</option>
                           <option>Cancelled</option>
                        </select>
                     </div>
                     <div class="col">
                        <label for="exampleFormControlInput1" class="form-label text-start">Actual Start/End</label>
                        <input type="date" class="form-control" placeholder="Select Date" aria-label="Last name">
                     </div>
                  </div>
                  <div class="mb-3">
                     <label for="exampleFormControlInput1" class="form-label text-start">Details</label>
                     <textarea class="form-control" rows="8" id="subtask"></textarea>
                  </div>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn primary-button">Create Task</button>
               </div>
            </form>
         </div>
      </div>
   </div>
</div>
</template>

<script>
export default {
    name: 'TimetrackdashboardTask',

    data() {
        return {
            toggle:false
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