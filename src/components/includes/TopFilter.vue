<template>
       <div class="top-filter-area bg-white rounded p-3 d-flex justify-content-between">
            <div class="filter-left d-flex align-items-center flex-wrap gap-4">
             <form action="" method="" class="d-flex gap-2">
               <div class="mb-3">
                  <input type="search" class="form-control filter-by-week" id="exampleInputEmail1" placeholder="Search">
               </div>
                <div class="tema-select">
                  <select class="form-select " aria-label="Default select example">
                  <option selected>All Teams</option>
                  <option value="1">
                      All Team
                  </option>
                  <option value="2">Nasir Uddin</option>
                  <option value="3">Mehedi</option>
                  </select>
                </div>
               </form>
             </div>
               <div class="filter-form">
                <form action="" method="" class="d-flex gap-2 align-items-center">
                   <div class="calander-icon">
                      
                       <input type="date" class="form-control filter-by-week" >
                       
                     </div> 
                   <select class="form-select filter-by-week">
                     <option selected>Last Week</option>
                     <option value="1">Last Month</option>
                     <option value="2">Last year</option>
                  </select>
                  <a href=""> <i class="fa-solid fa-arrows-rotate"></i></a>
               </form>
          </div>
      </div>
     
     <!---app usages start--->
     <!---app usages end--->
  
  

</template>

<script>
export default {
    name: 'TimetrackdashboardTopFilter',

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