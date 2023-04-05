<template>
    <div>
     <TopFilter/>
    </div>
        
             <div class="row">
              <div class="col-lg-8">
                 <h5 class="project-title py-4">INVITE BY EMAIL</h5>
                <textarea class="form-control invite-area" id="exampleFormControlTextarea1" rows="8" placeholder="Type or paste email address here"></textarea>
                <p class="py-3">To invite multiple people separate the emails by comma, space or new line</p>
              </div>
              <div class="col-lg-4">
                <h5 class="project-title py-4">ADD BY CSV</h5>
              <div class="drop-zone">
              <span class="drop-zone__prompt">Upload my CSV file</span>
              <input type="file" name="myFile" class="drop-zone__input">
            </div>
             <a href="" class="py-3">Download CSV Tenplate</a>
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
                  <select class="form-control">
                    <option>Off</option>
                    <option>item 2</option>
                    <option>item 3</option>
                    <option>item 4</option>
                    <option>item 5</option>
                  </select>
                  <label class="py-3">Can edit time</label>
                  <select class="form-control">
                    <option>Yes</option>
                    <option>item 2</option>
                    <option>item 3</option>
                    <option>item 4</option>
                    <option>item 5</option>
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
    name: 'TimeInvite',
    components:{
      TopFilter
    },

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

<style>

</style>