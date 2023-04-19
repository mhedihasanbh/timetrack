<template>
   <div class="profile-loader"  v-if="loader">
      <Loader/>
   </div>
   <div v-if="!loader">
      <div class="my-3">
         <TopFilter/>
      </div>
      <div class="productivity-boxWrapper  py-5 my-3">
         <div class="productivity-topBox ">
            <div class="row bg-white" v-for="(productivityinfo,index) in productivityinfos" :key="index" >
               <div class="productivity-header d-flex justify-content-between align-items-center py-2 px-3" >
                  <div class="app-header-left">
                     <i class="fa-regular fa-user me-2"></i>
                     <span>{{ productivityinfo.username }}</span>
                  </div>
               </div>
               <div class="col-lg-4 " >
                  <div class="attendance-details-left py-4 px-3">
                     <p class="py-2 fw-bold">Mail:<span>{{ productivityinfo.usermail }}</span></p>
                     <p class="py-2 fw-bold">Team::<span>{{ productivityinfo.team }}</span></p>
                     <p class="py-2 fw-bold">Last synced::<span>{{ productivityinfo.lastsync }}</span></p>
                  </div>
               </div>
               <div class="col-lg-8" >
                  <div class="productivity-details-right py-5 px-4 ">
                     <table class="table table-bordered table-sm">
                        <thead>
                           <tr>
                              <th scope="col">App/Website</th>
                              <th scope="col">Productivity</th>
                              <th scope="col">Scope</th>
                              <th scope="col">Time Used</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <img :src="productivityinfo.appicon"/>
                                 <span class="ms-2">{{ productivityinfo.appname }}</span>
                              </td>
                              <td>
                                 <a href="" class="productivity-status productivity-btn">{{ productivityinfo.productivity }}</a>
                              </td>
                              <td>{{ productivityinfo.scope}}</td>
                              <td>{{ productivityinfo.timeused }}</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
            <div class="custom-pagination d-flex justify-content-end py-3">
               <nav aria-label="Page navigation example ">
                  <ul class="pagination">
                     <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                     <li class="page-item"><a class="page-link" href="#">1</a></li>
                     <li class="page-item"><a class="page-link" href="#">2</a></li>
                     <li class="page-item"><a class="page-link" href="#">3</a></li>
                     <li class="page-item"><a class="page-link" href="#">Next</a></li>
                  </ul>
               </nav>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import Loader from '../components/includes/Loading.vue'
   import TopFilter from '../components/includes/TopFilter.vue';
   export default {
     name: 'TimetrackdashboardUser',
     components:{Loader,TopFilter},
   
     data() {
         return {
             loader:true,
             productivityinfos:[
               {'username':'mehedi','usermail':'mehedi@gmail.com','team':'default team','lastsync':'april12 12.00PM','app':'google','appicon':'assets/images/activitychrome.png','appname':'google','productivity':'unproductivity','scope':'global','timeused':'2h 10m'},
               {'username':'rakib','usermail':'rakib@gmail.com','team':'default team','lastsync':'april12 12.00PM','app':'google','appicon':'assets/images/activitychrome.png','appname':'google','productivity':'productivity','scope':'local','timeused':'7h 10m'},
               {'username':'ashik','usermail':'ashik@gmail.com','team':'default team','lastsync':'april12 12.00PM','app':'google','appicon':'assets/images/activitychrome.png','appname':'google','productivity':'productivity','scope':'local','timeused':'7h 10m'},
             ]
         };
     },
   
     mounted() {
         
     },
   
     methods: {
         
     },
     created(){
           setTimeout(() => {
           this.loader=false
         }, 1000);
   }
   };
</script>
<style  scoped>
</style>