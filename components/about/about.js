function AboutController($scope) {
    var ctrl = this;
  }
  
  angular.module('Personal').component('about', {
    template: `
        <div class="aboutPage">
            <navigation></navigation>
            <div class="aboutPageContainer">
                <h1>ABOUT</h1>
            </div>
        </div>
      `, 
    controller: AboutController
  });