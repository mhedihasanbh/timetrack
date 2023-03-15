<template>
   
              <div class="project-top d-flex justify-content-between ">
                <div><h2>Timeline</h2></div>
                </div>
                <div class="project-top-item bg-white p-4 rounded-3">
                   <form action="" method="" class="d-flex space-between">
                    <div>
                      <select class="form-select select-bg border-none" aria-label="Default select example">
                        <option selected>All Users Selected</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="task-export">
                      <a href="">
                        <i class="fa-solid fa-cloud-arrow-down me-3"></i>
                        <span>Export options</span>
                      </a>
                    </div>
                    <div>
                      <select class="form-select select-bg border-none" aria-label="Default select example">
                        <option selected>Last Week</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                   
                   </form>
                </div>
             
              <div class="time-line-item  px-4">
                <div class="form-check form-check-inline">
                  <input class="form-check-input input-green" type="checkbox" id="inlineCheckbox1" value="option1">
                  <label class="form-check-label" for="inlineCheckbox1">Computer Time</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input input-yellow" type="checkbox" id="inlineCheckbox2" value="option2">
                  <label class="form-check-label" for="inlineCheckbox2">Manual Time</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input input-purple" type="checkbox" id="inlineCheckbox2" value="option2">
                  <label class="form-check-label" for="inlineCheckbox2">Mobile Time</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input input-gray" type="checkbox" id="inlineCheckbox2" value="option2">
                  <label class="form-check-label" for="inlineCheckbox2">Break Time (coming soon)</label>
                </div>
                <div class="timeline-seeting d-flex bg-white rounded-3 align-items-center justify-content-end px-3 py-2 gap-2">
                  <i class="fa-solid fa-gear"></i>
                  <p>Columns</p>
                </div>
                <div class="timeLine-details d-flex justify-content-around gap-3 bg-white rounded-3 p-4 my-3">
                  <small>Status</small>
                  <small>User</small>
                  <small>Time Tracked</small>
                  <small>Start Time</small>
                  <small>End Time</small>
                  <small>2am</small>
                  <small>4am</small>
                  <small>6am</small>
                  <small>8am</small>
                  <small>10am</small>
              </div>
              <div class="timeLine-details d-flex gap-5 align-items-center gap-3 bg-white rounded-3 p-4 my-3">
                <a href=""><i class="fa-solid fa-angle-right"></i></a>
                <img src="assets/images/timeline.png" width="30px" height="30px"/>
                <div>
                  <p>Ashikur Rahim</p>
                  <small>Last Tracked: 1 day ago</small>
                </div>
                <small>1h 10m</small>
                <small>12:00 AM</small>
                <small>10:00 PA</small>
              </div>
              </div>
             
</template>

<script>
export default {
    name: 'TimetrackdashboardTimeline',

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