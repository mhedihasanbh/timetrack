<template>
   <div class="profile-top">
                <h3>My Account</h3>
                <div class="profile-btns my-4">
                  <router-link to="/profile"  class="primary-bg text-dark profile-btn me-2">Profile</router-link>
                  <router-link to="/profilesecurity"  class="primary-btn  security-btn">Security</router-link>
                </div>
                </div>
                <div class="profile-form">
                  <form action="" method="">
                    <div class="mb-3">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Two-Factor Authentication (2FA)">
                    </div>
                   
                    
                    
                    <div class="mb-3">
                      <input class="form-check-input profile-check h-0" type="checkbox" value="" id="flexCheckChecked" checked>
                      <label class="form-check-label ms-3" for="flexCheckChecked">
                        Enable Authenticator
                      </label>
                    </div>
                    <div class="mb-3">
                      <p>It is highly recommended that you setup a two-step verification for your account. Enabling 2FA gives you more security and protection against possible phishing, social engineering and password brute-force attacks</p>
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
    name: 'TimetrackdashboardProfileSecurity',

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