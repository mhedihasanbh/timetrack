<template>
  
          <div class="project-top d-flex align-items-center gap-4 ">
            <div>
              <h2>Timesheets</h2>
            </div>
           

          </div>

          <div class="d-flex justify-content-around meeting-details bg-white rounded-3 py-4 my-2">
            <small>Timesheets Total</small>
            <div>
              <p>16 jan</p>
              <p>00:00</p>
            </div>
            <div>
              <p>17 jan</p>
              <p>00:00</p>
            </div>
            <div>
              <p>18 jan</p>
              <p>00:00</p>
            </div>
            <div>
              <p>19 jan</p>
              <p>00:00</p>
            </div>
            <div>
              <p>20 jan</p>
              <p>00:00</p>
            </div>
            <div>
              <p>21 jan</p>
              <p>00:00</p>
            </div>
            <div>
              <p>22 jan</p>
              <p>00:00</p>
            </div>
            <small>00:00</small>
          </div>
          <div class="d-flex justify-content-around meeting-details bg-white rounded-3 py-4 my-2">
            <div>
              <small>Project Name: Not assigned to projects</small>
              <a href="" class="time-sheet-progress ms-3">In Progress</a>
            </div>
            <div>
              <!-- Button trigger modal -->
<button type="button" class="btn timeSheet-approave-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Submit For Approval
</button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img src="assets/images/timesheetapproave.PNG"/>
                </div>
               
              </div>
            </div>
          </div>
  
          
            </div>
            <div>
              <p>Time Logged</p>
              <p>00:00 hours</p>
            </div>
            <div>
              <a href=""><i class="fa-solid fa-angle-up"></i></a>
            </div>
          </div>
          <div class="d-flex justify-content-around meeting-details bg-white rounded-3 py-4 my-2">
            <small>Total</small>
            <div>
              <p>Mon</p>
              <p>16 Jan</p>
            </div>
            <div>
              <p>Tue</p>
              <p>17 Jan</p>
            </div>
            <div>
              <p>Wed</p>
              <p>18 Jan</p>
            </div>
            <div>
              <p>Thu</p>
              <p>19 Jan</p>
            </div>
            <div>
              <p>Fri</p>
              <p>20 Jan</p>
            </div>
            <div>
              <p>Sat</p>
              <p>21 Jan</p>
            </div>
            <div>
              <p>Sun</p>
              <p>22 Jan</p>
            </div>
            <small>Total</small>
          </div>
          <div class="d-flex justify-content-around meeting-details bg-white rounded-3 py-4 my-2">
            <small>Ashikur rahim</small>
            <div>
              <button type="button" class="btn timeSheet-approave-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                01:00
              </button>

          <!-- Modal -->
           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img src="assets/images/timesheetTime.PNG"/>
                </div>
               
              </div>
            </div>
          </div>
             
            </div>
            <div>
              <p>01:30m</p>
            </div>
            <div>
              <p>01:30m</p>
            </div>
            <div>
              <p>01:30m</p>
            </div>
            <div>
              <p>01:30m</p>
            </div>
            <div>
              <p>01:30m</p>
            </div>
            <div>
              <p>01:30m</p>
            </div>
            <small>00:00</small>
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
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">search project </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  
                     <form action="" method="">
                        <div class="modal-body">
                       <div class="mb-3">
                         <label for="exampleFormControlInput1" class="form-label text-start">Select Tasks</label>
                        <input type="search" name="" class="form-control" id="exampleFormControlInput1" placeholder="search project" >
                       </div>
                      </div>
                  </form>
                 </div>
               </div>
             </div>
          </div>
        
</template>

<script>
export default {
    name: 'TimetrackdashboardTimeSheetone',

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