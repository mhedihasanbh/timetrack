<template>
<!-- <div class="profile-loader"  v-if="loader">
     <Loader/>
  </div> -->

<div >
    <div class="my-3">
        <TopFilter/>
    </div>
    <div class="user-wrapper bg-white p-2 my-3 ">
   <div class="screenShoot-downloadBtn d-flex justify-content-end">
      <router-link to="/downloadScreenshoot" >
         <i class="fa-solid fa-download me-2"></i>
         Download Screenshots
      </router-link>
   </div>
   <!--screenshoot wrapper-->
   <div class="row py-3">
    <div class="col-lg-3 py-3" v-for="(screenshootdetail,index) in  screenshootdetails" :key="index">
            <div class="card h-100">
               <div class="capture-header px-3 py-2">
                  <div class="d-flex justify-content-between">
                     <p>{{ screenshootdetail.name }}</p>
                  </div>
                  <div class="d-flex justify-content-between py-2">
                     <small>{{ screenshootdetail.time }} </small>
                     <small>{{ screenshootdetail.hours }}</small>
                  </div>
               </div>
               <div class="card-body">
                <div class="galary d-flex flex-wrap gap-3">
              <div  class="image"  ><span><img :src="screenshootdetail.url" width="230" height="172" alt=""></span></div>
         
      </div>

                  <div class="preview-box">
      <div class="details">
         <span class="title">
           Image<p class="current-image"></p>of<p class="total-image"></p>
         </span>
         <span class="icon  fa-solid fa-xmark"></span>
      </div>
      <div class="image-box">
         <div class="slide preview">
            <span class="fa-solid fa-angle-left"></span>
         </div>
         <div class="slide next">
            <span class="fa-solid fa-angle-right"></span>
         </div>
         
         <img src="" alt="">
        
       
        
      </div>
   </div>
               </div>
            </div>
         </div>
   </div>
  
   
  
   <div class="shadow"></div>
   
</div>
</div>

</template>

<script>
// import Loader from '../components/includes/Loading.vue'
import TopFilter from '../components/includes/TopFilter.vue';

export default {
  name: 'TimetrackdashboardUser',
  components:{TopFilter},

  data() {
      return {
        // loader:true
        screenshootdetails:[
            {"url":'assets/images/screenshootimageone.png','time':'01.02.3020','name':'sajib bhuyan','hours':'12.00PM'},
            {"url":'assets/images/screenshootimageone.png','time':'01.02.3020','name':'rakib ali','hours':'2.03AM'},
            {"url":'assets/images/screenshootimageone.png','time':'01.02.3020','name':'rakib ali','hours':'2.03AM'},
            {"url":'assets/images/screenshootimageone.png','time':'01.02.3020','name':'rakib ali','hours':'2.03AM'},
            {"url":'assets/images/screenshootimageone.png','time':'01.02.3020','name':'rakib ali','hours':'2.03AM'},
        ]
      };
  },

  mounted() {
 //getting all required elements
    const gallery  = document.querySelectorAll(".galary .image"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".icon"),
    currentImg = previewBox.querySelector(".current-image"),
    totalImg = previewBox.querySelector(".total-image"),
    shadow = document.querySelector(".shadow");
    
        for (let i = 0; i < gallery.length; i++) {
            totalImg.textContent = gallery.length; //passing total img length to totalImg variable
            let newIndex = i; //passing i value to newIndex variable
            let clickedImgIndex; //creating new variable
            
            gallery[i].onclick = () =>{
                clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
                function preview(){
                    currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                    let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                    previewImg.src = imageURL; //passing user clicked img url in previewImg src
                }
                preview(); //calling above function
        
                const prevBtn = document.querySelector(".preview");
                const nextBtn = document.querySelector(".next");
                if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                    prevBtn.style.display = "none"; 
                }
                if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                    nextBtn.style.display = "none"; 
                }
                prevBtn.onclick = ()=>{ 
                    newIndex--; //decrement index
                    if(newIndex == 0){
                        preview(); 
                        prevBtn.style.display = "none"; 
                    }else{
                        preview();
                        nextBtn.style.display = "block";
                    } 
                }
                nextBtn.onclick = ()=>{ 
                    newIndex++; //increment index
                    if(newIndex >= gallery.length - 1){
                        preview(); 
                        nextBtn.style.display = "none";
                    }else{
                        preview(); 
                        prevBtn.style.display = "block";
                    }
                }
                document.querySelector("body").style.overflow = "hidden";
                previewBox.classList.add("show"); 
                shadow.style.display = "block"; 
                closeIcon.onclick = ()=>{
                    newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                    prevBtn.style.display = "block"; 
                    nextBtn.style.display = "block";
                    previewBox.classList.remove("show");
                    shadow.style.display = "none";
                    document.querySelector("body").style.overflow = "scroll";
                }
            }
            
        } 
    



    
  },
 
  methods: {
  
  },
//   created(){
//         setTimeout(() => {
//         this.loader=false
//       }, 1000);
// }
};
</script>

<style lang="scss" scoped>

</style>