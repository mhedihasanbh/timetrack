<template>
    
         <h5>Users</h5>
         <div class="user-top d-flex justify-content-between align-items-center bg-white px-3 py-2">
            <div class="rating-search">
               <form action="" method="" class="d-flex align-items-center">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input type="search" class="form-control border-0" placeholder="Search by Name,email, ID"/>
               </form>
            </div>
            <div class="all-user">
               <form>
                  <select class="form-select border-0" aria-label="Default select example">
                     <option selected>All Users Selected</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
               </form>
            </div>
            <div class="all-access">
               <form>
                  <select class="form-select border-0" aria-label="Default select example">
                     <option selected>All Access Levels Selected</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
               </form>
            </div>
            <div class="active-user">
               <form>
                  <select class="form-select border-0" aria-label="Default select example">
                     <option selected>ACTIVE USERS</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
               </form>
            </div>
         </div>
         <div class="add-user-btn my-3">
            <!-- <a href="">
            <i class="fa-solid fa-users"></i>
            <span class="ps-2">ADD USERS</span>
            </a> -->
            <div class="add-user">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn  py-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                           <i class="fa-solid fa-plus"></i>
                           <h6 class="add-bill-card">ADD CARD</h6>
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                           <div class="modal-dialog ">
                              <div class="modal-content">
                                 <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">User Info</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <form action="" method="">
                                    <div class="modal-body">
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">User Name</label>
                                          <input type="text" name="" class="form-control" id="exampleFormControlInput1" >
                                       </div>
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">User Email</label>
                                          <input type="email" name="" class="form-control" id="exampleFormControlInput1">
                                       </div>
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">User Phone</label>
                                          <input type="number" name="" class="form-control" id="exampleFormControlInput1">
                                       </div>
                                    </div>
                                    <div class="modal-footer">
                                       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                       <button type="button" class="btn primary-button">Add User</button>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
             </div>
         </div>
         <div class="user-info-title d-flex justify-content-between bg-white px-4 py-3">
            <div class="form-check w-20">
               <input class="form-check-input" type="checkbox" id="gridCheck">
               <label class="form-check-label" for="gridCheck">
               Name
               </label>
            </div>
            <p class="w-20 text-center ms-5">Screencasts</p>
            <p class="w-10 text-center">Blur Screenshots</p>
            <p class="w-20 text-center">Can Edit Time</p>
            <p class="w-10 text-center">Delete Screencasts</p>
            <p class="w-20 text-center">Blur Screenshots</p>
            <p class="w-10 text-center">Time out after</p>
         </div>
         <div class="user-info d-flex justify-content-between bg-white px-4 py-3 my-3">
            <div class="form-check w-20 d-flex align-items-center gap-3">
               <input class="form-check-input" type="checkbox" id="gridCheck">
               <div class="d-flex align-items-center gap-2">
                  <img src="assets/images/user.jpg" width="30px" height="30px"/>
                  <div>
                     <p>Ashikur Rahim</p>
                     <p>Last Tracked: 1 day ago</p>
                  </div>
               </div>
            </div>
            <form action="" method="">
               <select class="form-control ">
                  <option>Off</option>
                  <option>item 2</option>
                  <option>item 3</option>
                  <option>item 4</option>
                  <option>item 5</option>
               </select>
            </form>
            <div class="form-check form-switch">
               <input class="form-check-input w-10" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
            </div>
            <form action="" method="">
               <select class="form-control">
                  <option>Yes</option>
                  <option>item 2</option>
                  <option>item 3</option>
                  <option>item 4</option>
                  <option>item 5</option>
               </select>
            </form>
            <div class="form-check form-switch">
               <input class="form-check-input w-10" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
            </div>
            <div class="">
               <form action="" method="" class="ms-5">
                  <select class="form-control">
                     <option>Yes</option>
                     <option>item 2</option>
                     <option>item 3</option>
                     <option>item 4</option>
                     <option>item 5</option>
                  </select>
               </form>
            </div>
            <p class="w-10 text-center">10 min</p>
         </div>
     
</template>

<script>
export default {
    name: 'TimetrackdashboardUser',

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