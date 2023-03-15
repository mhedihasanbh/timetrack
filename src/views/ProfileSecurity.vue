<template>
   <div class="profile-top">
                <h3>My Account</h3>
                <div class="profile-btns my-4">
                  <router-link to="/profile"  class="profile-btn m-0">Profile</router-link>
                  <router-link to="/profilesecurity"  class="security-btn">Security</router-link>
                </div>
                </div>
                <div class="profile-security-form">
                  <form action="" method="">
                    <div class="mb-3">
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Two-Factor Authentication (2FA)">
                    </div>
                    <p class="py-3">It is highly recommended that you setup a two-step verification for your account. Enabling 2FA gives you more security and protection against possible phishing, social engineering and password brute-force attacks</p>
                      <div class="report-check form-check mb-5 d-flex align-items-center">
                        <input class="form-check-input h-0" type="checkbox" value="" id="flexCheckChecked" checked>
                        <label class="form-check-label ms-3" for="flexCheckChecked">
                          Enable Authenticator
                        </label>
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