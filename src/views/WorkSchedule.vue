<template>
  <div class="profile-loader"  v-if="loader">
     <Loader/>
  </div>
  <div v-if="!loader">
     <div class="my-3">
        <TopFilter/>
     </div>
     <div class="schdule-area bg-white p-2">
        <div class="schdule-edit d-flex justify-content-between align-items-center my-3">
           <div class="add-user-btn d-flex gap-3 align-items-center">
              <form action="" method="">
                 <div class="calander-icon workschdule">
                    <label class="project-title py-2">Add/Edit time</label>
                    <input type="datetime-local" class="form-control " >
                 </div>
              </form>
           </div>
           <div class="attendance-report ">
              <form action="" method="">
                 <div class="calander-icon workschdule">
                    <label class="project-title py-2">Attendance Report</label>
                    <input type="datetime-local" class="form-control  " >
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
  </div>
</template>
<script>
  import Loader from '../components/includes/Loading.vue'
  import TopFilter from '../components/includes/TopFilter.vue';
  export default {
      name: 'workScdule',
      components:{ Loader,TopFilter},
  
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