<template>
   <div class="profile-loader"  v-if="loader">
      <Loader/>
   </div>
   <div v-if="!loader">
      <div class="my-3">
         <TopFilter/>
      </div>
      <div class="integration-area bg-white p-4">
         <h3>Integrations</h3>
         <div class="row my-3">
            <div class="col-lg-12">
               <div class="integration-top-area primary-bg rounded-3 p-3">
                  <h6>Chrome Extension Integrations</h6>
                  <div class="integration-status d-flex justify-content-between">
                     <div class="w-50">
                        <form action="" method="" >
                           <label>Integrations’ status</label>
                           <select class="form-control w-100 text-dark">
                              <option>Off</option>
                              <option>on</option>
                           </select>
                        </form>
                     </div>
                     <div class="integration-status-left bg-white d-flex gap-2 px-4 py-2 w-25">
                        <img src="assets/images/integrationGoggle.png"/>
                        <div>
                           <p>Available in the</p>
                           <p>Chrome Web Store</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="row py-5">
            <h6>Available Integrations</h6>
            <table class="table table-bordered primary-bg">
               <thead>
                  <tr>
                     <th>App/Website</th>
                     <th>Description</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>
                        <div class="d-flex gap-2">
                           <img src="assets/images/chorome.png"/>
                           <small>Google Chrome</small>
                        </div>
                     </td>
                     <td>Track time spent on Chrome tasks & projects</td>
                  </tr>
                  <tr>
                     <td>
                        <div class="d-flex gap-2">
                           <img src="assets/images/chorome.png"/>
                           <small>Google Chrome</small>
                        </div>
                     </td>
                     <td>Track time spent on Chrome tasks & projects</td>
                  </tr>
                  <tr>
                     <td>
                        <div class="d-flex gap-2">
                           <img src="assets/images/chorome.png"/>
                           <small>Google Chrome</small>
                        </div>
                     </td>
                     <td>Track time spent on Chrome tasks & projects</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>
<script>
   import Loader from '../components/includes/Loading.vue'
   import TopFilter from '../components/includes/TopFilter.vue';
   export default {
       name: 'TimetrackdIntegration',
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
<style lang="scss" scoped>
</style>