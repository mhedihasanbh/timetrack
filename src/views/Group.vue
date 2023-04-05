<template>
   <div class="group-wrapper">
      <h3>Groups</h3>
      <div class="row">
         <div class="col-lg-6">
            <div class="group-left group-bg rounded-2 h-100 p-4 ">
               <div class="group-left-title d-flex gap-2">
                  <strong>ACTIVE GROUPS</strong>
                   <p class="ms-2">ARCHIVED GROUPS</p>
               </div>
               <div class="team-btn py-4">
                  <a href="#" class="primary-btn px-3 py-2" data-bs-toggle="modal" data-bs-target="#addMember">
                     <i class="fa-regular fa-user pe-2"></i>Add Team
                     </a>
               </div>
               <div class="modal fade" id="addMember" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog  modal-dialog-centered modal-lg">
                  <div class="modal-content ms-5">
                     <div class="modal-header report-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new Team</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                         <div class="meeting-edit-form">
                            <form action="" method="">
                              <div class="mb-3">
                                <input type="text" class="form-control" placeholder="team name" name="" />
                              </div>
                              <div class="mb-3">
                                <input type="email" class="form-control" placeholder="email" name="" />
                              </div>
                              <div class="mb-3">
                                <input type="text" class="form-control" placeholder=" skype id" name="" />
                              </div>
                            </form>
                          </div>
                      </div>
                     <div class="modal-footer">
                     <button type="button" class="btn primary-bg report-close text-dark" data-bs-dismiss="modal">Close</button>
                     <button type="button" class="btn primary-btn">Create</button>
                    </div>
                  </div>
               </div>
            </div>
               <form action="" method="">
                  <input type="search" class="form-control w-50" placeholder="search groups"/>
               </form>
               <div class="primary-bg py-4">
                  <a href="#" class="primary-bg px-3 py-2">
                     <i class="fa-regular fa-user pe-2"></i>All Regular Users
                     </a>
               </div>
            </div>
         </div>
         <div class="col-lg-6">
            <div class="group-right group-bg rounded-3 h-100 p-3 py-5">
              <div class="group-right-title d-flex justify-content-between py-3">
                 <strong>Users</strong>
                 <div class="form-check form-switch">
                     <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                     <label class="form-check-label" for="flexSwitchCheckChecked">Show only users in group</label>
                  </div>
              </div>
              <form action="" method="">
                <input type="search" class="form-control w-50" placeholder="Search by name, email or ID"/>
              </form>
              <h6 class="pt-3">Team managers</h6>
              <p class="py-2">Select which managers have access to view work data of the group members in this group. Admins are not listed here because they have access to all groups and users.</p>
              <h6 class="py-2">Team managers</h6>
              <span>No members</span>
          </div>
         </div>
      </div>
      <div class="row py-5">
         <table class="table table-bordered">
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Skype</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>sajib</td>
                  <td>sajib@gmail.com</td>
                  <td>sajib.167</td>
               </tr>
          </tbody>            
         </table>
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