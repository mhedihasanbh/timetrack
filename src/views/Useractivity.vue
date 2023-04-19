<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="activities-text text-center py-4">
                    <h4>user activites Details</h4>
                    <p>Daily User activites report show here</p>
                </div>
                <div class="activites-table bg-white p-4">
                    <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Start Time</th>
                        <th scope="col">End Time</th>
                        <th scope="col">Client Address</th>
                        <th scope="col">Total Time</th>
                        <th scope="col">Productivity Time</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        
                        <td>yasin khan</td>
                        <td>4/3/2023 7.20PM</td>
                        <td>4/3/2023 12.20AM</td>
                      
                        <td>10.32.0.9</td>
                        <td>5 hours</td>
                        <td>2 hours</td>
                        </tr>
                        <tr>
                        
                        <td>sajib bhuyan</td>
                        <td>4/3/2023 5.20PM</td>
                        <td>4/3/2023 8.20PM</td>
                      
                        <td>10.32.0.9</td>
                        <td>3 hours</td>
                        <td>1 hours</td>
                        </tr>
                        <tr>
                        
                        <td>Ashik</td>
                        <td>4/3/2023 2.20AM</td>
                        <td>4/3/2023 6.20PM</td>
                      
                        <td>10.32.0.9</td>
                        <td>4 hours</td>
                        <td>1 hours</td>
                        </tr>
                        <tr>
                        
                        <td>rakib ali</td>
                        <td>4/3/2023 7.20PM</td>
                        <td>4/3/2023 8.20PM</td>
                      
                        <td>10.32.0.9</td>
                        <td>1 hours</td>
                        <td>1 hours</td>
                        </tr>
                        
                        <tr>
                        
                        <td>shorif</td>
                        <td>4/3/2023 7.20PM</td>
                        <td>4/3/2023 8.20PM</td>
                      
                        <td>10.32.0.9</td>
                        <td>8 hours</td>
                        <td>3 hours</td>
                        </tr>
                        <tr class="fw-bold">
                            <td colspan="5" class="text-end">Total productivity</td>
                            <td> 5 hours</td>
                        </tr>
                       
                    </tbody>
                </table>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimetrackdashboardUseractivity',

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