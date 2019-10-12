function ContactController($scope) {
    var ctrl = this;
  }
  
  angular.module('Personal').component('contact', {
    template: `
        <div class="contactPageContainer">
              <p>test</p>
        </div>
      `, 
    controller: ContactController
  });