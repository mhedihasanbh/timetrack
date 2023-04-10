<template>
   <TopFilter/>
   <div class="meeting-areas d-flex justify-content-center align-items-center h-100 flex-column py-5">
    <div class="meeting pt-5">
      <div class="meeting-icon text-center pt-5">
        <i class="fas fa-handshake"></i>
      </div>
      <h3>Create your  meeting</h3>
      <div class="meeting-add  text-center">
        <a href="#" data-bs-toggle="modal" data-bs-target="#addMeetingModal">
          <i class="fas fa-plus"></i>
          </a>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="addMeetingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg">
                     <div class="modal-content">
                        <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa-solid fa-handshake me-2"></i>Add Meeting</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="meeting-add-form">
                            <form action="" method="">
                              <div class="mb-3">
                                <label>Meeting Tittle</label>
                                <input type="text" class="form-control" placeholder="add meeting tittle" name="" />
                              </div>
                              
                              <div class="row g-3 mb-3">
                              <div class="col">
                                <label>Meeting Date</label>
                                <input type="date" class="form-control" placeholder="add meeting tittle" name="" />
                              </div>
                              <div class="col">
                                <label>Start Time</label>
                                <input type="time" class="form-control"/>
                              </div>
                            </div>
                              <div class="row g-3 mb-3">
                              <div class="col">
                                <label>Task (Optional)</label>
                                <input type="text" class="form-control" placeholder="" name="" />
                              </div>
                              <div class="col">
                                <label>Duration(Hrs/mins)</label>
                                <div class="d-flx gap-2">
                                  <select id="selectbox1" class="w-50 text-dark">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    
                                </select>
                                <select id="selectbox2" class="w-50 text-dark">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    
                                </select>
                                </div>
                                
                              </div>
                            </div>
                            <div class="mb-3">
                                <label>Participant(optional)</label>
                                <input type="text" class="form-control" placeholder="" name="" />
                              </div>
                            </form>
                          </div>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="primary-bg px-3 py-2 border-none" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="primary-btn px-3 py-2">Create Meeting</button>
                        </div>
                     </div>
                  </div>
                  </div>
    </div>
   </div>
  
  <table class="table table-sm">
  <thead>
    <tr>
      <th>Project Name</th>
          <th>Meeting ID</th>
          <th>Status</th>
          <th>Task</th>
          <th>Date</th>
          <th>Time</th>
          <th class="text-center">Action</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td data-bs-toggle="modal" data-bs-target="#addTimeModal">communication project</td>
          <td>000008</td>
          <td data-bs-toggle="modal" data-bs-target="#addTimeModal">
            <a href="#">upcoming</a>
          </td>
          <td>test project</td>
          <td>March 30, 2023</td>
          <td>12.00 AM</td>
          <td class="text-center">
            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical"></i>
              <ul class="dropdown-menu action-dropdown p-0 pb-3 action-multiList">
                <li><a href="#"> <i class="fa-regular fa-clipboard me-2"></i>Copy</a></li>
                <li><a href="#"> <i class="fa-solid fa-trash-can me-2"></i>Delete</a></li>
              </ul>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="modal fade" id="addTimeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header remove-timeHeader d-flex justify-content-between">
              <h1 class="modal-title fs-5" id="exampleModalLabel">communication project</h1>
               <i class="fas fa-times fa-lg remove-closeBtn" data-bs-dismiss="modal" aria-label="Close"></i>
              </div>
              <div class="modal-body">
                 <div class="row">
                  <div class="col-lg-7">
                    <form action="" method="">
                              <div class="mb-3">
                                <label>Meeting Agenda</label>
                                 <textarea class="form-control"></textarea>
                              </div>
                              <div class="mb-3">
                                <label>Decession Note</label>
                                 <textarea class="form-control"></textarea>
                              </div>
                              <div class="mb-3">
                                <label>Key Decession</label>
                                 <textarea class="form-control"></textarea>
                              </div>
                        </form>
                  </div>
                  <div class="col-lg-5">
                    <div class="meeting-edit-form">
                            <form action="" method="">
                              <div class="mb-3">
                                <label>Meeting Tittle</label>
                                <input type="text" class="form-control" placeholder="add meeting tittle" name="" />
                              </div>
                              
                              <div class="row g-3 mb-3">
                              <div class="col">
                                <label>Meeting Date</label>
                                <input type="date" class="form-control" placeholder="add meeting tittle" name="" />
                              </div>
                              <div class="col">
                                <label>Start Time</label>
                                <input type="time" class="form-control"/>
                              </div>
                            </div>
                              <div class="row g-3 mb-3">
                              <div class="col">
                                <label>Task (Optional)</label>
                                <input type="text" class="form-control" placeholder="" name="" />
                              </div>
                              <div class="col">
                                <label>Duration(Hrs/mins)</label>
                                <div class="d-flx gap-2 text-dark">
                                  <select id="selectbox1 text-dark" class="w-50 meeting-duration">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    
                                </select>
                                <select id="selectbox2 " class="text-dark w-50">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    
                                </select>
                                </div>
                                
                              </div>
                            </div>
                            <div class="mb-3">
                                <label>Participant(optional)</label>
                                <input type="text" class="form-control" placeholder="" name="" />
                              </div>
                              <div class="meeting-topBtns d-flex gap-2 text-end">
                              <a href="#" class="meeting-review-btn px-4 py-2">Submit For Review</a>
                              <a href="#" class="primary-btn px-4 py-2">Publish</a>
                            </div>
                            </form>
                          </div>
                  </div>
                 </div>
                   
                  </div>
              </div>
        </div>
    </div>
         
</template>

<script>
import TopFilter from '../components/includes/TopFilter.vue';
export default {
    name: 'TimetrackdashboardMeeting',
    components:{TopFilter},

    data() {
        return {
          toggle:false
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