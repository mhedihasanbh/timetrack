<template>
    <div class="my-4">
      <TopFilter/>
     </div>
             <div class="setting-user-area bg-white p-3">
              <div class="project-top d-flex justify-content-between  py-3">
                 <h6 class="project-title">Users</h6>
                  <div>
                      <form action="" method="" class="user-filerForm d-flex gap-2 align-items-center">
                        <div>
                            <select id="selectbox3" class="form-control user-filterBtn decorated"  >
                            <option selected>All Users Selected</option>
                            <option value="1">sajib</option>
                            <option value="2">rakib</option>
                    
                        </select>
                        </div>
                        <div>
                            <select id="selectbox4" class="form-control user-filterBtn">
                            <option value="1" selected>All Access Levels Selected</option>
                            <option value="2">2.18</option>
                        </select>
                        </div>
                        <div>
                            <select id="selectbox4" class="form-control user-filterBtn">
                            <option value="1" selected>Active Users</option>
                            <option value="2">2.18</option>
                        </select>
                        </div>
                        
                   </form>
                  </div>
                </div>
               
                <div class="add-user-arera d-flex justify-content-between align-items-center my-3">
                  <div class="add-user-btn">
                    <a href="#" class="primary-bg py-2 px-4" data-bs-toggle="modal" data-bs-target="#userSetting">
                     <span><i class="fa-regular fa-user me-2"></i></span> Add Users
                  </a>
                 </div>
                 <!---modal--->
                <div class="modal fade" id="userSetting" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog  modal-dialog-centered modal-xl">
                  <div class="modal-content ms-5">
                     <div class="modal-header report-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <i class="fa-regular fa-user"></i>
                        Add User
                        </h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                        <form action="" method="" >
                         
                            <div class="mb-3">
                                <input type="text" class="form-control filter-by-week" placeholder="user name"/>
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control filter-by-week" placeholder="user email"/>
                            </div>
                            <div class="mb-3">
                                <input type="number" class="form-control filter-by-week" placeholder="user phone"/>
                            </div>
                            <div class="project-createBtns d-flex justify-content-end gap-2">
                              <div class="project-cancel project-bg">
                                 <a href="#" class="py-2 px-5">Cancel</a>
                              </div>
                              <div class="create-btn primary-btn">
                                 <a href="#" class="text-white py-2 px-5">Add</a>
                              </div>
                              
                            </div>
                         </form>

                      </div>
                     <div class="modal-footer">
                     <button type="button" class="btn report-close" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
               </div>
            </div>
                <form>
                    <div class="mb-3">
                  <input type="search" class="form-control filter-by-week" id="exampleInputEmail1" placeholder="Search by name, email ">
               </div>
                </form>
               </div>
               <div class="setting-user-table primary-bg">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Delete Screencasts</th>
                        <th scope="col">Blur Screenshots</th>
                        <th scope="col">Time Out After</th>
                        <th scope="col">Level</th>
                        <th scope="col">Time Zone</th>
                        <th scope="col">Show In Reports</th>
                        <th scope="col">Data Added</th>
                        <th scope="col">Action</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                     
                        <td>
                            <div class="form-check form-switch details-info my-3">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                            </div>
                        </td>
                        <td>
                            <div class="w-75">
                                <select id="selectbox4" class="form-control text-dark">
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                             </select>
                            </div>
                           
                        </td>
                        <td>
                            <div class="w-75">
                                <select id="selectbox4" class="form-control text-dark">
                                <option value="1">10 min</option>
                                <option value="2">20 min</option>
                             </select>
                            </div>
                        </td>
                        <td>
                            Owner
                        </td>
                        <td>
                            (UTC -08:00) Los ...
                        </td>
                        <td>
                            <div class="form-check form-switch details-info my-3">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                            </div>
                        </td>
                        <td>
                            Jan 9, 2023
                        </td>
                        <td>
                          <a href="#" data-bs-toggle="modal" data-bs-target="#userEditmodal">
                            <span><i class="fa-regular fa-pen-to-square"></i></span>
                          </a>
                            <!-- Modal -->
             <div class="modal fade" id="userEditmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog  modal-dialog-centered modal-xl">
                  <div class="modal-content ms-5">
                     <div class="modal-header report-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <i class="fa-regular fa-circle-user me-2"></i>
                        See by Users
                        </h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                        
                       <form action="" method="">
                        <div class="mb-3">
                            <label>Delete Screencasts</label>
                        <div class="form-check form-switch details-info my-3">
                         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                        </div>
                        </div>
                       
                        <div class="w-75 mb-3">
                              <label>Blur Screencasts</label>
                                <select id="selectbox4" class="form-control text-dark w-50">
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                             </select>
                            </div>
                            <div class="w-75  mb-3">
                              <label>Time Out After</label>
                                <select id="selectbox4" class="form-control text-dark w-50">
                                <option value="1">10 min</option>
                                <option value="2">20 min</option>
                             </select>
                            </div>
                            <div class="w-50  mb-3">
                              <label>Label</label>
                              <input type="text" class="form-control w-75" value="owner"/>
                           
                            </div>
                            <div class="w-50  mb-3">
                              <label>Time Zone</label>
                              <input type="text" class="form-control w-75" value="(UTC -08:00) Los"/>
                           
                            </div>
                            <div class="mb-3">
                            <label>Delete Screencasts</label>
                            <div class="form-check form-switch details-info my-3">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                            </div>
                        </div>
                        <div class="w-50  mb-3">
                              <label>Date added</label>
                              <input type="date" class="form-control w-75" />
                           
                            </div>
                       </form>
                      
                      </div>
                     <div class="modal-footer">
                      <button type="button" class="primary-bg px-3 py-2 border-none" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="primary-btn px-3 py-2">Update</button>
                    </div>
                  </div>
               </div>
            </div>
                        </td>
                        
                        </tr>
                        
                    </tbody>
                    </table>
               </div>
              </div>
             
              
</template>

<script>
import TopFilter from '../components/includes/TopFilter.vue';
export default {
    name: 'workScdule',
    components:{TopFilter},

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