<template>
    
              <div class="project-top d-flex justify-content-between ">
                <div><h2>work schedules</h2></div>
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
                    <div class="d-flex">
                      <select class="form-select  border-none" aria-label="Default select example">
                        <option selected>(UTC -08:00) Los Angeles, ...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <p>january 3, 2023</p>
                    </div>
                   
                   
                   </form>
                </div>
                <div class="schdule-edit d-flex justify-content-between align-items-center my-3">
                  <div class="add-user-btn d-flex gap-5 align-items-center my-3">
                    <a href="">
                      <i class="fa-solid fa-calendar-days me-2"></i>
                      <span>ADD/EDIT SCHEDULES</span>
                    </a>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                      <label class="form-check-label" for="flexCheckChecked">
                      select all
                      </label>
                    </div>
                  </div>
                   <a href="" class="px-5 py-2 rounded-3 bg-white">
                      <i class="fa-solid fa-calendar-days me-2"></i>
                      <span>Attendance Report</span>
                    </a>
                  </div>
                  <div class="schdule-title d-flex justify-content-between bg-white px-3 py-3 rounded-3 my-3">
                      <p>Name</p>
                      <p>Mon, Jan 16</p>
                      <p>Tue, Jan 17</p>
                      <p>Wed, Jan 18</p>
                      <p>Thu, Jan 19</p>
                      <p>Fri, Jan 20</p>
                      <p>Sat, Jan 21</p>
                      <p>Sun, Jan 22</p>
                  </div>
                  <div class="schdule-title d-flex justify-content-between bg-white px-3 py-3 rounded-3 my-3">
                    <p>Ashikur Rahim</p>
                    
                </div>
              
</template>

<script>
export default {
    name: 'TimetrackdashboardWorkSchedule',

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