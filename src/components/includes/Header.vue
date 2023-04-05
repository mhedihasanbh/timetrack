<template>
    <header class="header fixed-top d-flex justify-content-between align-items-center py-2">
      <div class="header-title d-flex gap-sm-2 gap-5 align-items-center">
        <h4>Time Trakcer</h4>
       <a href="#" class="sidebarCollapse ms-4" id="toggleSidebar" data-placement="bottom">
                <span class="fa-solid fa-bars"></span>
              </a>
        <h4 class="dashboard-heading">Dashboard</h4>
      </div>
      <div class="header-search w-25">
        <form action="" method="">
            <div class="">
              <i class="fa-solid fa-magnifying-glass search-icon"></i>
              <input type="search" placeholder="search...."/>
           
            </div>
        </form>
      </div>
      <div class="herader-right d-flex align-items-center gap-4">
          <div class="header-right-icon chat-box">
            <router-link to="/messanger">
              <i class="fa-regular fa-message"></i>
            </router-link>
            <span>1</span>
           </div>
          <div class="header-right-icon notification-box">
            <a href="#" class="dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-regular fa-bell"></i></a>
            <span></span>
            <!--notification dropdown area start--->
            <div class="notification-area dropdown-menu w-100 px-4 py-3">
                <div class="notification-remove  d-flex justify-content-between align-items-center py-2 px-3 my-3 rounded">
                  <h5>Notifications</h5>
                  <div>
                    <a href="">
                      <i class="fa-solid fa-xmark text-dark"></i
                        >
                        </a>
                  </div>
                </div>
                <ul class="nav nav-tabs d-flex justify-content-between" id="myTab" role="tablist">
                
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Direct</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Overall</button>
                  </li>
                
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Mark all as read</button>
                  </li>
                  
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <h5 class="py-4">TODAY</h5>
                    <div class="notification-box d-flex bg-white rounded gap-3 px-3 py-4 align-items-center mb-3">
                      <div class="notification-image">
                        <img src="assets/images/notifymessage.png"/>
                      </div>
                      <div class="notification-content ">
                        <p><strong>Ashikur Rahim</strong>  mentioned you in <br> a comment in a thread:</p>
                        <small>1h ago</small>
                      </div>
                    </div>
                    <div class="notification-box d-flex bg-white rounded gap-3 px-3 py-4 align-items-center mb-3">
                      <div class="notification-image">
                        <img src="assets/images/notifymessage.png"/>
                      </div>
                      <div class="notification-content ">
                        <p><strong>Ashikur Rahim</strong>  mentioned you in <br> a comment in a thread:</p>
                        <small>1h ago</small>
                      </div>
                    </div>
                    <div class="notification-box d-flex bg-white rounded gap-3 px-3 py-4 align-items-center mb-3">
                      <div class="notification-image">
                        <img src="assets/images/notifymessage.png"/>
                      </div>
                      <div class="notification-content ">
                        <p><strong>Ashikur Rahim</strong>  mentioned you in <br> a comment in a thread:</p>
                        <small>1h ago</small>
                      </div>
                    </div>
                    <h5>Yesterday</h5>
                    <div class="notification-box d-flex bg-white rounded gap-3 px-3 py-4 align-items-center mb-3">
                      <div class="notification-image">
                        <img src="assets/images/notifymessage.png"/>
                      </div>
                      <div class="notification-content ">
                        <p><strong>Ashikur Rahim</strong>  mentioned you in <br> a comment in a thread:</p>
                        <small>1h ago</small>
                      </div>
                    </div>
                    <div class="notification-box d-flex bg-white rounded gap-3 px-3 py-4 align-items-center mb-3">
                      <div class="notification-image">
                        <img src="assets/images/notifymessage.png"/>
                      </div>
                      <div class="notification-content ">
                        <p><strong>Ashikur Rahim</strong>  mentioned you in <br> a comment in a thread:</p>
                        <small>1h ago</small>
                      </div>
                      
                    </div>

                  </div>
                  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">Overall</div>
                  <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">Mark all as read</div>
                </div>
              </div>
              <!----notification dropdown end----->
         
          </div>
          <div class="dropdown ">
          <a class="dropdown-toggle user-info"  data-bs-toggle="dropdown" aria-expanded="false">
            sajib bhuyan
            <i class="fa-solid fa-angle-down"></i>
          </a>
          <ul class="dropdown-menu profile-dropdown mt-3">
            <li><a class="dropdown-item" href="#"><i class="fa-regular fa-user me-2"></i>My Profile</a></li>
            <li><a class="dropdown-item" href="#"><i class="fa-regular fa-pen-to-square me-2"></i>Edit Profile</a></li>
            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-lock-open me-2"></i>Activity Log</a></li>
            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-right-from-bracket me-2"></i>Sign Out</a></li>
          </ul>
        </div>
        <div class="user-image">
          <img src="assets/images/headerUser.png" width="42" height="42"/>
        </div>
      </div>
    </header>
</template>

<script>
export default {
    name: 'TimetrackdashboardHeader',

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