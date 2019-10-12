function AboutController($scope) {
    var ctrl = this;
  }
  
  angular.module('Personal').component('about', {
    template: `
        <div class="aboutPage">
            <navigation></navigation>
            <div class="aboutPageContainer">
                <p>test</p>
            </div>
        </div>
      `, 
    controller: AboutController
  });