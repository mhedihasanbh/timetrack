<template>
    <div>
        <canvas id="planet-chart"></canvas> 
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    name: 'TimetrackdashboardGraph',

    data() {
        return {
            data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
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