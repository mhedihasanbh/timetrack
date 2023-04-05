<template>
 
         <div class="profile-top">
                <h4 class="project-title">My Account</h4>
                <div class="profile-btns my-4">
                  <router-link to="/profile"  class="primary-btn profile-btn me-2">Profile</router-link>
                  <router-link to="/profilesecurity"  class="primary-bg text-dark security-btn">Security</router-link>
                </div>
                </div>
                <div class="profile-form">
                  <form action="" method="">
                    <div class="mb-3">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name">
                    </div>
                    <div class="mb-3">
                      <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Email">
                    </div>
                    <div class="mb-3">
                      <input type="password" class="form-control" id="exampleFormControlInput3" placeholder="Password">
                    </div>
                    <div class="mb-5">
                      <select class="form-select p-2 ps-3 " aria-label="Default select example">
                        <option selected>Time Format</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <input class="form-check-input profile-check h-0" type="checkbox" value="" id="flexCheckChecked" checked>
                      <label class="form-check-label ms-3" for="flexCheckChecked">
                        Receive daily Hours Tracked email report
                      </label>
                    </div>
                    <div class="mb-3">
                    <button type="submit" class="cancel-btn primary-bg text-dark me-3">CANCEL</button>
                    <button type="submit" class="primary-btn save-btn">SAVE</button>
                  </div>
                  </form>
               </div>
          
  </template>

<script>
export default {
    name: 'TimetrackdashboardProfile',

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

<style>

</style>