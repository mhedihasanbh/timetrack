<template>
   <div>
    <div class="communication-top-area d-flex align-items-center justify-content-between bg-white p-4">
     <div class="left-arrow">
        <i class="fa-solid fa-arrow-left"></i>
     </div>
     <div class="communication-user-image d-flex align-items-center gap-2">
        <div>
            <img src="assets/images/fbuser2.jpg"/>
        </div>
        <div class="comunnication-user-info">
           <h3>Nupur</h3>
           <span>online</span>
        </div>
       
     </div>
     <div class="recored-icon">
        <a href="#"><i class="fa-solid fa-video"></i></a>
     </div>
     <div class="call-icon">
        <a href="#"><i class="fa-solid fa-phone"></i></a>
        
     </div>
    
    </div>
    <div class="communication-message-area py-4">
        <div class="receiver-box-area">
            <div class="receiver-message bg-white rounded-3 p-4">
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
        </div>
        <span class="py-2 ms-4 d-block">09:30 PM</span>
        </div>
        <div class="sender-box-area">
            <div class="sender-message  w-75 d-flex justify-content-end rounded-3 p-3 my-3 ms-auto">
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
        </div>
        <div class="sender-message  w-75 d-flex justify-content-end rounded-3 p-3 ms-auto">
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
        </div>
        <span class="py-3 ms-4 d-block text-center">12:50 PM</span>
        </div>
        <div class="receiver-box-area">
            <div class="receiver-message bg-white rounded-3 p-4">
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
        </div>
        <span class="py-2 ms-4 d-block">09:30 PM</span>
        </div>
        <div class="sender-box-area">
            <div class="sender-message  w-75 d-flex justify-content-end rounded-3 p-3 my-3 ms-auto">
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur</p>
        </div>
        
        <span class="py-3 ms-4 d-block text-center">12:50 PM</span>
        </div>
        
    </div>
    <div class="communication-bottom bg-white p-3">
        <form class="row row-cols-lg-auto g-0 align-items-center">
           <div class="col-10">
             <div class="chat-input">
                <div class="chat-icon-group">
                    <a href="#" class="icon"><i class="fa-solid fa-microphone"></i></a>
                    <a href="#" class="icon"><i class="fa-regular fa-face-smile"></i></a>
                    <a href="#" class="icon"><i class="fa-solid fa-paperclip"></i></a> 
                </div>
               
                <input type="text" class="form-control" placeholder="Type a message..."/>
            </div>
            </div>
            <div class="col-2">
                <button type="submit" class="primary-btn send-btn">
                    <i class="fa-regular fa-paper-plane send-btn-icon"></i>
                    </button>
            </div>
       </form>
   </div>
   </div>
</template>

<script>
export default {
    name: 'messangerList',

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