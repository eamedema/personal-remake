function ProjectsController($scope) {
    var ctrl = this;
  }
  
  angular.module('Personal').component('projects', {
    template: `
        <div class="projectsPageContainer">
              <p>test</p>
        </div>
      `, 
    controller: ProjectsController
  });