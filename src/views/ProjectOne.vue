<template>
 
         <div class="project-top d-flex justify-content-between flex-wrap">
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
               <div class="top-item">
                  <a href="">
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
         <!---three dots details start--->
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
         <!-----three dots details end---->
         <!-------box first row start------>
         <div class="project-box-area py-2">
            <div class="row" id="box-wrapper">
               <h5 class="progress-title py-3">In progress <span class="progress-title-right">2 projects</span></h5>
               <div class="col-lg-4">
                  <div class="project-box bg-white rounded-3 p-4">
                     <div class="gamelords">
                        <h5>Alice in the wonderland</h5>
                        <small>Gamelords</small>
                     </div>
                     <div class="role py-3">
                        <small>Role</small>
                        <h6>International Marketing Producer</h6>
                     </div>
                     <div class="particated py-2">
                        <h5>Participated since</h5>
                        <small>16.04.2022</small>
                     </div>
                     <div class="gamelords py-2 d-flex justify-content-between">
                        <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                           <div class="progress-bar" style="width: 75%">75%</div>
                        </div>
                        <a href="" class="view-progress-work">View work</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="project-box bg-white rounded-3 p-4">
                     <div class="gamelords">
                        <h5>Alice in the wonderland</h5>
                        <small>Gamelords</small>
                     </div>
                     <div class="role py-3">
                        <small>Role</small>
                        <h6>International Marketing Producer</h6>
                     </div>
                     <div class="particated py-2">
                        <h5>Participated since</h5>
                        <small>16.04.2022</small>
                     </div>
                     <div class="gamelords py-2 d-flex justify-content-between">
                        <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                           <div class="progress-bar" style="width: 75%">75%</div>
                        </div>
                        <a href="" class="view-progress-work">View work</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="project-box bg-white rounded-3 p-4 d-flex justify-content-center align-items-center h-100">
                     <div class="new-project">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                           <i class="fa-solid fa-plus"></i>
                           <h6>Create New Project</h6>
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                           <div class="modal-dialog ">
                              <div class="modal-content">
                                 <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Project title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <form action="" method="">
                                    <div class="modal-body">
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">Project Title</label>
                                          <input type="text" name="" class="form-control" id="exampleFormControlInput1" >
                                       </div>
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">Sub Title</label>
                                          <input type="text" name="" class="form-control" id="exampleFormControlInput1">
                                       </div>
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">Role</label>
                                          <input type="text" name="" class="form-control" id="exampleFormControlInput1">
                                       </div>
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start"> Sub Role</label>
                                          <input type="text" name="" class="form-control" id="exampleFormControlInput1">
                                       </div>
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">Participated</label>
                                          <input type="text" name="" class="form-control" id="exampleFormControlInput1">
                                       </div>
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">Participated Date</label>
                                          <input type="date" name="" class="form-control" id="exampleFormControlInput1">
                                       </div>
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">Progress</label>
                                          <input type="text" name="" class="form-control" id="exampleFormControlInput1">
                                       </div>
                                    </div>
                                    <div class="modal-footer">
                                       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                       <button type="button" class="btn primary-button">Create Project</button>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-------box first row end------>
         <!-------box second row start------>
         <div class="project-box-area py-2">
            <div class="row">
               <h5 class="progress-title py-3">Participated in <span class="progress-title-right">8 projects</span></h5>
               <div class="col-lg-4">
                  <div class="project-box bg-white rounded-3 p-4">
                     <div class="gamelords">
                        <h5>Alice in the wonderland</h5>
                        <small>Gamelords</small>
                     </div>
                     <div class="role py-3">
                        <small>Role</small>
                        <h6>International Marketing Producer</h6>
                     </div>
                     <div class="particated py-2">
                        <h5>Participated since</h5>
                        <small>16.04.2022</small>
                     </div>
                     <div class="gamelords py-2 d-flex justify-content-between">
                        <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                           <div class="progress-bar" style="width: 75%">75%</div>
                        </div>
                        <a href="" class="view-progress-work">View work</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="project-box bg-white rounded-3 p-4">
                     <div class="gamelords">
                        <h5>Alice in the wonderland</h5>
                        <small>Gamelords</small>
                     </div>
                     <div class="role py-3">
                        <small>Role</small>
                        <h6>International Marketing Producer</h6>
                     </div>
                     <div class="particated py-2">
                        <h5>Participated since</h5>
                        <small>16.04.2022</small>
                     </div>
                     <div class="gamelords py-2 d-flex justify-content-between">
                        <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                           <div class="progress-bar" style="width: 75%">75%</div>
                        </div>
                        <a href="" class="view-progress-work">View work</a>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="project-box bg-white rounded-3 p-4">
                     <div class="gamelords">
                        <h5>Alice in the wonderland</h5>
                        <small>Gamelords</small>
                     </div>
                     <div class="role py-3">
                        <small>Role</small>
                        <h6>International Marketing Producer</h6>
                     </div>
                     <div class="particated py-2">
                        <h5>Participated since</h5>
                        <small>16.04.2022</small>
                     </div>
                     <div class="gamelords py-2 d-flex justify-content-between">
                        <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                           <div class="progress-bar" style="width: 75%">75%</div>
                        </div>
                        <a href="" class="view-progress-work">View work</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <a href="" class="py-2">4 more <i class="fa-solid fa-angle-down"></i></a>
         <!-------box second row end------>
     
</template>

<script>
export default {
    name: 'TimetrackdashboardProjectOne',

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