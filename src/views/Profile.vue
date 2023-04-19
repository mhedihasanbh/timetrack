<template>
  <div class="profile-loader"  v-if="loader">
     <Loader/>
  </div>
  <div v-if="!loader">
     <div class="my-3" >
        <TopFilter/>
     </div>
     <div class="profile-area bg-white  p-4" >
        <nav>
           <div class="nav nav-tabs profile-tab" id="nav-tab" role="tablist">
              <button class="nav-link profile-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Profile</button>
              <button class="nav-link profile-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Security</button>
           </div>
        </nav>
        <div class="tab-content " id="nav-tabContent">
           <div class="tab-pane profile fade show active mt-4" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
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
           </div>
           <div class="tab-pane fade mt-4" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
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
           </div>
        </div>
     </div>
  </div>
</template>
<script>
  import Loader from '../components/includes/Loading.vue'
  import TopFilter from '../components/includes/TopFilter.vue'
  export default {
      name: 'TimetrackProfile',
      components:{Loader,TopFilter},
  
      data() {
          return {
            loader:true
              
          };
      },
  
      mounted() {
          
      },
      created(){
        setTimeout(() => {
        this.loader=false
      }, 1000);
        
      },
  
      methods: {
          
      },
  };
</script>
<style>
</style>