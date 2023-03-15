<template>
  
         <h5 clss="py-4">Email Notifications</h5>
         <div class="email-notification-area bg-white rounded-3 px-4 py-4 h-100 ">
            <div class="add-user-btn ">
               <a href="">
               <i class="fa-solid fa-plus"></i>
               <span>CREATE NEW</span>
               </a>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center py-5">
               <a href=""><img src="assets/images/emailNotification.png"/></a>
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