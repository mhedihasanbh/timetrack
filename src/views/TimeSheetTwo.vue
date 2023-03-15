<template>
   
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
               <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
            </div>
         </div>
     
</template>

<script>
export default {
    name: 'TimetrackdashboardTimeSheetTwo',

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