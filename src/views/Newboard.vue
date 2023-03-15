<template>
    <div class="project-top d-flex justify-content-between ">
   <div class="board-title">
      <h2 class="board">Board</h2>
    </div>
   <div class="top-item-area d-flex gap-5 bg-white rounded p-2 px-3">
      <div class="top-item">
         <a href="">
         <img src="assets/images/filter.png"/>
         <span class="ms-2">Filter</span>
         </a>
      </div>
      <div class="top-item">
         <a href="">
         <img src="assets/images/groupStatus.png"/>
         <span class="ms-2">Group by: Status</span>
         </a>
      </div>
      <div class="top-item">
         <a href="">
         <img src="assets/images/show.png"/>
         <span class="ms-2">Show</span>
         </a>
      </div>
      <div class="top-item">
         <a id="threeDots">
         <i class="fa-solid fa-ellipsis-vertical fa-2x"></i>
         </a>
      </div>
   </div>
</div>
<!---three dots details start--->
<div class="threeDots-area bg-white rounded-3 p-3 my-4 ">
   <div class="view-box-title d-flex justify-content-between py-4">
      <a href="" class="view-settings">VIEW SETTINGS</a>
      <a href="" class="view-defaults">View defaults</a>
   </div>
   <div class="view-box d-flex justify-content-between py-3">
      <div class="box-icon d-flex gap-3">
         <div>
            <img src="assets/images/autosave.png"/>
         </div>
         <p>Autosave view</p>
      </div>
      <div class="form-check form-switch">
         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
      </div>
   </div>
   <div class="view-box d-flex justify-content-between py-3">
      <div class="box-icon d-flex gap-3">
         <div>
            <img src="assets/images/protect.png"/>
         </div>
         <p>Protect view</p>
      </div>
      <div class="form-check form-switch">
         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
      </div>
   </div>
   <div class="view-box d-flex justify-content-between py-3">
      <div class="box-icon d-flex gap-3">
         <div>
            <img src="assets/images/private.png"/>
         </div>
         <p>Private view</p>
      </div>
      <div class="form-check form-switch">
         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
      </div>
   </div>
   <div class="view-box d-flex justify-content-between py-3">
      <div class="box-icon d-flex gap-3">
         <div>
            <img src="assets/images/default.png"/>
         </div>
         <p>Default for everyone</p>
      </div>
      <div class="form-check form-switch">
         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
      </div>
   </div>
   <div class="view-box d-flex justify-content-between py-3">
      <div class="box-icon d-flex gap-3">
         <div>
            <img src="assets/images/reset.png"/>
         </div>
         <p>Reset view to defaults</p>
      </div>
      <div class="form-check form-switch">
         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
      </div>
   </div>
</div>
<!-----three dots details end---->
<div class="row py-5">
  <div class="col-lg-3">
    <div class="boardBox-wrapper h-100 px-3 py-2" id="box1" >
      <div class="board-title">
        <h6>Not Started</h6>
      </div>
      <div class="board-task my-3">
        <!-- Button trigger modal -->
        <a href="#" class="px-2 py-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add New Task
        </a>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Time Track</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                      <div class="time-track-left bg-white rounded-3 p-5">
                         <div class="track-icon-wrapper space-between gap-3 px-4 py-4">
                            <div class="track-left-area d-flex align-items-center gap-3">
                                <p class="bg-white px-3 py-2 rounded">TO DO</p>
                                <div class="track-dropdown bg-white px-3 py-2 rounded">
                                  <a href=""><i class="fa-solid fa-caret-down"></i></a>
                                </div>
                                <div class="time-check">
                                  <a href=""><i class="fa-solid fa-check"></i></a>
                                </div>
                                <div class="track-user">
                                  <a href=""><i class="fa-solid fa-users"></i></a>
                                </div>
                                <div class="time-priority">
                                  <a href=""><i class="fa-regular fa-flag"></i></a>
                                </div>
                            </div>

                            <div class="track-right-area">
                              <div class="track-share-area">
                               <a href="" class="track-share text-dark rounded px-3 py-2">
                                 <i class="fa-solid fa-share-nodes me-2"></i>Share
                               </a>
                               <a href="" class="track-share-show">
                                 <i class="fa-solid fa-ellipsis-vertical"></i>
                               </a>
                              </div>
                            </div>
                         </div>
                          <div class="task-description py-4">
                            |<form action=""  method="">
                              <textarea>Description or type / for commadnds</textarea>
                              <div class="description-icon-area d-flex justify-content-end gap-4">
                                <a href="">
                                  <i class="fa-solid fa-print"></i>
                                </a>
                                <a href="">
                                  <i class="fa-solid fa-arrows-rotate"></i>
                                </a>
                               <a href="">
                                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                               </a>
                                
                              </div>
                            </form>

                          </div>
                       </div>
                       <div class="todo-task-add my-3 bg-white p-4">
                        <form action="" method="">
                          <div class="todo-field px-3 py-2 rounded-3 space-between">
                            <div class=" d-flex align-items-center gap-4">
                              <h5 class="m-0">TO DO</h5>
                               <div class="dropdown">
                                  <label class="fw-bold">Add File</label>
                                 <input type="file" id="images" accept="image/*" required>
                               </div>
                             </div>
                            <div> <p class="text-end">Mine</p></div>
                          </div>
                          <div class="d-flex align-items-center pt-4 gap-3">
                            <h6>SUBTASKS</h6>
                            <h6>Manual</h6>
                          </div>
                          <div class="todo-field rounded-3 px-3 py-2 space-between ">
                            <div class=" d-flex align-items-center gap-2">
                              <div class="subtrack-icon"></div>
                              <p>New Subtask</p>
                             </div>
                           
                          </div>
                          <div class="pt-3">
                            <h6>+ ADD CHECKLIST</h6>
                          </div>
                          <div class="todo-field rounded-3 px-3  item-center my-3">
                            <a href="" class="text-center d-block bg-dark py-2 px-3">
                              + ADD RELATIONSHIP
                            </a>
                          </div>
                          <div class="d-flex align-items-center gap-3">
                            <h6 class="m-0">Attachments</h6>
                            <div class="dropdown">
                               <label class="fw-bold">Add File</label>
                              <input type="file" id="images" accept="image/*" required>
                            </div>
                          </div>

                        </form>
                       </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="time-track-left bg-white rounded-3 p-5 h-100">
                        <div class="track-icon-wrapper space-between gap-5 px-4 py-4">
                           <div class="track-left-area d-flex align-items-center gap-5">
                                <div>
                                  <p>Created</p>
                                  <p>Jan 19, 2:08 pm</p>
                                </div>
                               
                               <div class="time-pause">
                                <p>Time Tracked</p>
                                <a href="">
                                  <i class="fa-regular fa-circle-pause me-3"></i>0:00:00
                                </a>
                               </div>
                               <div class="time-priority">
                                 <a href="">
                                  <i class="fa-regular fa-calendar-check"></i>
                                </a>
                               </div>
                           </div>
                          </div>
                         <div class="task-description py-4">
                           <form action=""  method="">
                             <textarea>You created this task by copying</textarea>
                            </form>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="box-One" class="sortable-list" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div class="item bg-white px-2 py-2 rounded-2 my-2" id="drag2" draggable="true" ondragstart="drag(event)">
          <div class="board-details">
            <p>outreach plan Process design and blogging test</p>
          </div>
        
      </div>
      <div class="item bg-white px-2 py-2 mb-4 rounded-2 my-2" id="drag3" draggable="true" ondragstart="drag(event)">
       <div class="board-details">
        <p>Create Brand Assistance for launch</p>
        <form action="" method="" class="py-2">
          <input type="date" class="border-none"/>
        </form>
        <div class="user-image d-flex justify-content-end ">
          <img src="assets/images/user.jpg" width="20" height="20" rounded-circle/>
          <img src="assets/images/user.jpg" width="20" height="20"/>
        </div>
       </div>
        
      </div>
      <div class="item bg-white px-2 py-2 rounded-2 my-2" id="drag4" draggable="true" ondragstart="drag(event)">
        <div class="board-details">
          <p>Product Branding</p>
        </div>
       
      </div>
      <div class="item bg-white px-2 py-2 rounded-2 my-2" id="drag5" draggable="true" ondragstart="drag(event)">
        <div class="board-details">
          <p>Product Video</p>
        </div>
      </div>
      </div>
      
    </div>
  </div>
  <div class="col-lg-3">
    <div class="boardBox-wrapper h-100 px-3 py-2" id="box1" >
      <div class="board-title">
        <h6>In Review</h6>
      </div>
      <div class="board-task my-3">
        <!-- Button trigger modal -->
        <a href="#" class="px-2 py-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add New Task
        </a>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Time Track</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                      <div class="time-track-left bg-white rounded-3 p-5">
                         <div class="track-icon-wrapper space-between gap-3 px-4 py-4">
                            <div class="track-left-area d-flex align-items-center gap-3">
                                <p class="bg-white px-3 py-2 rounded">TO DO</p>
                                <div class="track-dropdown bg-white px-3 py-2 rounded">
                                  <a href=""><i class="fa-solid fa-caret-down"></i></a>
                                </div>
                                <div class="time-check">
                                  <a href=""><i class="fa-solid fa-check"></i></a>
                                </div>
                                <div class="track-user">
                                  <a href=""><i class="fa-solid fa-users"></i></a>
                                </div>
                                <div class="time-priority">
                                  <a href=""><i class="fa-regular fa-flag"></i></a>
                                </div>
                            </div>

                            <div class="track-right-area">
                              <div class="track-share-area">
                               <a href="" class="track-share text-dark rounded px-3 py-2">
                                 <i class="fa-solid fa-share-nodes me-2"></i>Share
                               </a>
                               <a href="" class="track-share-show">
                                 <i class="fa-solid fa-ellipsis-vertical"></i>
                               </a>
                              </div>
                            </div>
                         </div>
                          <div class="task-description py-4">
                            |<form action=""  method="">
                              <textarea>Description or type / for commadnds</textarea>
                              <div class="description-icon-area d-flex justify-content-end gap-4">
                                <a href="">
                                  <i class="fa-solid fa-print"></i>
                                </a>
                                <a href="">
                                  <i class="fa-solid fa-arrows-rotate"></i>
                                </a>
                               <a href="">
                                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                               </a>
                                
                              </div>
                            </form>

                          </div>
                       </div>
                       <div class="todo-task-add my-3 bg-white p-4">
                        <form action="" method="">
                          <div class="todo-field px-3 py-2 rounded-3 space-between">
                            <div class=" d-flex align-items-center gap-4">
                              <h5 class="m-0">TO DO</h5>
                               <div class="dropdown">
                                  <label class="fw-bold">Add File</label>
                                 <input type="file" id="images" accept="image/*" required>
                               </div>
                             </div>
                            <div> <p class="text-end">Mine</p></div>
                          </div>
                          <div class="d-flex align-items-center pt-4 gap-3">
                            <h6>SUBTASKS</h6>
                            <h6>Manual</h6>
                          </div>
                          <div class="todo-field rounded-3 px-3 py-2 space-between ">
                            <div class=" d-flex align-items-center gap-2">
                              <div class="subtrack-icon"></div>
                              <p>New Subtask</p>
                             </div>
                           
                          </div>
                          <div class="pt-3">
                            <h6>+ ADD CHECKLIST</h6>
                          </div>
                          <div class="todo-field rounded-3 px-3  item-center my-3">
                            <a href="" class="text-center d-block bg-dark py-2 px-3">
                              + ADD RELATIONSHIP
                            </a>
                          </div>
                          <div class="d-flex align-items-center gap-3">
                            <h6 class="m-0">Attachments</h6>
                            <div class="dropdown">
                               <label class="fw-bold">Add File</label>
                              <input type="file" id="images" accept="image/*" required>
                            </div>
                          </div>

                        </form>
                       </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="time-track-left bg-white rounded-3 p-5 h-100">
                        <div class="track-icon-wrapper space-between gap-5 px-4 py-4">
                           <div class="track-left-area d-flex align-items-center gap-5">
                                <div>
                                  <p>Created</p>
                                  <p>Jan 19, 2:08 pm</p>
                                </div>
                               
                               <div class="time-pause">
                                <p>Time Tracked</p>
                                <a href="">
                                  <i class="fa-regular fa-circle-pause me-3"></i>0:00:00
                                </a>
                               </div>
                               <div class="time-priority">
                                 <a href="">
                                  <i class="fa-regular fa-calendar-check"></i>
                                </a>
                               </div>
                           </div>
                          </div>
                         <div class="task-description py-4">
                           <form action=""  method="">
                             <textarea>You created this task by copying</textarea>
                            </form>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="box-three" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag9" draggable="true" ondragstart="drag(event)">
        <p>outreach plan Process design and blogging</p>
      </div>
      <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag10" draggable="true" ondragstart="drag(event)">
        <p>Create Brand Assistance for launch</p>
        <form action="" method="" class="py-2">
          <input type="date" class="border-none"/>
        </form>
        <div class="user-image d-flex justify-content-end">
          <img src="assets/images/user.jpg" width="20" height="20" rounded-circle/>
          <img src="assets/images/user.jpg" width="20" height="20"/>
        </div>
      </div>
      <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag11" draggable="true" ondragstart="drag(event)">
        <p>Product Branding</p>
      </div>
      <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag12" draggable="true" ondragstart="drag(event)">
        <p>Product Video</p>
      </div>
      </div>
      
    </div>
  </div>
 
  <div class="col-lg-3">
    <div class="boardBox-wrapper h-100 px-3 py-2" id="box1" >
      <div class="board-title">
        <h6>In Review</h6>
      </div>
      <div class="board-task my-3">
        <!-- Button trigger modal -->
        <a href="#" class="px-2 py-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add New Task
        </a>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Time Track</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                      <div class="time-track-left bg-white rounded-3 p-5">
                         <div class="track-icon-wrapper space-between gap-3 px-4 py-4">
                            <div class="track-left-area d-flex align-items-center gap-3">
                                <p class="bg-white px-3 py-2 rounded">TO DO</p>
                                <div class="track-dropdown bg-white px-3 py-2 rounded">
                                  <a href=""><i class="fa-solid fa-caret-down"></i></a>
                                </div>
                                <div class="time-check">
                                  <a href=""><i class="fa-solid fa-check"></i></a>
                                </div>
                                <div class="track-user">
                                  <a href=""><i class="fa-solid fa-users"></i></a>
                                </div>
                                <div class="time-priority">
                                  <a href=""><i class="fa-regular fa-flag"></i></a>
                                </div>
                            </div>

                            <div class="track-right-area">
                              <div class="track-share-area">
                               <a href="" class="track-share text-dark rounded px-3 py-2">
                                 <i class="fa-solid fa-share-nodes me-2"></i>Share
                               </a>
                               <a href="" class="track-share-show">
                                 <i class="fa-solid fa-ellipsis-vertical"></i>
                               </a>
                              </div>
                            </div>
                         </div>
                          <div class="task-description py-4">
                            |<form action=""  method="">
                              <textarea>Description or type / for commadnds</textarea>
                              <div class="description-icon-area d-flex justify-content-end gap-4">
                                <a href="">
                                  <i class="fa-solid fa-print"></i>
                                </a>
                                <a href="">
                                  <i class="fa-solid fa-arrows-rotate"></i>
                                </a>
                               <a href="">
                                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                               </a>
                                
                              </div>
                            </form>

                          </div>
                       </div>
                       <div class="todo-task-add my-3 bg-white p-4">
                        <form action="" method="">
                          <div class="todo-field px-3 py-2 rounded-3 space-between">
                            <div class=" d-flex align-items-center gap-4">
                              <h5 class="m-0">TO DO</h5>
                               <div class="dropdown">
                                  <label class="fw-bold">Add File</label>
                                 <input type="file" id="images" accept="image/*" required>
                               </div>
                             </div>
                            <div> <p class="text-end">Mine</p></div>
                          </div>
                          <div class="d-flex align-items-center pt-4 gap-3">
                            <h6>SUBTASKS</h6>
                            <h6>Manual</h6>
                          </div>
                          <div class="todo-field rounded-3 px-3 py-2 space-between ">
                            <div class=" d-flex align-items-center gap-2">
                              <div class="subtrack-icon"></div>
                              <p>New Subtask</p>
                             </div>
                           
                          </div>
                          <div class="pt-3">
                            <h6>+ ADD CHECKLIST</h6>
                          </div>
                          <div class="todo-field rounded-3 px-3  item-center my-3">
                            <a href="" class="text-center d-block bg-dark py-2 px-3">
                              + ADD RELATIONSHIP
                            </a>
                          </div>
                          <div class="d-flex align-items-center gap-3">
                            <h6 class="m-0">Attachments</h6>
                            <div class="dropdown">
                               <label class="fw-bold">Add File</label>
                              <input type="file" id="images" accept="image/*" required>
                            </div>
                          </div>

                        </form>
                       </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="time-track-left bg-white rounded-3 p-5 h-100">
                        <div class="track-icon-wrapper space-between gap-5 px-4 py-4">
                           <div class="track-left-area d-flex align-items-center gap-5">
                                <div>
                                  <p>Created</p>
                                  <p>Jan 19, 2:08 pm</p>
                                </div>
                               
                               <div class="time-pause">
                                <p>Time Tracked</p>
                                <a href="">
                                  <i class="fa-regular fa-circle-pause me-3"></i>0:00:00
                                </a>
                               </div>
                               <div class="time-priority">
                                 <a href="">
                                  <i class="fa-regular fa-calendar-check"></i>
                                </a>
                               </div>
                           </div>
                          </div>
                         <div class="task-description py-4">
                           <form action=""  method="">
                             <textarea>You created this task by copying</textarea>
                            </form>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="box-three" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag9" draggable="true" ondragstart="drag(event)">
        <p>outreach plan Process design and blogging</p>
      </div>
      <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag10" draggable="true" ondragstart="drag(event)">
        <p>Create Brand Assistance for launch</p>
        <form action="" method="" class="py-2">
          <input type="date" class="border-none"/>
        </form>
        <div class="user-image d-flex justify-content-end">
          <img src="assets/images/user.jpg" width="20" height="20" rounded-circle/>
          <img src="assets/images/user.jpg" width="20" height="20"/>
        </div>
      </div>
      <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag11" draggable="true" ondragstart="drag(event)">
        <p>Product Branding</p>
      </div>
      <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag12" draggable="true" ondragstart="drag(event)">
        <p>Product Video</p>
      </div>
      </div>
      
    </div>
  </div>
  <div class="col-lg-3">
    <div class="boardBox-wrapper h-100 px-3 py-2" id="box1" >
      <div class="board-title">
        <h6>Complete</h6>
      </div>
      <div class="board-task my-3">
        <!-- Button trigger modal -->
        <a href="#" class="px-2 py-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add New Task
        </a>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Time Track</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                      <div class="time-track-left bg-white rounded-3 p-5">
                         <div class="track-icon-wrapper space-between gap-3 px-4 py-4">
                            <div class="track-left-area d-flex align-items-center gap-3">
                                <p class="bg-white px-3 py-2 rounded">TO DO</p>
                                <div class="track-dropdown bg-white px-3 py-2 rounded">
                                  <a href=""><i class="fa-solid fa-caret-down"></i></a>
                                </div>
                                <div class="time-check">
                                  <a href=""><i class="fa-solid fa-check"></i></a>
                                </div>
                                <div class="track-user">
                                  <a href=""><i class="fa-solid fa-users"></i></a>
                                </div>
                                <div class="time-priority">
                                  <a href=""><i class="fa-regular fa-flag"></i></a>
                                </div>
                            </div>

                            <div class="track-right-area">
                              <div class="track-share-area">
                               <a href="" class="track-share text-dark rounded px-3 py-2">
                                 <i class="fa-solid fa-share-nodes me-2"></i>Share
                               </a>
                               <a href="" class="track-share-show">
                                 <i class="fa-solid fa-ellipsis-vertical"></i>
                               </a>
                              </div>
                            </div>
                         </div>
                          <div class="task-description py-4">
                            |<form action=""  method="">
                              <textarea>Description or type / for commadnds</textarea>
                              <div class="description-icon-area d-flex justify-content-end gap-4">
                                <a href="">
                                  <i class="fa-solid fa-print"></i>
                                </a>
                                <a href="">
                                  <i class="fa-solid fa-arrows-rotate"></i>
                                </a>
                               <a href="">
                                <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                               </a>
                                
                              </div>
                            </form>

                          </div>
                       </div>
                       <div class="todo-task-add my-3 bg-white p-4">
                        <form action="" method="">
                          <div class="todo-field px-3 py-2 rounded-3 space-between">
                            <div class=" d-flex align-items-center gap-4">
                              <h5 class="m-0">TO DO</h5>
                               <div class="dropdown">
                                  <label class="fw-bold">Add File</label>
                                 <input type="file" id="images" accept="image/*" required>
                               </div>
                             </div>
                            <div> <p class="text-end">Mine</p></div>
                          </div>
                          <div class="d-flex align-items-center pt-4 gap-3">
                            <h6>SUBTASKS</h6>
                            <h6>Manual</h6>
                          </div>
                          <div class="todo-field rounded-3 px-3 py-2 space-between ">
                            <div class=" d-flex align-items-center gap-2">
                              <div class="subtrack-icon"></div>
                              <p>New Subtask</p>
                             </div>
                           
                          </div>
                          <div class="pt-3">
                            <h6>+ ADD CHECKLIST</h6>
                          </div>
                          <div class="todo-field rounded-3 px-3  item-center my-3">
                            <a href="" class="text-center d-block bg-dark py-2 px-3">
                              + ADD RELATIONSHIP
                            </a>
                          </div>
                          <div class="d-flex align-items-center gap-3">
                            <h6 class="m-0">Attachments</h6>
                            <div class="dropdown">
                               <label class="fw-bold">Add File</label>
                              <input type="file" id="images" accept="image/*" required>
                            </div>
                          </div>

                        </form>
                       </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="time-track-left bg-white rounded-3 p-5 h-100">
                        <div class="track-icon-wrapper space-between gap-5 px-4 py-4">
                           <div class="track-left-area d-flex align-items-center gap-5">
                                <div>
                                  <p>Created</p>
                                  <p>Jan 19, 2:08 pm</p>
                                </div>
                               
                               <div class="time-pause">
                                <p>Time Tracked</p>
                                <a href="">
                                  <i class="fa-regular fa-circle-pause me-3"></i>0:00:00
                                </a>
                               </div>
                               <div class="time-priority">
                                 <a href="">
                                  <i class="fa-regular fa-calendar-check"></i>
                                </a>
                               </div>
                           </div>
                          </div>
                         <div class="task-description py-4">
                           <form action=""  method="">
                             <textarea>You created this task by copying</textarea>
                            </form>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="box-four" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag13" draggable="true" ondragstart="drag(event)">
        <p>outreach plan Process design and blogging</p>
      </div>
      <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag14" draggable="true" ondragstart="drag(event)">
        <p>Create Brand Assistance for launch</p>
        <form action="" method="" class="py-2">
          <input type="date" class="border-none"/>
        </form>
        <div class="user-image d-flex justify-content-end">
          <img src="assets/images/user.jpg" width="20" height="20" rounded-circle/>
          <img src="assets/images/user.jpg" width="20" height="20"/>
        </div>
      </div>
      <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag15" draggable="true" ondragstart="drag(event)">
        <p>Product Branding</p>
      </div>
      <div class="board-box bg-white px-2 py-2 rounded-2 my-2" id="drag16" draggable="true" ondragstart="drag(event)">
        <p>Product Video</p>
      </div>
      </div>
      
    </div>
  </div>

  



</div>


</template>

<script>
export default {
    name: 'TimetrackdashboardNewboard',

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