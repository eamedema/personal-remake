function ProjectsController($scope) {
    var ctrl = this;
  }
  
  angular.module('Personal').component('projects', {
    template: `
        <div class="projectsPage">
            <navigation></navigation>
            <div class="projectsPageContainer">
                <h1>PROJECTS</h1>
            </div>
        </div>
      `, 
    controller: ProjectsController
  });