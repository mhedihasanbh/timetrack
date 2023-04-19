<template>
    <div>
       <div class="row py-5">
         <div class="col-lg-12">
            <div class="profile-area bg-white  w-50 py-3 mx-auto  ">
               <div class="profile-image text-center ">
                 <img src="assets/images/userprofile.png" width="80" height="80" class="rounded"/>
               </div>
               <div class="user-info mx-auto d-flex justify-content-center py-4 flex-column align-items-center">
                <ul>
                  <li><i class="fa-regular fa-user"></i>sajib bhuyan</li>
                  <li><i class="fa-regular fa-envelope"></i>sajibwp@gmail.com</li>
                  <li><i class="fa-solid fa-phone"></i>+8801987311830</li>
                  <li><i class="fa-brands fa-facebook"></i>sajib.me</li>
                  <li><i class="fa-brands fa-skype"></i>sajib10.1</li>
                </ul>
                <div class="edit-profile">
                <router-link to="/editprofile"  class="primary-btn px-5 py-2">Edit Profile</router-link>
               </div>
            </div>
           
            </div>
           
         </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'TimetrackUserprofile',

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