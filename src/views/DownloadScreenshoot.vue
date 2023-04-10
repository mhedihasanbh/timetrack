<template>
<div>
        <div class="filter-left d-flex align-items-center flex-wrap bg-white rounded p-3 w-100 ">
             <form action="" method="" class="project-filer d-flex gap-2">
               <select class="form-select filter-by-week" aria-label="Default select example">
                  <option selected>All User</option>
                 
                  <option value="2">Nasir Uddin</option>
                  <option value="3">Mehedi</option>
                  <option value="3">Sajib</option>
                  </select>
               
                <select class="form-select filter-by-week" id="find-client" >
                    <option selected>All Project</option>
                    <option>test project 1</option>
                    <option>test project2</option>
                   </select>
                  <select class="form-select filter-by-week" id="find-client" >
                    <option selected>All task</option>
                    <option> task one</option>
                    <option> task two</option>
                   </select>
                   <div class="calander-icon">
                      
                       <input type="date" class="form-control filter-by-week" >
                       
                     </div> 
                
                
                  
                  <a href="#" class="pt-2"> <i class="fa-solid fa-arrows-rotate"></i></a>
               
                 <div class="filter-btn w-100">
                    <button type="submit" class="primary-btn p-2">Apply Filter</button> 
                   
                 </div>
               </form>
         </div>
           <div class="dashboard-table w-100">
               <table class="table  table-bordered my-3">
            <thead>
               <tr>
                  <th>User Name</th>
                  <th>File Size</th>
                  <th>Date</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
              <tr>
               <td>sajib</td>
               <td>2MB</td>
               <td>4/7/2023</td>
               <td>
                  <div class="download-btn">
                     <a href="#" class="primary-btn px-3 py-2">Download</a>
                  </div>
               </td>
              </tr>
              
             
            </tbody>
            </table>
             </div>
</div>
</template>
  
  <script>

  export default {
    name: 'downloadScrennshot',
  
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