<template>
 
         <!--notification dropdown area start--->
         <div class="notification-area px-4 py-3">
            <div class="notification-remove  d-flex justify-content-between align-items-center py-2 px-3 my-3 rounded">
               <h5>Notifications</h5>
               <div>
                  <a href="">
                  <i class="fa-solid fa-xmark"></i
                     ></a>
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
         <div class="top-filter-area bg-white rounded p-3 d-flex justify-content-between">
            <div class="filter-left d-flex align-items-center flex-wrap gap-4">
               <h5>Overview</h5>
               <a  class="filter" id="filter-icon">
               <img src="assets/images/filter.png"/>
               <span>Filter</span>
               </a>
            </div>
            <div class="filter-form">
               <form action="" method="">
                  <!-- <div class="d-flex bg-white border-none align-items-center">
                     <label>january 3, 2023</label>
                     <input type="date" class="form-control filter-date"/>
                     </div> -->
                  <select class="form-select filter-by-week" aria-label="Default select example">
                     <option selected>Last Week</option>
                     <option value="1">Last Month</option>
                     <option value="2">Last year</option>
                  </select>
               </form>
            </div>
         </div>
         <!----filter show start------->
         <div class="row" id="filter-area">
            <div class="col-lg-12">
               <div class="filter-area">
                  <div class="filter-title d-flex justify-content-between align-items-center py-4">
                     <div>
                        <h6>Filter</h6>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                     </div>
                     <div>
                        <form action="" method="">
                           <div class="form-box d-flex gap-3 align-items-center">
                              <input type="search" placeholder="Search something..."/>
                              <i class="fa-solid fa-magnifying-glass top-search-icon"></i>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div class="filter-top-area ">
                     <div class="filter-tab">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                           <li class="nav-item" role="presentation">
                              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Team Member</button>
                           </li>
                           <li class="nav-item" role="presentation">
                              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">User Name</button>
                           </li>
                           <li class="nav-item" role="presentation">
                              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Team Name</button>
                           </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                           <div class="tab-pane fade show active py-5" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                              <table class="table filter-table px-3 table-bordered">
                                 <thead>
                                    <tr>
                                       <th scope="col">User List</th>
                                       <th scope="col">User Summary</th>
                                       <th scope="col">Reports</th>
                                       <th scope="col">Productivity Apps</th>
                                       <th scope="col">UnProductivity Apps</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>
                                          <div class="d-flex gap-3">
                                             <img src="assets/images/searchFilter.png" width="26px" height="26px"/>
                                             <span>Ali Hasan Joy</span>
                                          </div>
                                       </td>
                                       <td>Ali Hasan Joy</td>
                                       <td>Ali Hasan Joy</td>
                                       <td>
                                          <div class="gamelords py-2">
                                             <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style="width: 75%">75%</div>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <div class="gamelords py-2">
                                             <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style="width: 35%">35%</div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div class="d-flex gap-3">
                                             <img src="assets/images/searchFilter.png" width="26px" height="26px"/>
                                             <span>Ali Hasan Joy</span>
                                          </div>
                                       </td>
                                       <td>Ali Hasan Joy</td>
                                       <td>Ali Hasan Joy</td>
                                       <td>
                                          <div class="gamelords py-2">
                                             <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style="width: 75%">75%</div>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <div class="gamelords py-2">
                                             <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style="width: 35%">35%</div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div class="d-flex gap-3">
                                             <img src="assets/images/searchFilter.png" width="26px" height="26px"/>
                                             <span>Ali Hasan Joy</span>
                                          </div>
                                       </td>
                                       <td>Ali Hasan Joy</td>
                                       <td>Ali Hasan Joy</td>
                                       <td>
                                          <div class="gamelords py-2">
                                             <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style="width: 75%">75%</div>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <div class="gamelords py-2">
                                             <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style="width: 35%">35%</div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div class="d-flex gap-3">
                                             <img src="assets/images/searchFilter.png" width="26px" height="26px"/>
                                             <span>Ali Hasan Joy</span>
                                          </div>
                                       </td>
                                       <td>Ali Hasan Joy</td>
                                       <td>Ali Hasan Joy</td>
                                       <td>
                                          <div class="gamelords py-2">
                                             <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style="width: 75%">75%</div>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <div class="gamelords py-2">
                                             <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style="width: 35%">35%</div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div class="d-flex gap-3">
                                             <img src="assets/images/searchFilter.png" width="26px" height="26px"/>
                                             <span>Ali Hasan Joy</span>
                                          </div>
                                       </td>
                                       <td>Ali Hasan Joy</td>
                                       <td>Ali Hasan Joy</td>
                                       <td>
                                          <div class="gamelords py-2">
                                             <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style="width: 75%">75%</div>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <div class="gamelords py-2">
                                             <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style="width: 35%">35%</div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <div class="d-flex gap-3">
                                             <img src="assets/images/searchFilter.png" width="26px" height="26px"/>
                                             <span>Ali Hasan Joy</span>
                                          </div>
                                       </td>
                                       <td>Ali Hasan Joy</td>
                                       <td>Ali Hasan Joy</td>
                                       <td>
                                          <div class="gamelords py-2">
                                             <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style="width: 75%">75%</div>
                                             </div>
                                          </div>
                                       </td>
                                       <td>
                                          <div class="gamelords py-2">
                                             <div class="progress project-progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style="width: 35%">35%</div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                           <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
                           <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!----filter show end------->
         <!---top mini chart--->
         <div class="row my-5">
            <div class="col-lg-3">
               <div class="chart-area bg-white rounded-4 py-2 px-3">
                  <div class="mini-top-border">
                     <hr>
                  </div>
                  <div class="chart-box d-flex justify-content-between pt-1">
                     <span>Arrival time</span>
                     <span class="min-chart-salmon">10.20 AM</span>
                  </div>
                  <hr/>
                  <div class="">
                     <div id="chartone">
                      </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-3">
               <div class="chart-area bg-white rounded-4 py-2 px-3">
                  <div class="mini-top-border">
                     <hr>
                  </div>
                  <div class="chart-box d-flex justify-content-between pt-1">
                     <span>Left time</span>
                     <span class="min-chart-albama">ONLINE</span>
                  </div>
                  <hr/>
                  <div class="">
                     <div id="charttwo">
                      </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-3">
               <div class="chart-box chart-area bg-white rounded-4 py-2 px-3">
                  <div class="mini-top-border">
                     <hr>
                  </div>
                  <div class="d-flex justify-content-between pt-1">
                     <span>Productive time</span>
                     <span class="min-chart-albama">10 M</span>
                  </div>
                  <hr/>
                  <div class="">
                     <div id="chart-three"/>
                  </div>
               </div>
            </div>
            <div class="col-lg-3">
               <div class="chart-area bg-white rounded-4 py-2 px-3">
                  <div class="mini-top-border">
                     <hr>
                  </div>
                  <div class="chart-box d-flex justify-content-between pt-1">
                     <span>Desktime Time</span>
                     <span class="min-chart-albama">40 M</span>
                  </div>
                  <hr/>
                  <div class="">
                     <div id="chart-four"></div>
                  </div>
               </div>
            </div>
         </div>
       
         <div class="row py-3">
            <div class="col-lg-8">
               <div class="productivity-bar-area bg-white rounded p-3 h-100">
                  <div class="productivity-title d-flex justify-content-between">
                     <div>
                        <h3>Productivity By Hour</h3>
                     </div>
                     <div>
                        <form action="" method="">
                           <select class="form-select" aria-label="Default select example">
                              <option selected>Last Week</option>
                              <option value="1">Last Month</option>
                              <option value="2">Last Year</option>
                           </select>
                        </form>
                     </div>
                  </div>
                  <hr/>
                  <div id="productivity-chart"></div>
               </div>
            </div>
            <div class="col-lg-4">
               <div class="daily-click-chart bg-white rounded-3 h-100 d-flex justify-content-center flex-column ps-3">
                  <div id="donut"></div>
               </div>
            </div> 
            </div>
        
         <!--Neutural Apps area---->
         <div class="row py-3">
            <div class="col-lg-8">
               <div class="row bg-white rounded p-3">
                  <div class="d-flex justify-content-between">
                     <h5 class="overview-title">Neutural Apps</h5>
                     <h6>30 M</h6>
                  </div>
                  <hr/>
                  <div class="col-lg-6 border-right pe-3">
                     <div class="productivity-app-area ">
                        <div class="app-box d-flex justify-content-between py-3">
                           <div class="product-app d-flex">
                              <a href="">
                              <img src="assets/images/chorome.png"/>
                              <span class="ms-3">Google Chrome</span>
                              </a>
                           </div>
                           <span class="productiy-month">05 M</span>
                        </div>
                        <div class="app-box d-flex justify-content-between py-3">
                           <div class="product-app d-flex">
                              <a href="">
                              <img src="assets/images/notepad.png"/>
                              <span class="ms-3">Notepad</span>
                              </a>
                           </div>
                           <span class="productiy-month">08 M</span>
                        </div>
                        <div class="app-box d-flex justify-content-between py-3">
                           <div class="product-app d-flex">
                              <a href="">
                              <img src="assets/images/goglebrowser.png"/>
                              <span class="ms-3">Google account</span>
                              </a>
                           </div>
                           <span class="productiy-month">01 M</span>
                        </div>
                        <div class="app-box d-flex justify-content-between py-3">
                           <div class="product-app d-flex">
                              <a href="">
                              <img src="assets/images/edge.png"/>
                              <span class="ms-3">Windows Explorer</span>
                              </a>
                           </div>
                           <span class="productiy-month">02 M</span>
                        </div>
                        <div class="app-box d-flex justify-content-between py-3">
                           <div class="product-app d-flex">
                              <a href="">
                              <img src="assets/images/facebook.png"/>
                              <span class="ms-3">Facebook</span>
                              </a>
                           </div>
                           <span class="productiy-month">03 M</span>
                        </div>
                        <div class="app-box d-flex justify-content-between py-3">
                           <div class="product-app d-flex">
                              <a href="">
                              <img src="assets/images/chorome.png"/>
                              <span class="ms-3">google.com</span>
                              </a>
                           </div>
                           <span class="productiy-month">10 M</span>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-6 ps-3">
                     <div class="productivity-app-area">
                        <div class="app-box d-flex justify-content-between py-3">
                           <div class="product-app d-flex">
                              <a href="">
                              <img src="assets/images/chorome.png"/>
                              <span class="ms-3">Google Chrome</span>
                              </a>
                           </div>
                           <span class="productiy-month">05 M</span>
                        </div>
                        <div class="app-box d-flex justify-content-between py-3">
                           <div class="product-app d-flex">
                              <a href="">
                              <img src="assets/images/notepad.png"/>
                              <span class="ms-3">Notepad</span>
                              </a>
                           </div>
                           <span class="productiy-month">08 M</span>
                        </div>
                        <div class="app-box d-flex justify-content-between py-3">
                           <div class="product-app d-flex">
                              <a href="">
                              <img src="assets/images/goglebrowser.png"/>
                              <span class="ms-3">Google account</span>
                              </a>
                           </div>
                           <span class="productiy-month">01 M</span>
                        </div>
                        <div class="app-box d-flex justify-content-between py-3">
                           <div class="product-app d-flex">
                              <a href="">
                              <img src="assets/images/edge.png"/>
                              <span class="ms-3">Windows Explorer</span>
                              </a>
                           </div>
                           <span class="productiy-month">02 M</span>
                        </div>
                        <div class="app-box d-flex justify-content-between py-3">
                           <div class="product-app d-flex">
                              <a href="">
                              <img src="assets/images/facebook.png"/>
                              <span class="ms-3">Facebook</span>
                              </a>
                           </div>
                           <span class="productiy-month">03 M</span>
                        </div>
                        <div class="app-box d-flex justify-content-between py-3">
                           <div class="product-app d-flex">
                              <a href="">
                              <img src="assets/images/chorome.png"/>
                              <span class="ms-3">google.com</span>
                              </a>
                           </div>
                           <span class="productiy-month">10 M</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 ">
               <div class="bg-white rounded p-3">
                  <div class="d-flex justify-content-between">
                     <h5 class="overview-title">Unproductivity Apps</h5>
                     <h6>30 M</h6>
                  </div>
                  <hr/>
                  <div class="app-box d-flex justify-content-between py-3">
                     <div class="product-app d-flex">
                        <a href="">
                        <img src="assets/images/chorome.png"/>
                        <span class="ms-3">Google Chrome</span>
                        </a>
                     </div>
                     <span class="productiy-month">05 M</span>
                  </div>
                  <div class="app-box d-flex justify-content-between py-3">
                     <div class="product-app d-flex">
                        <a href="">
                        <img src="assets/images/notepad.png"/>
                        <span class="ms-3">Notepad</span>
                        </a>
                     </div>
                     <span class="productiy-month">08 M</span>
                  </div>
                  <div class="app-box d-flex justify-content-between py-3">
                     <div class="product-app d-flex">
                        <a href="">
                        <img src="assets/images/goglebrowser.png"/>
                        <span class="ms-3">Google account</span>
                        </a>
                     </div>
                     <span class="productiy-month">01 M</span>
                  </div>
                  <div class="app-box d-flex justify-content-between py-3">
                     <div class="product-app d-flex">
                        <a href="">
                        <img src="assets/images/edge.png"/>
                        <span class="ms-3">Windows Explorer</span>
                        </a>
                     </div>
                     <span class="productiy-month">02 M</span>
                  </div>
                  <div class="app-box d-flex justify-content-between py-3">
                     <div class="product-app d-flex">
                        <a href="">
                        <img src="assets/images/facebook.png"/>
                        <span class="ms-3">Facebook</span>
                        </a>
                     </div>
                     <span class="productiy-month">03 M</span>
                  </div>
                  <div class="app-box d-flex justify-content-between py-3">
                     <div class="product-app d-flex">
                        <a href="">
                        <img src="assets/images/chorome.png"/>
                        <span class="ms-3">google.com</span>
                        </a>
                     </div>
                     <span class="productiy-month">10 M</span>
                  </div>
               </div>
            </div>
         </div>
     
      <!---footer area--->
      <div class="container-fluid bg-dark p-5">
         <div class="row">
            <div class="col-lg-3">
               <div class="footer-widget">
                  <h2>General</h2>
                  <ul>
                     <li><a href="">Home</a></li>
                     <li><a href="">Try for free</a></li>
                     <li><a href="">Pricing</a></li>
                     <li><a href="">Customer Reviews</a></li>
                  </ul>
               </div>
            </div>
            <div class="col-lg-3">
               <div class="footer-widget">
                  <h2>Features</h2>
                  <ul>
                     <li><a href="">All Features</a></li>
                     <li><a href="">Time Traking</a></li>
                     <li><a href="">Time managment</a></li>
                     <li><a href="">FAQ</a></li>
                  </ul>
               </div>
            </div>
            <div class="col-lg-2">
               <div class="footer-widget">
                  <h2>Resources</h2>
                  <ul>
                     <li><a href="">Contact</a></li>
                     <li><a href="">About Us</a></li>
                     <li><a href="">Becoe A Partner</a></li>
                     <li><a href="">FAQ</a></li>
                  </ul>
               </div>
            </div>
            <div class="col-lg-2">
               <div class="footer-widget">
                  <h2>Help center</h2>
                  <ul>
                     <li><a href="">Support</a></li>
                     <li><a href="">Help Center</a></li>
                     <li><a href="">Server Stutas</a></li>
                  </ul>
               </div>
            </div>
            <div class="col-lg-2">
               <div class="footer-widget">
                  <h2>Legal</h2>
                  <ul>
                     <li><a href="">Trams</a></li>
                     <li><a href="">Privacy</a></li>
                     <li><a href="">Security</a></li>
                  </ul>
               </div>
            </div>
         </div>
         </div>

         
     
</template>

<script>
import ApexCharts from 'apexcharts'
export default {
    name: 'TimetrackdashboardHome',
   

    data() {
        return {
        
    }
        
    },

    mounted() {
        
            var minichartOne = {
         chart: {
            type: 'line'
         },
         series: [{
            name: 'sales',
            data: [30,40,35,50,49,60,70,91,125]
         }],
         xaxis: {
            categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
         }
         }

         var chart = new ApexCharts(document.querySelector("#chartone"), minichartOne);

         chart.render();
         //chart two
         var minicharttwo = {
         chart: {
            type: 'line'
         },
         series: [{
            name: 'sales',
            data: [30,40,35,50,49,60,70,91,125]
         }],
         xaxis: {
            categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
         }
         }

         var minichartTwo = new ApexCharts(document.querySelector("#charttwo"), minicharttwo);

         minichartTwo.render();
         //chart three
         var minichartthree = {
         chart: {
            type: 'line'
         },
         series: [{
            name: 'sales',
            data: [30,40,35,50,49,60,70,91,125]
         }],
         xaxis: {
            categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
         }
         }

         var minichartThree = new ApexCharts(document.querySelector("#chart-three"), minichartthree);

         minichartThree.render();
         //chart FOUR
         var minichartFour = {
         chart: {
            type: 'line'
         },
         series: [{
            name: 'sales',
            data: [30,40,35,50,49,60,70,91,125]
         }],
         xaxis: {
            categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
         }
         }

         var minichartfour = new ApexCharts(document.querySelector("#chart-four"), minichartFour);

         minichartfour.render();
         //PRODUCTIVITY CHART
         var productivityChart = {
         chart: {
            type: 'bar',
            height: 450,
         },
         series: [{
            name: 'sales',
            data: [20,91,30,40,70,35,50,49,60]
         }],
         xaxis: {
            categories: ['facebook','twitter','youtube','vscode','bracket','google','email', 'fiverr','upwork']
         }
         }

         var productivitychart = new ApexCharts(document.querySelector("#productivity-chart"),productivityChart);

         productivitychart.render();
         //daily click 
         var optionDonut = {
            chart: {
                  type: 'donut',
                  width: '100%',
                  height: 400
            },
            dataLabels: {
               enabled: false,
            },
            plotOptions: {
               pie: {
                  customScale: 0.8,
                  donut: {
                  size: '75%',
                  },
                  offsetY: 20,
               },
               stroke: {
                  colors: undefined
               }
            },
            
            title: {
               text: 'TOP 5 DAILY',
               style: {
                  fontSize: '18px'
               }
            },
            series: [21, 23, 19, 14, 6],
            labels: ['facebook.com', 'vs code', 'google', 'w3school.com', 'youtube.com'],
            legend: {
               position: 'left',
               offsetY: 80
            }
      }
      var donut = new ApexCharts( document.querySelector("#donut"), optionDonut)
      donut.render();

    
      
         
    },
  
    methods: {
     
    },
    components:{
      
    }
};
</script>

<style >

</style>