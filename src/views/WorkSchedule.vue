<template>
    <div class="my-4">
      <TopFilter/>
     </div>
             <div class="schdule-area bg-white p-2">
              <div class="project-top d-flex justify-content-between  py-3">
                 <h4 class="project-title">work schedules</h4>
                  <div>
                      <form action="" method="" class="user-filerForm d-flex gap-2 align-items-center">
              <select id="selectbox3" class="form-control user-filterBtn decorated"  >
                <option selected>All Users Selected</option>
                <option value="1">sajib</option>
                <option value="2">rakib</option>
           
              </select>
              <select id="selectbox4" class="form-control user-filterBtn">
                <option value="1">12.00</option>
                <option value="2">2.18</option>
              </select>
         </form>
                  </div>
                </div>
               
                <div class="schdule-edit d-flex justify-content-between align-items-center my-3">
                  <div class="add-user-btn d-flex gap-3 align-items-center">
                    <form action="" method="">
                      <div class="calander-icon workschdule">
                      <label class="project-title py-2">Add/Edit time</label>
                      <input type="datetime-local" class="form-control primary-btn " >
                      
                    </div> 
                   
                    </form>
                  
                   
                  </div>
                  <div class="attendance-report ">
                    <form action="" method="">
                      <div class="calander-icon workschdule">
                      <label class="project-title py-2">Attendance Report</label>
                      <input type="datetime-local" class="form-control primary-btn " >
                      
                    </div> 
                   
                    </form>
                  
                   
                  </div>
                  </div>
                 <div class="time-schdule-table">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Mon, Jan 16</th>
                        <th scope="col">Tue, Jan 17</th>
                        <th scope="col">Wed, Jan 18</th>
                        <th scope="col">Thu, Jan 19</th>
                        <th scope="col">Fri, Jan 20</th>
                        <th scope="col">Sat, Jan 21</th>
                        <th scope="col">Sun, Jan 22</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>sajib</td>
                        <td>12.00</td>
                        <td>1.00</td>
                        <td>2.00</td>
                        <td>3.25</td>
                        <td>6.12</td>
                        <td>9.00</td>
                        <td>11.00</td>
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