<template>
  <div class="profile-loader"  v-if="loader">
     <Loader/>
  </div>
  <div v-if="!loader">
     <TopFilter/>
     <div class="row g-3 py-5" >
        <div class="col-lg-3">
           <div class="messanger-wrapper h-100 rounded-4">
              <div class="messanger-user d-flex gap-2 my-2 p-3">
                 <div class="messanger-user-image">
                    <a href="#">
                    <img src="assets/images/fbuser.png" class="rounded-circle" width="60" height="60"/>
                    </a>
                 </div>
                 <div class="user-content">
                    <a href="#">
                       <p>john doe</p>
                       <p><span>you:</span>hello.18m</p>
                    </a>
                 </div>
              </div>
              <div class="messanger-user d-flex gap-2 my-2 p-3">
                 <div class="messanger-user-image">
                    <a href="#">
                    <img src="assets/images/userprofile.png" class="rounded-circle" width="60" height="60"/>
                    </a>
                 </div>
                 <div class="user-content">
                    <a href="#">
                       <p>jack jone</p>
                       <p><span>you:</span>hello.18m</p>
                    </a>
                 </div>
              </div>
              <div class="messanger-user d-flex gap-2 my-2 p-3">
                 <div class="messanger-user-image">
                    <a href="#">
                    <img src="assets/images/fbuser3.jpg" class="rounded-circle" width="60" height="60"/>
                    </a>
                 </div>
                 <div class="user-content">
                    <a href="#">
                       <p>anuska</p>
                       <p><span>you:</span>hello.18m</p>
                    </a>
                 </div>
              </div>
              <div class="messanger-user d-flex gap-2 my-2 p-3">
                 <div class="messanger-user-image">
                    <a href="#">
                    <img src="assets/images/fbuser4.jpg" class="rounded-circle" width="60" height="60"/>
                    </a>
                 </div>
                 <div class="user-content">
                    <a href="#">
                       <p>sajib Bhuyan</p>
                       <p><span>you:</span>hello.18m</p>
                    </a>
                 </div>
              </div>
              <div class="messanger-user d-flex gap-2 my-2 p-3">
                 <div class="messanger-user-image">
                    <a href="#">
                    <img src="assets/images/fbuser.png" class="rounded-circle" width="60px" height="60px"/>
                    </a>
                 </div>
                 <div class="user-content">
                    <a href="#">
                       <p>sajib Bhuyan</p>
                       <p><span>you:</span>hello.18m</p>
                    </a>
                 </div>
              </div>
              <div class="messanger-user d-flex gap-2 my-2 p-3">
                 <div class="messanger-user-image">
                    <a href="#">
                    <img src="assets/images/fbuser.png" class="rounded-circle" width="60" height="60"/>
                    </a>
                 </div>
                 <div class="user-content">
                    <a href="#">
                       <p>sajib Bhuyan</p>
                       <p><span>you:</span>hello.18m</p>
                    </a>
                 </div>
              </div>
              <div class="messanger-user d-flex gap-2 my-2 p-3">
                 <div class="messanger-user-image">
                    <a href="#">
                    <img src="assets/images/fbuser.png" class="rounded-circle" width="60px" height="60px"/>
                    </a>
                 </div>
                 <div class="user-content">
                    <a href="#">
                       <p>sajib Bhuyan</p>
                       <p><span>you:</span>hello.18m</p>
                    </a>
                 </div>
              </div>
              <div class="messanger-user d-flex gap-2 my-2 p-3">
                 <div class="messanger-user-image">
                    <a href="#">
                    <img src="assets/images/fbuser.png" class="rounded-circle" width="60" height="60"/>
                    </a>
                 </div>
                 <div class="user-content">
                    <a href="#">
                       <p>sajib Bhuyan</p>
                       <p><span>you:</span>hello.18m</p>
                    </a>
                 </div>
              </div>
           </div>
        </div>
        <div class="col-lg-6">
           <div class="messanger-middle-area p-4 ms-2 rounded-4 h-100">
              <div class="messanger-top d-flex align-items-center gap-3">
                 <div>
                    <img src="assets/images/fbuser.png" width="60px" height="60px"/>
                 </div>
                 <div>
                    <h5 class="project-title messanger-user-Name">Ashikur Rahim</h5>
                    <p>@ashik</p>
                 </div>
              </div>
              <div class="message-box bg-white rounded-3 p-4 my-5 ">
                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              </div>
              <div class="message-box sender-box  rounded-3 p-3 my-5 w-75 ms-auto">
                 <p class="text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              </div>
              <small class="d-block text-center">Satday</small>
              <div class="message-box bg-white rounded-3 p-4 my-5 ">
                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              </div>
              <div class="message-box sender-box  rounded-3 p-3 my-5 w-75 ms-auto">
                 <p class="text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              </div>
              <div class="type-message">
                 <form>
                    <div class="send-icon">
                       <input type="text" class="form-control messanger-input w-100" placeholder="Typing...."/>
                       <button type="submit"> <i class="fa-regular fa-paper-plane icon" ></i> </button>
                    </div>
                 </form>
              </div>
           </div>
        </div>
        <div class="col-lg-3">
           <div class="messanger-right-area p-4 h-100 rounded-4">
              <div class="messanger-top d-flex align-items-center gap-3">
                 <div>
                    <img src="assets/images/fbuser.png" width="60px" height="60px"/>
                 </div>
                 <div>
                    <h6 class="project-title messanger-user-Name">Ashikur Rahim</h6>
                    <p>@ashik</p>
                 </div>
              </div>
              <div class="user-info-list py-5">
                 <ul>
                    <li><a href=""><i class="fa-solid fa-phone-volume me-2"></i>000 00 000 00</a></li>
                    <li><a href=""><i class="fa-regular fa-envelope-open me-2"></i>ashik</a></li>
                    <li><a href=""><i class="fa-regular fa-file-lines me-2"></i>file name</a></li>
                    <li><a href=""><i class="fa-regular fa-file-lines me-2"></i>file name</a></li>
                    <li><a href=""><i class="fa-regular fa-file-lines me-2"></i>file name</a></li>
                    <li><a href=""><i class="fa-regular fa-file-lines me-2"></i>file name</a></li>
                 </ul>
              </div>
           </div>
        </div>
     </div>
  </div>
</template>
<script>
  import TopFilter from '../components/includes/TopFilter.vue';
  import Loader from '../components/includes/Loading.vue'
  export default {
     name: 'TimeMessanger',
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