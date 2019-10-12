function ProjectsController($scope) {
    var ctrl = this;
  }
  
  angular.module('Personal').component('projects', {
    template: `
        <div class="projectsPage">
            <navigation></navigation>
            <div class="projectsPageContainer">
                <p>test</p>
            </div>
        </div>
      `, 
    controller: ProjectsController
  });