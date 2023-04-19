<template>
  <div class="profile-loader"  v-if="loader">
     <Loader/>
  </div>
  <div v-if="!loader">
     <TopFilter/>
     <div class="download-top py-4 text-center">
        <p class="project-title">Download & install this app on your computer to track your work</p>
     </div>
     <div class="row">
        <div class="col-lg-6">
           <div class="download-area  bg-white p-5 rounded-3 my-3">
              <a href="" class="py-3">
              <img src="assets/images/downloadicon.png"/>
              </a>
              <p class="py-3">Download Time Tracker app for Windows</p>
              <p>v3.8.50- Compatible with Windows 10 or newer</p>
           </div>
           <div class="downloadBy-system d-flex justify-content-center gap-3">
              <div class="software-download d-flex gap-2 bg-white px-4 py-2">
                 <a href="">
                 <img src="assets/images/windows.png"/>
                 <span class="ms-2 windows">Windows</span>
                 </a>
              </div>
              <div class="software-download d-flex gap-2 bg-white px-4 py-2">
                 <a href="">
                 <img src="assets/images/apple.png"/>
                 <span class="ms-2">Mac OS X</span>
                 </a>
              </div>
              <div class="software-download d-flex gap-2 bg-white px-4 py-2">
                 <a href="">
                 <img src="assets/images/ububtu.png"/>
                 <span class="ms-2">Ubuntu</span>
                 </a>
              </div>
           </div>
        </div>
        <div class="col-lg-6">
           <h6 class="project-title">For mass-installation only</h6>
           <p class="py-3">If installing across computers on a network, download the .BAT or the .MSI installation file</p>
           <div class="download-button">
              <a href="" class="primary-btn my-4 rounded-3" >DOWNLOAD .BAT INSTALLATION FILE</a>
           </div>
           <div class="download-button">
              <a href="" class="primary-btn rounded-3" >DOWNLOAD .MSI INSTALLATION FILE</a>
           </div>
           <p class="py-3 w-50">Installations done using .BAT and .MSI files will not automatically update. You'll need to manually update the app when new versions are released.</p>
        </div>
     </div>
  </div>
</template>
<script>
  import TopFilter from '../components/includes/TopFilter.vue';
  import Loader from '../components/includes/Loading.vue'
  export default {
      name: 'TimetrackdashboardDownload',
      components:{TopFilter,Loader},
  
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