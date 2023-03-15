<template>
  
         <div class="project-top d-flex justify-content-between ">
            <div>
               <h2>Projects</h2>
            </div>
            <div class="top-item-area d-flex gap-5 bg-white rounded p-2 px-3">
               <div class="top-item">
                  <a href="">
                  <img src="assets/images/filter.png"/>
                  <span class="ms-2">Filter</span>
                  </a>
               </div>
               <div class="top-item">
                  <a href="">
                  <img src="assets/images/groupStatus.png"/>
                  <span class="ms-2">Group by: Status</span>
                  </a>
               </div>
               <div class="top-item" id="project-show">
                  <a>
                  <img src="assets/images/show.png"/>
                  <span class="ms-2">Show</span>
                  </a>
               </div>
               <div class="top-item">
                  <a id="threeDots">
                  <i class="fa-solid fa-ellipsis-vertical fa-2x"></i>
                  </a>
               </div>
            </div>
         </div>
         <!----after dots clicks area start---->
         <div class="threeDots-area bg-white rounded-3 p-3 my-4 ">
            <div class="view-box-title d-flex justify-content-between py-4">
               <a href="" class="view-settings">VIEW SETTINGS</a>
               <a href="" class="view-defaults">View defaults</a>
            </div>
            <div class="view-box d-flex justify-content-between py-3">
               <div class="box-icon d-flex gap-3">
                  <div>
                     <img src="assets/images/autosave.png"/>
                  </div>
                  <p>Autosave view</p>
               </div>
               <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
               </div>
            </div>
            <div class="view-box d-flex justify-content-between py-3">
               <div class="box-icon d-flex gap-3">
                  <div>
                     <img src="assets/images/protect.png"/>
                  </div>
                  <p>Protect view</p>
               </div>
               <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
               </div>
            </div>
            <div class="view-box d-flex justify-content-between py-3">
               <div class="box-icon d-flex gap-3">
                  <div>
                     <img src="assets/images/private.png"/>
                  </div>
                  <p>Private view</p>
               </div>
               <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
               </div>
            </div>
            <div class="view-box d-flex justify-content-between py-3">
               <div class="box-icon d-flex gap-3">
                  <div>
                     <img src="assets/images/default.png"/>
                  </div>
                  <p>Default for everyone</p>
               </div>
               <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
               </div>
            </div>
            <div class="view-box d-flex justify-content-between py-3">
               <div class="box-icon d-flex gap-3">
                  <div>
                     <img src="assets/images/reset.png"/>
                  </div>
                  <p>Reset view to defaults</p>
               </div>
               <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
               </div>
            </div>
            <div class="view-box d-flex justify-content-between py-3">
               <div class="box-icon d-flex gap-3">
                  <div>
                     <img src="assets/images/exportview.png"/>
                  </div>
                  <p>Export view</p>
               </div>
               <div class="form-check form-switch me-3">
                  <a href="">
                  <i class="fa-solid fa-chevron-right"></i>
                  </a>
               </div>
            </div>
         </div>
         <!----after dots clicks area end---->
         <!-----project task show sart------->
         <!-----project task show end------->
         <div class="project-todo bg-white rounded-3 p-3 d-flex justify-content-between align-items-center my-4">
            <div class="todo-left d-flex gap-2 align-items-center">
               <p class="py-2 px-3">TO DO</p>
               <p>3 Task</p>
            </div>
            <div class="d-flex justify-content-between w-50">
               <p>Assignee</p>
               <p>Due Date</p>
               <p>Priority</p>
               <p>Status</p>
               <div class="todoPlus">
                  <a href="">
                  <i class="fa-solid fa-plus"></i>
                  </a>
               </div>
            </div>
         </div>
         <div class="project-task bg-white rounded-3 p-3 d-flex justify-content-between align-items-center my-4">
            <div class="task-left d-flex gap-2 align-items-center">
               <form action="" method="">
                  <div class="col-12">
                     <div class="form-check " id="checkInput">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                        Task 1
                        </label>
                     </div>
                  </div>
               </form>
            </div>
            <div class="task-right d-flex justify-content-between align-items-center w-50">
               <div class="task-image-wrapper d-flex w-25 gap-3">
                  <div class="task-image">
                     <img src="assets/images/userprofile.png" class="rounded-circle" width="20px" height="20px"/>
                  </div>
                  <div class="task-image">
                     <img src="assets/images/userprofile.png" class="rounded-circle" width="20px" height="20px"/>
                  </div>
                  <div class="task-image">
                     <img src="assets/images/userprofile.png" class="rounded-circle" width="20px" height="20px"/>
                  </div>
               </div>
               <div class="ps-5">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                     <i class="fa-solid fa-calendar-days"></i>
                     </button>
                  

               <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="modal-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel">project name</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                       <img src="assets/images/projectcalander.PNG"/>
                     </div>
                    
                  </div>
               </div>
               </div>
               </div>
               <div>
                  <a href="">
                  <i class="fa-regular fa-flag fa-2x ps-5"></i>
                  </a>
               </div>
               <p class="py-2 px-3 rounded-3">TO DO</p>
               <div class="todoPlus">
               </div>
            </div>
         </div>
         <div class="project-task bg-white rounded-3 p-3 d-flex justify-content-between align-items-center my-4">
            <div class="task-left d-flex gap-2 align-items-center">
               <form action="" method="">
                  <div class="col-12">
                     <div class="form-check ">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                        Task 1
                        </label>
                     </div>
                  </div>
               </form>
            </div>
            <div class="task-right d-flex justify-content-between align-items-center w-50">
               <div class="task-image-wrapper d-flex w-25 gap-3">
                  <div class="task-image">
                     <img src="assets/images/userprofile.png" class="rounded-circle" width="20px" height="20px"/>
                  </div>
                  <div class="task-image">
                     <img src="assets/images/userprofile.png" class="rounded-circle" width="20px" height="20px"/>
                  </div>
                  <div class="task-image">
                     <img src="assets/images/userprofile.png" class="rounded-circle" width="20px" height="20px"/>
                  </div>
               </div>
               <div class="ps-5">
                  <a href="">
                  <img src="assets/images/calander.png"/>
                  </a>
               </div>
               <div>
                  <a href="">
                  <i class="fa-regular fa-flag fa-2x ps-5"></i>
                  </a>
               </div>
               <p class="py-2 px-3 rounded-3">TO DO</p>
               <div class="todoPlus">
               </div>
            </div>
         </div>
         <div class="project-task bg-white rounded-3 p-3 d-flex justify-content-between align-items-center my-4">
            <div class="task-left d-flex gap-2 align-items-center">
               <form action="" method="">
                  <div class="col-12">
                     <div class="form-check ">
                        <input class="form-check-input" type="checkbox" id="gridCheck">
                        <label class="form-check-label" for="gridCheck">
                        Task 1
                        </label>
                     </div>
                  </div>
               </form>
            </div>
            <div class="task-right d-flex justify-content-between align-items-center w-50">
               <div class="task-image-wrapper d-flex w-25 gap-3">
                  <div class="task-image">
                     <img src="assets/images/userprofile.png" class="rounded-circle" width="20px" height="20px"/>
                  </div>
                  <div class="task-image">
                     <img src="assets/images/userprofile.png" class="rounded-circle" width="20px" height="20px"/>
                  </div>
                  <div class="task-image">
                     <img src="assets/images/userprofile.png" class="rounded-circle" width="20px" height="20px"/>
                  </div>
               </div>
               <div class="ps-5">
                  <a href="">
                  <img src="assets/images/calander.png"/>
                  </a>
               </div>
               <div>
                  <a href="">
                  <i class="fa-regular fa-flag fa-2x ps-5"></i>
                  </a>
               </div>
               <p class="py-2 px-3 rounded-3">TO DO</p>
               <div class="todoPlus">
               </div>
            </div>
         </div>
         <div class="new-task">
            <!-- Button trigger modal -->
            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <i class="fa-solid fa-plus"></i>
            <span>New Task</span>
            </button>
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
               <div class="modal-dialog ">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Task Info</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <form action="" method="">
                        <div class="modal-body">
                           <div class="mb-3">
                              <label for="exampleFormControlInput1" class="form-label text-start">Task Title</label>
                              <input type="text" name="" class="form-control" id="exampleFormControlInput1" >
                           </div>
                           <div class="mb-3">
                              <label for="exampleFormControlInput1" class="form-label text-start">Assignee/Image</label>
                              <input type="file" name="" class="form-control-file" id="exampleFormControlInput1">
                           </div>
                           <div class="mb-3">
                              <label for="exampleFormControlInput1" class="form-label text-start">Dute Date</label>
                              <input type="date" name="" class="form-control" id="exampleFormControlInput1">
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
         <!--------task------>
         <div class="task-check d-flex align-items-end justify-content-between">
            <div class="task-check-img">
               <img src="assets/images/projectcheck.PNG"/>
            </div>
          
         </div>


    
 

</template>

<script>
export default {
    name: 'TimetrackdashboardProjectTwo',

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