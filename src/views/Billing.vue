<template>
             <div class="billing-top d-flex justify-content-between">
                <h5>Billing</h5>
                <div>
                  <select class="form-select border-0 bg-white" aria-label="Default select example">
                    <option selected>Billing Details</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
               </div>
               <div class="row py-3">
                 <div class="col-lg-8">
                   <div class="billing-details-area bg-white rounded-3 p-3">
                    <h5>Billing details</h5>
                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                         <td>Plan</td>
                          <td>
                            Standard monthly
                            <a href=""><i class="fa-solid fa-pencil"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>Users in company</td>
                           <td>
                            1
                           </td>
                         </tr>
                         <tr>
                          <td>Minimum billable users</td>
                           <td>
                            1
                           </td>
                         </tr>
                         <tr>
                          <td>Price</td>
                           <td>
                            $10.00 /<br>user/month
                           </td>
                         </tr>
                         <tr>
                          <td>Next payment amount</td>
                           <td>
                            $10.00
                           </td>
                         </tr>
                         <tr>
                          <td>Your credit card</td>
                           <td>
                            <!-- <a href="" class="add-bill-card"><i class="fa-solid fa-plus"></i>ADD CARD</a> -->
                            <div class="add-card">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn  py-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                           <i class="fa-solid fa-plus"></i>
                           <h6 class="add-bill-card">ADD CARD</h6>
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                           <div class="modal-dialog ">
                              <div class="modal-content">
                                 <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Project title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                 </div>
                                 <form action="" method="">
                                    <div class="modal-body">
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">Card Type</label>
                                          <input type="text" name="" class="form-control" id="exampleFormControlInput1" >
                                       </div>
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">Card Number</label>
                                          <input type="text" name="" class="form-control" id="exampleFormControlInput1">
                                       
                                       <div class="mb-3">
                                          <label for="exampleFormControlInput1" class="form-label text-start">Card Details</label>
                                         <textarea class="form-control" rows="6"></textarea>
                                       </div>
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                       <button type="button" class="btn primary-button">Submit</button>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                           </div>
                           </td>
                         </tr>
                         <tr>
                          <td>Next payment date</td>
                           <td>
                            Jan 23 2023
                           </td>
                         </tr>
                         
                      </tbody>
                    </table>
                   </div>
                 </div>
                 <div class="col-lg-4">
                   <div class="current-plan-area bg-white rounded-3 p-3">
                     <h5>Current plan includes</h5>
                     <ul>
                      <li>All of Basic plan</li>
                      <li>Track apps and URLs</li>
                      <li>Daily email notifications</li>
                      <li>60+ integrations</li>
                      <li>Real-time email notifications</li>
                      <li>24 hour support</li>
                      <li>Up to 3 groups/departments</li>
                      <li>6 months data history</li>
                     </ul>
                   </div>
                 </div>
               </div>
               <div class="row">
                <div class="col-lg-12">
                  <div class="upgrade-plan-area bg-white rounded-3 p-3 ">
                    <div class="mx-5">
                      <h5>Upgrade your plan</h5>
                     <p>When upgrading you will get all of the Standard plan features plus:</p>
                    </div>
                      <div class="service-plan-area d-flex justify-content-between m-5">
                       <div>
                         <ul>
                          <li>Client login access</li>
                          <li>VIP support</li>
                          <li>Concierge account setup</li>
                         </ul>
                       </div>
                       <div>
                        <ul>
                         <li>Video screen captures</li>
                         <li>Internet Connectivity report</li>
                        </ul>
                      </div>
                      <div>
                        <ul>
                         <li>Unlimited groups</li>
                         <li>Unlimited data history</li>
                        </ul>
                      </div>
                     </div>
                  </div>
                </div>
               </div>
               <h3 class="py-5">Billing FAQs</h3>
               <div class="row">
                 <div class="col-lg-12">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          How does Time Tracker bill users?
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                           We charge in advance for the month based on the number of users you have in your Time Doctor account. Once you have completed your trial, the system will automatically charge the payment method you have added to your account.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          What payment methods are accepted by Time Tracker?
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Am I charged as the owner of the account even if I don’t track time?
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Am I charged as the owner of the account even if I don’t track time?
                        </button>
                      </h2>
                      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          Am I charged as the owner of the account even if I don’t track time?
                        </button>
                      </h2>
                      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                   </div>
                 </div>
               </div>
            
</template>

<script>
export default {
    name: 'TimetrackdashboardBilling',

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