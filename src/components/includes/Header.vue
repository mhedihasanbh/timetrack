<template>
    <div>
        <div class="header-container fixed-top">
        <header class="header navbar navbar-expand-sm expand-header px-3">
           <div class="header-left d-flex align-items-center  gap-3">
              <div class="logo">
                 <a href="">Time Trakcer</a>
              </div>
              <a href="#" class="sidebarCollapse" id="toggleSidebar" data-placement="bottom">
                <span class="fa-solid fa-bars"></span>
              </a>
            </div>
           <a href="#" class="right-toggle" id="toggleprofile" data-placement="bottom">
            <span class="fa-solid fa-bars"></span>
          </a>
           <ul class="navbar-item flex-row ml-auto gap-5 m-0 justify-content-end w-100">
            <form action="" method="">
              <div class="form-box d-flex gap-3 align-items-center">
                  <input type="search" placeholder="Search something..."/>
                  <i class="fa-solid fa-magnifying-glass top-search-icon"></i>
              </div>
            </form>
            <li class="nav-item dropdown user-profile-dropdown user-message">
                <a href="" class="nav-link user" id="notify" data-bs-toggle="dropdown">
                    <i class="fa-solid fa-comment-dots admin-message"></i>
                    <span class="message-count">1</span>
                </a>
            </li>
            <li class="nav-item dropdown user-profile-dropdown" id="notification-details">
              <a href="" class="nav-link user" id="notify" data-bs-toggle="dropdown">
                  <img src="assets/images/notification.png"/>
              </a>
            </li>
            <li class="nav-item dropdown user-profile-dropdown user-profile">
                <a href="" class="nav-link user" id="notify" data-bs-toggle="dropdown">
                    <img src="assets/images/userright.png" alt="" class="icon"/>
                    <i class="fa-solid fa-angle-down ms-4"></i>
                </a>
            </li>
          </ul>
        </header>
    </div>
    </div>
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