<template>
   
          <div class="project-top-item bg-white p-4 rounded-3">
            <form action="" method="" class="d-flex space-between">
              <div>
                <select class="form-select select-bg border-none" aria-label="Default select example">
                  <option selected>All List</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="task-export">
                <a href="">
                  <i class="fa-solid fa-cloud-arrow-down me-3"></i>
                  <span>Export options</span>
                </a>
              </div>
              <div>
                <select class="form-select select-bg border-none" aria-label="Default select example">
                  <option selected>Last Week</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

            </form>
          </div>
          <div class=" bg-white p-4 rounded-3">
            <div class="row">
              <div class="col-lg-12">
               <div class="owl-carousel">
                  
               </div>
              </div>
            </div>
          </div>
        
</template>

<script>

export default {
    name: 'TimetrackdashboardScreenShootTwo',

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