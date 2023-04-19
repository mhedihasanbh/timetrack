<template>
    <div class="row py-3">
       <div class="col-lg-12">
          <div class="update-profile w-75 mx-auto bg-white p-5">
             <form action="" method="" class="user-update">
                <div class="row g-3 mb-4">
                   <div class="col">
                      <input type="text" class="form-control" value="sajib " aria-label="First name">
                   </div>
                   <div class="col">
                      <input type="text" class="form-control" value="bhuyan" aria-label="Last name">
                   </div>
                </div>
                <div class="row g-3 mb-4">
                   <div class="col">
                      <input type="email" class="form-control" value="sajib@gmail.com"  aria-label="">
                   </div>
                   <div class="col">
                      <input type="number" class="form-control" value="01987311830" aria-label="Last name">
                   </div>
                </div>
                <div class="row g-3 mb-4">
                   <div class="col">
                      <input type="text" class="form-control" value="skyp.com/sojib"  aria-label="">
                   </div>
                   <div class="col">
                      <input type="text" class="form-control" value="facebook.com/sojib" aria-label="Last name">
                   </div>
                </div>
                <div class="row g-3 mb-4">
                   <div class="col">
                      <div>
                         <input type="file" class="form-control-file" placeholder="image"  aria-label="">
                      </div>
                      <div>
                         <img src="assets/images/userprofile.png" width="80" height="80" class="rounded"/>
                      </div>
                   </div>
                </div>
                <div class="row g-3 mb-4">
                   <div class="col">
                      <div class="text-end">
                         <button type="submit" class="primary-btn py-2 px-5" >Update</button>
                      </div>
                   </div>
                </div>
             </form>
          </div>
       </div>
    </div>
 </template>
 <script>
    export default {
        name: 'TimetrackdashboardEditprofile',
    
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