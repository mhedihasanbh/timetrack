<template>
   
         <h5 clss="py-4">Integrations</h5>
         <div class="integration-top-area bg-white rounded-3 p-3">
            <p>Chrome Extension Integrations</p>
            <div class="integration-switch-area d-flex gap-2 justify-content-between py-4">
               <div class="integration-switch-left w-50">
                  <form action="" method="" >
                     <label>Integrations’ status</label>
                     <select class="form-control">
                        <option>Off</option>
                        <option>item 2</option>
                        <option>item 3</option>
                        <option>item 4</option>
                        <option>item 5</option>
                     </select>
                  </form>
                  <p class="py-3">Users with integrations turned on will be able to install a Chrome extension. This will let them track time on any of the apps listed here.</p>
                  <small>How Chrome extension integrations work</small>
               </div>
               <div class="integration-switch-right d-flex align-items-center gap-4 px-3 ">
                  <div>
                     <img src="assets/images/integrationGoggle.png"/>
                  </div>
                  <div>
                     <h6>Available in the</h6>
                     <h5>Chrome Web Store</h5>
                  </div>
               </div>
            </div>
         </div>
         <div class="integration-bottom-area bg-white rounded-3 py-5 px-3 my-4">
            <p>Available Integrations</p>
            <ul class="nav nav-tabs border-0 border-width-0 my-3 integration-list" id="myTab" role="tablist">
               <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">All</button>
               </li>
               <li class="nav-item" role="presentation">
                  <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Project Management</button>
               </li>
               <li class="nav-item" role="presentation">
                  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Payment & Invoicing</button>
               </li>
               <li class="nav-item" role="presentation">
                  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Help Desk</button>
               </li>
               <li class="nav-item" role="presentation">
                  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Communication</button>
               </li>
               <li class="nav-item" role="presentation">
                  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">CRM</button>
               </li>
            </ul>
            <div class="tab-content" id="myTabContent">
               <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                  <div class="d-flex justify-content-between w-50">
                     <p>App</p>
                     <p>Description</p>
                  </div>
                  <div class="d-flex justify-content-between w-50 my-5">
                     <div class="d-flex gap-2">
                        <img src="assets/images/chorome.png"/>
                        <small>Chrome</small>
                     </div>
                     <p>Track time spent on Chrome tasks & projects</p>
                  </div>
                  <div class="d-flex justify-content-between w-50 my-5">
                     <div class="d-flex gap-2">
                        <img src="assets/images/edge.png"/>
                        <small>Internet Explore</small>
                     </div>
                     <p>Track time spent on Chrome tasks & projects</p>
                  </div>
                  <div class="d-flex justify-content-between w-50 my-5">
                     <div class="d-flex gap-2">
                        <img src="assets/images/facebook.png"/>
                        <small>Facebook</small>
                     </div>
                     <p>Track time spent on Facebook tasks & projects</p>
                  </div>
               </div>
               <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
               <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
               <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
            </div>
         </div>
     
</template>

<script>
export default {
    name: 'TimetrackdashboardIntegration',

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