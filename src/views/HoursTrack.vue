<template>
              <div class="project-top d-flex justify-content-between ">
                <div><h5>Hours Tracked</h5></div>
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
                <div class="task-expand  rounded-3 py-3 ">
                  <form action="" method="" class="d-flex align-items-center gap-3 justify-content-end">
                    <div>
                      <select class="form-select select-bg border-none" aria-label="Default select example">
                        <option selected>Expand All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="display-setting bg-white p-3">
                         <a href="">
                          <i class="fa-solid fa-gear me-3"></i>
                          <span>Display Setting</span>
                         </a>
                    </div>
                  </form>
                </div>
             <div class="app-productivty bg-white rounded-3 p-3 d-flex justify-content-between align-items-center my-3">
                <small>Name</small>
                <small>Working Time </small>
                <small>Time in</small>
                <small>Time Out </small>
                <small>Total Hours</small>
            </div>
            <div class="app-productivty bg-white rounded-3 p-3 d-flex justify-content-between align-items-center my-3">
              <div>
                <span>All Selected</span>
              </div>
              <small>44m</small>
              <small>10:00 AM</small>
              <small>12:00 AM </small>
              <small>10.00 h</small>
          </div>
          <div class="app-productivty bg-white rounded-3 p-3 d-flex justify-content-between align-items-center my-3">
            <div class="d-flex gap-2">
              <img src="assets/images/hourstrack.png" width="30px" height="30px"/>
              <span>Ashikur Rahim</span>
            </div>
            <small>44m</small>
            <small>10:00 AM</small>
            <small>12:00 AM </small>
            <small>10.00 h</small>
        </div>
        <div class="app-productivty bg-white rounded-3 p-3 d-flex justify-content-between align-items-center my-3">
          <div class="d-flex gap-2">
            <img src="assets/images/hourstrack.png" width="30px" height="30px"/>
            <span>Ashikur Rahim</span>
          </div>
          <small>44m</small>
          <small>10:00 AM</small>
          <small>12:00 AM </small>
          <small>10.00 h</small>
      </div>
      <div class="hours-track-table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Productive or Unproductive</th>
              <th scope="col">Time In</th>
              <th scope="col">Time Out</th>
              <th scope="col">Total Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Checking emails</td>
              <td class="unproductive">Unproductive</td>
              <td>9:00 AM</td>
              <td>10:00 AM</td>
              <td>1:00</td>
            </tr>
            <tr>
              <td>Checking emails</td>
              <td class="productive">productive</td>
              <td>9:00 AM</td>
              <td>10:00 AM</td>
              <td>1:00</td>
            </tr>
            <tr>
              <td>Checking emails</td>
              <td class="unproductive">Unproductive</td>
              <td>9:00 AM</td>
              <td>10:00 AM</td>
              <td>1:00</td>
            </tr>
            <tr>
              <td>Checking emails</td>
              <td class="productive">productive</td>
              <td>9:00 AM</td>
              <td>10:00 AM</td>
              <td>1:00</td>
            </tr>
            </tbody>
        </table>
      </div>
      <div class="app-productivty bg-white rounded-3 p-3 d-flex justify-content-between align-items-center my-3">
        <div class="d-flex gap-2">
          <img src="assets/images/hourstrack.png" width="30px" height="30px"/>
          <span>Ashikur Rahim</span>
        </div>
        <small>44m</small>
        <small>10:00 AM</small>
        <small>12:00 AM </small>
        <small>10.00 h</small>
    </div>
    <div class="app-productivty bg-white rounded-3 p-3 d-flex justify-content-between align-items-center my-3">
      <div class="d-flex gap-2">
        <img src="assets/images/hourstrack.png" width="30px" height="30px"/>
        <span>Ashikur Rahim</span>
      </div>
      <small>44m</small>
      <small>10:00 AM</small>
      <small>12:00 AM </small>
      <small>10.00 h</small>
  </div>
  <div class="app-productivty bg-white rounded-3 p-3 d-flex justify-content-between align-items-center my-3">
    <div class="d-flex gap-2">
      <img src="assets/images/hourstrack.png" width="30px" height="30px"/>
      <span>Ashikur Rahim</span>
    </div>
    <small>44m</small>
    <small>10:00 AM</small>
    <small>12:00 AM </small>
    <small>10.00 h</small>
</div>
   
    
</template>

<script>
export default {
    name: 'TimetrackdashboardHoursTrack',

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