<template>
   
         <h5>Groups</h5>
         <div class="row">
            <div class="col-lg-4 ">
               <div class="group-left-area bg-white rounded-3 p-4 h-100">
                  <a href="" class="me-4">ACTIVE GROUPS</a>
                  <a href="">ARCHIVED GROUPS</a>
                  <!-- <div class="add-user-btn my-3">
                     <a href="">
                     <i class="fa-solid fa-users"></i>
                     <span class="ps-2">ADD Team</span>
                     </a>
                  </div> -->
                  <div class="add-user-btn my-3">
            <!-- <a href="">
            <i class="fa-solid fa-users"></i>
            <span class="ps-2">ADD USERS</span>
            </a> -->
                  <div class="add-team">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn  py-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                           <i class="fa-solid fa-plus"></i>
                           <h6 class="add-bill-card">ADD Team</h6>
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                           <div class="modal-dialog ">
                              <div class="modal-content">
                                 <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Team Info</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <form action="" method="">
                                    <div class="modal-body">
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">Team Name</label>
                                          <input type="text" name="" class="form-control" id="exampleFormControlInput1" >
                                       </div>
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">Team Image</label>
                                          <input type="email" name="" class="form-control" id="exampleFormControlInput1">
                                       </div>
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">Team Phone</label>
                                          <input type="number" name="" class="form-control" id="exampleFormControlInput1">
                                       </div>
                                    </div>
                                    <div class="modal-footer">
                                       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                       <button type="button" class="btn primary-button">Add Team</button>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
             </div>
         </div>
                  <div>
                     <form action="" method="">
                        <input type="search" class="form-control" placeholder="Search gropus"/>
                     </form>
                  </div>
                  <div class="team-btn my-3">
                     <a href="">
                     <i class="fa-solid fa-users"></i>
                     <span>All Regular Users</span>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-lg-8 ">
               <div class="user-right bg-white rounded-3 p-4 h-100">
                  <div class="user-top d-flex justify-content-between align-items-center py-3">
                     <p>Users</p>
                     <div class="form-check form-switch">
                        <label class="form-check-label" for="flexSwitchCheckChecked">Show only users in group</label>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                     </div>
                  </div>
                  <div class="py-3">
                     <form action="" method="">
                        <input type="search" class="form-control" placeholder="Search gropus"/>
                     </form>
                  </div>
                  <p class="py-2">Team managers</p>
                  <small class="py-2">Select which managers have access to view work data of the group members in this group. Admins are not listed here because they have access to all groups and users.</small>
                  <small class="py-2">No members</small>
                  <h6 class="py-2">Team managers</h6>
                  <small>No members</small>
               </div>
            </div>
         </div>
     
</template>

<script>
export default {
    name: 'TimetrackdashboardGroup',

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