function ContactController($scope) {
    var ctrl = this;
  }
  
  angular.module('Personal').component('contact', {
    template: `
        <div class="contactPage">
            <navigation></navigation>
            <div class="contactPageContainer">
                <p>test</p>
            </div>    
        </div>
      `, 
    controller: ContactController
  });