<template>
    <div>
       <TopFilter/>
    </div>
    <div class="row g-0 py-5">
        <div class="col-lg-8">
            <div class="messanger-left-area p-4 ms-5 rounded-4">
                <div class="messanger-top d-flex align-items-center gap-3">
                    <div>
                        <img src="assets/images/fbuser.png" width="60px" height="60px"/>
                    </div>
                     <div>
                        <h3 class="project-title messanger-user-Name">Ashikur Rahim</h3>
                    <p>@ashik</p>
                     </div>
                    
                </div>
                <div class="message-box bg-white rounded-3 p-4 my-5 w-75">
                   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>
                <div class="message-box sender-box  rounded-3 p-3 my-5 w-50 mx-auto">
                   <p class="text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>
                <small class="d-block text-center">Satday</small>
                <div class="message-box bg-white rounded-3 p-4 my-5 w-75">
                   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>
                <div class="message-box sender-box  rounded-3 p-3 my-5 w-50 mx-auto">
                   <p class="text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>
                <div class="type-message">
                    <form>
                        <div class="send-icon">
                            <input type="text" class="form-control messanger-input w-75" placeholder="Typing...."/>
                            <button type="submit"> <i class="fa-regular fa-paper-plane icon" ></i> </button>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="messanger-right-area p-4">
                <div class="messanger-top d-flex align-items-center gap-3">
                    <div>
                        <img src="assets/images/fbuser.png" width="60px" height="60px"/>
                    </div>
                     <div>
                        <h3 class="project-title messanger-user-Name">Ashikur Rahim</h3>
                    <p>@ashik</p>
                     </div>
                </div>
                <div class="user-info-list py-5">
                    <ul>
                        <li><a href=""><i class="fa-solid fa-phone-volume me-2"></i>000 00 000 00</a></li>
                        <li><a href=""><i class="fa-regular fa-envelope-open me-2"></i>ashik</a></li>
                        <li><a href=""><i class="fa-regular fa-file-lines me-2"></i>file name</a></li>
                        <li><a href=""><i class="fa-regular fa-file-lines me-2"></i>file name</a></li>
                        <li><a href=""><i class="fa-regular fa-file-lines me-2"></i>file name</a></li>
                        <li><a href=""><i class="fa-regular fa-file-lines me-2"></i>file name</a></li>
                    </ul>
                </div>
                
        </div>
    </div>
    </div>
</template>

<script>
 import TopFilter from '../components/includes/TopFilter.vue';
export default {
    name: 'TimeMessanger',
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