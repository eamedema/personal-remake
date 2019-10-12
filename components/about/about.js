function AboutController($scope) {
    var ctrl = this;
  }
  
  angular.module('Personal').component('about', {
    template: `
        <div class="aboutPageContainer">
              <p>test</p>
        </div>
      `, 
    controller: AboutController
  });