<template>
    <div class="my-4">
      <TopFilter/>
     </div>
     <!--user---->
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
              <i class="fa-regular fa-pen-to-square me-2"></i>
              Edit User
              </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              
              <form action="" method="" class="mx-auto">
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
    <!---Group section <start--->
      <div class="group-wrapper">
      <h6 class="project-title py-3">Groups</h6>
      <div class="row">
         <div class="col-lg-6">
            <div class="group-left group-bg rounded-2 h-100 p-4 ">
               <div class="group-left-title d-flex gap-2">
                  <strong>ACTIVE GROUPS</strong>
                   <p class="ms-2">ARCHIVED GROUPS</p>
               </div>
               <div class="team-btn py-4">
                  <a href="#" class="primary-btn px-3 py-2" data-bs-toggle="modal" data-bs-target="#addMember">
                     <i class="fa-regular fa-user pe-2"></i>Add Team
                     </a>
               </div>
               <div class="modal fade" id="addMember" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog  modal-dialog-centered modal-lg">
                  <div class="modal-content ms-5">
                     <div class="modal-header report-header">
                     <h1 class="modal-title fs-5" id="exampleModalLabel">Create a new Team</h1>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                         <div class="meeting-edit-form">
                            <form action="" method="">
                              <div class="mb-3">
                                <input type="text" class="form-control" placeholder="team name" name="" />
                              </div>
                              <div class="mb-3">
                                <input type="email" class="form-control" placeholder="email" name="" />
                              </div>
                              <div class="mb-3">
                                <input type="text" class="form-control" placeholder=" skype id" name="" />
                              </div>
                            </form>
                          </div>
                      </div>
                     <div class="modal-footer">
                     <button type="button" class="btn primary-bg report-close text-dark" data-bs-dismiss="modal">Close</button>
                     <button type="button" class="btn primary-btn">Create</button>
                    </div>
                  </div>
               </div>
            </div>
               <form action="" method="">
                  <input type="search" class="form-control w-50" placeholder="search groups"/>
               </form>
               <div class="primary-bg py-4">
                  <a href="#" class="primary-bg px-3 py-2">
                     <i class="fa-regular fa-user pe-2"></i>All Regular Users
                     </a>
               </div>
            </div>
         </div>
         <div class="col-lg-6">
            <div class="group-right group-bg rounded-3 h-100 p-3 py-5">
              <div class="group-right-title d-flex justify-content-between py-3">
                 <strong>Users</strong>
                 <div class="form-check form-switch">
                     <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                     <label class="form-check-label" for="flexSwitchCheckChecked">Show only users in group</label>
                  </div>
              </div>
              <form action="" method="">
                <input type="search" class="form-control w-50" placeholder="Search by name, email or ID"/>
              </form>
              <h6 class="pt-3">Team managers</h6>
              <p class="py-2">Select which managers have access to view work data of the group members in this group. Admins are not listed here because they have access to all groups and users.</p>
              <h6 class="py-2">Team managers</h6>
              <span>No members</span>
          </div>
         </div>
      </div>
      <div class="row py-5">
         <table class="table table-bordered">
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Skype</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>sajib</td>
                  <td>sajib@gmail.com</td>
                  <td>sajib.167</td>
               </tr>
          </tbody>            
         </table>
      </div>
     </div>
     <!--invite section <start-->
     
            <div class="row">
              <div class="col-lg-8">
                 <h6 class="project-title py-4">INVITE BY EMAIL</h6>
                <textarea class="form-control invite-area" id="exampleFormControlTextarea1" rows="8" placeholder="Type or paste email address here"></textarea>
                <p class="py-3">To invite multiple people separate the emails by comma, space or new line</p>
              </div>
              <div class="col-lg-4">
                <h6 class="project-title py-4">ADD BY CSV</h6>
              <div class="drop-zone">
              <span class="drop-zone__prompt">Upload my CSV file</span>
              <input type="file" name="myFile" class="drop-zone__input">
            </div>
             <a href="#" class="py-3">Download CSV Tenplate</a>
           </div>
          </div>
          <div class="row">
            <div class="col-lg-2">
              <div class="invite-access rounded-3 primary-bg h-100 px-4 py-2">
                <p class="project-title py-4">Access level</p>
                <form action="" method="">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                    <label class="form-check-label" for="flexRadioDefault1">
                      Regular User
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
                    <label class="form-check-label" for="flexRadioDefault2">
                      Manager
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
                    <label class="form-check-label" for="flexRadioDefault2">
                      Admin
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                      Client
                    </label>
                  </div>
                </form>
                
              </div>
          </div>
            <div class="col-lg-5">
              <div class="invite-access rounded-3 primary-bg h-100 px-4 py-2">
                <p class="project-title py-4">Group the’re members of</p>
                <form action="" method="">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked>
                    <label class="form-check-label" for="defaultCheck1">
                      All Regular User
                    </label>
                  </div>
                  <p class="py-3">Projects they can track time to</p>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" checked >
                    <label class="form-check-label" for="defaultCheck2">
                      General Work
                    </label>
                  </div>
                </form>
                
              </div>
            </div>
            <div class="col-lg-5">
              <div class="invite-access rounded-3 primary-bg h-100 px-4 py-2">
                <p class="project-title py-4">Additional settings</p>
                <form action="" method="">
                  <label>Screencasts</label>
                  <select class="form-control text-dark">
                    <option>Off</option>
                    <option>On</option>
                   
                  </select>
                  <label class="py-3">Can edit time</label>
                  <select class="form-control text-dark">
                    <option>Yes</option>
                    <option>No</option>
                    
                  </select>
                </form>
                
              </div>
            </div>
          </div>
          <div class=" text-center">
            <a href="" class="primary-btn my-5 px-3 py-2">SEND INVITES</a>
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