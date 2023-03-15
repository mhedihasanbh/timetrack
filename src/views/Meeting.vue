<template>
    <div class="project-top d-flex justify-content-between ">
                <div><h2>Meeting</h2></div>
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
                      <span class="ms-2">Import/Export</span>
                    </a>
                   </div>
                   <div class="top-item meeting-top-add" >
                    <a @click='toggle = !toggle'>
                      <i class="fa-solid fa-plus"></i>
                    </a>
                   </div>
                </div>
              </div>
               <!---plus icon details start--->
               <div class="meeting-area bg-white rounded-3 p-3 my-4 " v-show="toggle">
                 <div class="view-box d-flex justify-content-between py-3">
                  <div class="box-icon d-flex gap-3">
                    <div>
                      <img src="assets/images/meetingcolor.png"/>
                    </div>
                     <p>Color</p>
                  </div>
                 </div>
                <div class="view-box d-flex justify-content-between py-3">
                  <div class="box-icon d-flex gap-3">
                    <div>
                      <img src="assets/images/meeting-cancel.png"/>
                    </div>
                     <p>Cancel Meeting</p>
                  </div>
                </div>
                <div class="view-box d-flex justify-content-between py-3">
                  <div class="box-icon d-flex gap-3">
                    <div>
                      <img src="assets/images/meeting-archive.png"/>
                    </div>
                     <p>Archive Meeting</p>
                  </div>
                  
                </div>
                <div class="view-box d-flex justify-content-between py-3">
                  <div class="box-icon d-flex gap-3">
                    <div>
                      <img src="assets/images/meeting-delete.png"/>
                    </div>
                     <p>Delete Meeting</p>
                  </div>
                </div>
              </div>
              <!-----plus icon details end---->
              <div class=" d-flex justify-content-around meeting-details bg-white rounded-3 py-4 my-2">
                 <small>Title</small>
                 <small>ID</small>
                 <small>Status</small>
                 <small>Task</small>
                 <small>Date</small>
                 <small>Time</small>
              </div>
              <div class=" d-flex justify-content-around meeting-details bg-white rounded-3 py-4 my-2">
                 <button type="button" class="btn timeSheet-approave-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                bizpeak
              </button>
              <!-- Modal -->
             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <img src="assets/images/meeting-details.PNG"/>
                    </div>
                  
                  </div>
                </div>
              </div>
             
              <button type="button" class="btn timeSheet-approave-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                0011222
              </button>
              <!-- Modal -->
             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <img src="assets/images/meeting-details.PNG"/>
                    </div>
                  
                  </div>
                </div>
              </div>
              <button type="button" class="btn timeSheet-approave-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                upcoming
              </button>
              <!-- Modal -->
             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <img src="assets/images/meeting-details.PNG"/>
                    </div>
                  
                  </div>
                </div>
              </div>
              <button type="button" class="btn overdue-btn" data-bs-toggle="modal" data-bs-target="#exampleModal12">
                OverDue
              </button>
              <!-- Modal -->
             <div class="modal fade" id="exampleModal12" tabindex="-1" aria-labelledby="exampleModalLabel12" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel12">Modal title</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <img src="assets/images/meetingtask.PNG"/>
                    </div>
                  
                  </div>
                </div>
              </div>
               
               
               
               
                <small>jan 18, 2023</small>
                <small>12.00 PM</small>
             </div>
           
         
           
            <div class="new-meeting">
              <!-- Button trigger modal -->
               <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                 <i class="fa-regular fa-plus me-2"></i>ADD Meeting
               </button>
               <!-- Modal -->
               <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                 <div class="modal-dialog ">
                   <div class="modal-content">
                     <div class="modal-header">
                       <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Meeting </h1>
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                   
                       <form action="" method="">
                        <div class="modal-body">
                         <div class="mb-3">
                           <label for="exampleFormControlInput1" class="form-label text-start">Meeting Title</label>
                          <input type="text" name="" class="form-control" id="exampleFormControlInput1" >
                         </div>
                         <div class="row g-3 mb-3">
                          <div class="col">
                            <label for="date">Date:</label>
                            <input type="date" class="form-control" value="2023-02-12" />
                          </div>
                          <div class="col">
                            <label for="date">Start Time:</label>
                            <input type="time" id="appt" class="form-control" value="16:32:55">
                          </div>
                        </div>
                         <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label text-start">Location</label>
                         <input type="text" name="" class="form-control" id="exampleFormControlInput1" >
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label text-start">Participant (Optional)</label>
                         <input type="text" name="" class="form-control" id="exampleFormControlInput1" >
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label text-start">Agenda (Optional)</label>
                         <input type="text" name="" class="form-control" id="exampleFormControlInput1" >
                        </div>
                        
                      </div>
                     <div class="modal-footer">
                       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                       <button type="button" class="btn primary-button">Create Meeting</button>
                     </div>
                   </form>
                   </div>
                 </div>
               </div>
               
             </div>
         
</template>

<script>
export default {
    name: 'TimetrackdashboardMeeting',

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