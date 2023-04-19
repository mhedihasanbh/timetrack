<template>
   <div class="profile-loader"  v-if="loader">
     <Loader/>
  </div>
  <div v-if="!loader">
   <div class="my-2">
      <TopFilter/>
   </div>
   <div class="row my-4">
            <div class="col-lg-4 ">
               <div class="compnay-details-left bg-white rounded-3 px-4 py-5 h-100">
                  <ul>
                     <li>Company details</li>
                     <li>Configuration</li>
                     <li>Permissions</li>
                     <li> <router-link to="/billing">Billing</router-link></li>
                     <li>Permissions</li>
                     <li>Web & app privacy</li>
                     <li>Work-life balance metrics</li>
                     <li>Single Sign On (SSO)</li>
                  </ul>
                 
               </div>
            </div>
            <div class="col-lg-8 ">
               <div class="compnay-details-right primary-bg rounded-3 px-4 py-5 h-100">
                
                  <form action="" method="" class="">
                     <div class="details-form my-3 p-3">
                        <label>Integrations’ status</label>
                        <select class="form-control w-100">
                           <option>Off</option>
                           <option>on</option>
                           
                        </select>
                     </div>
                     <div class="details-form my-3 p-3">
                        <small>Owner</small>
                        <select class="form-control border-0">
                           <option>Ashikur Rahim</option>
                           <option>sajib</option>
                           <option>yasin</option>
                           
                        </select>
                     </div>
                     <div class="details-form my-3 p-3">
                        <small>Time Zone</small>
                        <select class="form-control border-0">
                           <option>(UTC -08:00) Los  Angeles,America</option>
                           <option>8.00</option>
                           <option>9.00</option>
                          
                        </select>
                     </div>
                     <div class="details-form my-3 p-3">
                        <small>Start Week on</small>
                        <select class="form-control border-0">
                           <option>Monday</option>
                           <option>Sunday</option>
                           <option>Tuesday</option>
                           <option>Friday</option>
                          
                        </select>
                     </div>
                     <p>Configuration</p>
                     <div class="details-form my-3 p-3">
                        <small>Tracking type</small>
                        <select class="form-control border-0">
                           <option>Interactive Only</option>
                           <option>Active</option>
                           
                        </select>
                     </div>
                     <div class="details-form my-3 p-3">
                        <small>Blur screenshots</small>
                        <select class="form-control border-0">
                           <option>Only for certain people</option>
                           <option>only junior people</option>
                           <option>only senior people</option>
                           
                        </select>
                     </div>
                     <div class="details-form my-3 p-3">
                        <small>Don’t time out on calls</small>
                        <select class="form-control border-0">
                           <option>For everyone</option>
                          
                        </select>
                     </div>
                     <a href="">Learn more</a>
                     <div class="company-switch-area">
                        <div class="form-check form-switch my-3">
                           <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                           <label class="form-check-label" for="flexSwitchCheckDefault">Auto-start tracking in destop apps every day </label>
                        </div>
                        <div class="form-check form-switch details-info my-3">
                           <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                           <label class="form-check-label" for="flexSwitchCheckChecked">Use projects & tasks</label>
                        </div>
                        <div class="form-check form-switch details-info my-3">
                           <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                           <label class="form-check-label" for="flexSwitchCheckChecked">Use work schedules</label>
                        </div>
                        <div class="form-check form-switch details-info my-3">
                           <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                           <label class="form-check-label" for="flexSwitchCheckChecked">Use payroll</label>
                        </div>
                     </div>
                     <a href="">Learn more</a>
                     <div class="details-form my-3">
                        <select class="form-control border-0">
                           <option>Who can access payrool</option>
                           <option>item 2</option>
                           <option>item 3</option>
                           <option>item 4</option>
                           <option>item 5</option>
                        </select>
                     </div>
                     <p>Permissions</p>
                     <div class="company-switch-area">
                        <div class="form-check form-switch my-3">
                           <input class="form-check-input main-input-check" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                           <label class="form-check-label" for="flexSwitchCheckDefault">Allow managers to ceate projects and tasks  </label>
                        </div>
                        <div class="form-check form-switch my-3">
                           <input class="form-check-input main-input-check" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                           <label class="form-check-label" for="flexSwitchCheckChecked">Allow managers to invite new users</label>
                        </div>
                        <div class="form-check form-switch my-3">
                           <input class="form-check-input main-input-check" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                           <label class="form-check-label" for="flexSwitchCheckChecked">Allow managers to set productivity ratings</label>
                        </div>
                        <div class="form-check form-switch  my-3">
                           <input class="form-check-input main-input-check" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                           <label class="form-check-label" for="flexSwitchCheckChecked">Allow managers to set work schedules</label>
                        </div>
                     </div>
                     <div class="details-form my-3">
                        <small>Who can see other people’s screencasts</small>
                        <select class="form-control border-0">
                           <option>Owner,Admins,Managers</option>
                           <option>item 2</option>
                           <option>item 3</option>
                           <option>item 4</option>
                           <option>item 5</option>
                        </select>
                     </div>
                     <p>Billing</p>
                     <div class="details-form my-3">
                        <select class="form-control border-0">
                           <option>Who can access billing?</option>
                           <option>item 2</option>
                           <option>item 3</option>
                           <option>item 4</option>
                           <option>item 5</option>
                        </select>
                     </div>
                     <p>Web & app privacy</p>
                     <div class="details-form my-3">
                        <small>Web & app reporting</small>
                        <select class="form-control border-0">
                           <option>Extended: full URLs, page titles, and app window titles</option>
                           <option>item 2</option>
                           <option>item 3</option>
                           <option>item 4</option>
                           <option>item 5</option>
                        </select>
                     </div>
                     <a href="">Learn more</a>
                     <div class="form-check form-switch  my-3">
                        <input class="form-check-input main-input-check" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Remove query parameters</label>
                     </div>
                     <h6>Work-life balance metrics</h6>
                     <p>These metrics are used in the "Work-life balance potential issues" widget on the Team dashboard</p>
                     <div class="details-form my-3">
                        <small>Too many hours per day</small>
                        <select class="form-control border-0">
                           <option>9 hours</option>
                           <option>item 2</option>
                           <option>item 3</option>
                           <option>item 4</option>
                           <option>item 5</option>
                        </select>
                     </div>
                     <div class="details-form my-3">
                        <small>Late hours in user’s time zone after</small>
                        <select class="form-control border-0">
                           <option>8 PM</option>
                           <option>item 2</option>
                           <option>item 3</option>
                           <option>item 4</option>
                           <option>item 5</option>
                        </select>
                     </div>
                     <div class="details-form my-3">
                        <small>Work outside shifts per day longer then</small>
                        <select class="form-control border-0">
                           <option>1 hour</option>
                           <option>item 2</option>
                           <option>item 3</option>
                           <option>item 4</option>
                           <option>item 5</option>
                        </select>
                     </div>
                     <div class="form-check form-switch  my-3">
                        <input class="form-check-input main-input-check" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                        <label class="form-check-label" for="flexSwitchCheckChecked">Count work on weekends as a work-life balance issue</label>
                     </div>
                     <p>Single Sign On (SSO)</p>
                     <a href="">Add provider</a>
                  </form>
               </div>
            </div>
         </div>     
       
        
  </div>
   
     
</template>

<script>
import Loader from '../components/includes/Loading.vue'
import TopFilter from '../components/includes/TopFilter.vue';
export default {
    name: 'TimetrackCompnay',
    components:{Loader,TopFilter},

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