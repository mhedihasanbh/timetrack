<template>
    <div class="messanger-login-area bg-white py-4 px-5">
     <div class="messanger-login-top text-end py-3">
        <i class="fa-sharp fa-solid fa-xmark"></i>
     </div>
     <div class="form-title"> 
        <h2 class="py-3">Hey,<br>Login Now.</h2>
        <p class="py-3">Welcome back You’ve been<br> missed!</p>
     </div>
     <form action="" method="" class="messanger-login">
        <div class="input-icons mb-3">
            <i class="fa-regular fa-envelope icon"></i>
            <input type="text" class="form-control input-field" placeholder="Youremail@gmail.com"/>
        </div>
        <div class="input-icons mb-3">
            <i class="fa-solid fa-lock  icon"></i>
            <input type="password" class="form-control input-field" placeholder="Password"/>
            <!-- <i class="fa-regular fa-eye"></i> -->
        </div>
        <p class="messanger-forget-Password py-3">Forgot Password?/ <a href="#">Reset</a></p>
        <div class="mb-3 py-5">
            <button type="submit" class="primary-btn py-3  w-100">Log in</button>
        </div>
     </form>
     <div>
        <div class="text-center">
            <a href="#" class="text-decoration-underline">Skip Now</a>
            <router-link to="/messangerlist">Messanger list</router-link>
        </div>
        
     </div>
    </div>
</template>

<script>
export default {
    name: 'messangerLogin',

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