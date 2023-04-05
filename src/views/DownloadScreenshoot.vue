<template>
    <div class="top-filter-area bg-white rounded p-3 d-flex justify-content-between">
            <div class="filter-left d-flex align-items-center flex-wrap gap-4">
             <form action="" method="" class="d-flex gap-2">
               <div class="mb-3">
                  <input type="search" class="form-control filter-by-week" id="exampleInputEmail1" placeholder="Search">
               </div>
                <div class="tema-select">
                  <select class="form-select " aria-label="Default select example">
                  <option selected>All Teams</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  </select>
                </div>
               </form>
             </div>
               <div class="filter-form">
                <form action="" method="" class="d-flex gap-2 align-items-center">
                   <div class="calander-icon">
                      <i class="fa-regular fa-calendar-days icon me-2"></i>  
                     <input type="date" class="form-control filter-by-week"  placeholder="Filter  Date">
                   </div> 
                   <select class="form-select filter-by-week">
                     <option selected>Last Week</option>
                     <option value="1">Last Month</option>
                     <option value="2">Last year</option>
                  </select>
                  <a href=""> <i class="fa-solid fa-arrows-rotate"></i></a>
               </form>
          </div>
         </div>
         <div class="user-wrapper bg-white p-2 my-3 ">
             <div class="popup-gallery">
               <div class="row g-0">
                    <div class="col-lg-3">
                    <div class="download-image ">
                        <div class="download-content d-flex p-3">
                            <span class="me-5 ">20 Jun 2023 </span>
                            <span>10:20 PM</span>
                        </div>
                       <a href="assets/images/lightboxImage.png" title="The Cleaner"><img src="assets/images/screenshootimageone.png" width="300" height="175"></a>
                    </div>
                    </div>
                    <div class="col-lg-3">
                    <div class="download-image">
                       <a href="https://cdn.pixabay.com/photo/2017/11/20/08/12/babe-2964756_960_720.jpg" title="The Cleaner two"><img src="assets/images/screenshootimageone.png" width="300" height="175"></a>
                    </div>
                    </div>
                    <div class="col-lg-3">
                    <div class="download-image">
                       <a href="https://cdn.pixabay.com/photo/2020/07/04/08/53/water-sports-5368745_960_720.jpg" title="The Cleaner three"><img src="assets/images/screenshootimageone.png" width="300" height="175"></a>
                    </div>
                    </div>
                    <div class="col-lg-3">
                    <div class="download-image">
                       <a href="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg" title="The Cleaner four"><img src="assets/images/screenshootimageone.png" width="300" height="175"></a>
                    </div>
                    </div>
                   </div>
              
              </div>
              <div class="popup-gallery">
               <div class="row g-0 my-3">
                    <div class="col-lg-3">
                    <div class="download-image ">
                        <div class="download-content d-flex p-3">
                            <span class="me-5">20 Jun 2023 </span>
                            <span>10:20 PM</span>
                        </div>
                       <a href="assets/images/lightboxImage.png" title="The Cleaner"><img src="assets/images/screenshootimageone.png" width="300" height="175"></a>
                    </div>
                    </div>
                    <div class="col-lg-3">
                    <div class="download-image">
                       <a href="https://cdn.pixabay.com/photo/2017/11/20/08/12/babe-2964756_960_720.jpg" title="The Cleaner two"><img src="assets/images/screenshootimageone.png" width="300" height="175"></a>
                    </div>
                    </div>
                    <div class="col-lg-3">
                    <div class="download-image">
                       <a href="https://cdn.pixabay.com/photo/2020/07/04/08/53/water-sports-5368745_960_720.jpg" title="The Cleaner three"><img src="assets/images/screenshootimageone.png" width="300" height="175"></a>
                    </div>
                    </div>
                    <div class="col-lg-3">
                    <div class="download-image">
                       <a href="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg" title="The Cleaner four"><img src="assets/images/screenshootimageone.png" width="300" height="175"></a>
                    </div>
                    </div>
                   </div>
              
              </div>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
             </nav>
         </div> 
         

  </template>
  
  <script>

  export default {
    name: 'downloadScrennshot',
  
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
  
  <style  scoped>
  
  </style>