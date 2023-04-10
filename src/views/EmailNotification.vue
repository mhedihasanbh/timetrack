<template>
         <div class="notification-title d-flex justify-content-between py-4">
            <h5 clss="py-4">Email Notifications</h5>
            <div class="add-user-btn ">
               <a href="#" class="primary-btn px-3 py-2 rounded-2" data-bs-toggle="modal" data-bs-target="#emailNotification">
               <i class="fa-solid fa-plus  me-2"></i>
               <span class="" >CREATE NEW</span>
               </a>
            </div>
            <div class="modal fade" id="emailNotification" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog  modal-dialog-centered modal-lg">
                  <div class="modal-content ms-5">
                     <div class="modal-header report-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa-regular fa-envelope me-2"></i>Create Email</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                         <div class="meeting-edit-form">
                            <form action="" method="">
                              <div class="mb-3">
                                <label>Sender Name</label>
                                <input type="text" class="form-control" placeholder="Enter Name" name="" />
                              </div>
                              <div class="mb-3">
                                <label>Reply to Email</label>
                                <input type="text" class="form-control" placeholder=" Enter Your Email" name="" />
                              </div>
                              <div class="mb-3">
                                <label>Receipient Email</label>
                                <input type="text" class="form-control"  name="" />
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
         </div>
       

         <div class="email-notification-area bg-white rounded-3 px-4 py-4 h-100 ">
            <div class="d-flex flex-column justify-content-center align-items-center py-5">
               <a href="">
                  <img src="assets/images/emailnotification.png"/>
                  </a>
               <h5 class="py-4">No notifications yet</h5>
               <p>You can create notifications for yourself by clicking on Create New at the top left</p>
            </div>
         </div>
      
</template>

<script>
export default {
    name: 'TimetrackdashboardEmailNotification',

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