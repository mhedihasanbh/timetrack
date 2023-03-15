<template>
 
        <div class="project-top d-flex justify-content-between">
          <div><h5>Activity Summary</h5></div>
        </div>
        <div class="project-top-item bg-white p-4 rounded-3">
          <form action="" method="" class="d-flex flex-wrap space-between">
            <div>
              <select
                class="form-select select-bg border-none mb-2"
                aria-label="Default select example"
              >
                <option selected>All Users Selected</option>
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
              <select
                class="form-select select-bg border-none mt-sm-2"
                aria-label="Default select example"
              >
                <option selected>Last Week</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </form>
        </div>
        <div
          class="task-expand rounded-3 py-3 d-flex align-items-center gap-3 justify-content-end"
        >
          <div>
            <i class="fa-solid fa-question"></i>
            <span>About Idle Minute & Seconds</span>
          </div>
          <div class="display-setting bg-white p-3">
            <a href="">
              <i class="fa-solid fa-gear me-3"></i>
              <span>Display Setting</span>
            </a>
          </div>
        </div>
        <div
          class="app-productivty bg-white rounded-3 p-3 d-flex flex-wrap justify-content-between align-items-center my-3"
        >
          <small>Name</small>
          <small>Total Computer Time</small>
          <small>Productive</small>
          <small>% productive</small>
          <small>Unproductive</small>
          <small>% Unproductive</small>
          <small>Neutral </small>
          <small>% Neutral </small>
        </div>
        <div
          class="bg-white rounded-3 p-3 d-flex flex-wrap justify-content-between gap-5 align-items-center my-3"
        >
          <div>
            <img src="assets/images/productivty.png" />
            <small>Ashikur Rahim</small>
          </div>
          <small>1h 17m</small>
          <small>40m</small>

          <div class="productivity-Percentage">
            <span>10%</span>
            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar w-75"></div>
            </div>
          </div>

          <small>40m</small>
          <div class="productivity-Percentage">
            <span>20%</span>
            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar w-75"></div>
            </div>
          </div>
          <small>10m</small>
          <div class="productivity-Percentage">
            <span>5%</span>
            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar w-75"></div>
            </div>
          </div>
        </div>
      
</template>

<script>
export default {
  name: "TimetrackdashboardActivitySummary",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
