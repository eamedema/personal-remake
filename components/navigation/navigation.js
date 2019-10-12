function NavigationController($scope) {
    var ctrl = this;
    // alert("Welcome to PicturePalette. Simply start your search by choosing a color.");  
  }
  
  angular.module('Personal').component('navigation', {
    template: `
    <div class="newNav">
            <a class="noStyle navItem" href="#!/about">
                <div class="navAbout">
                    ABOUT
                </div>
            </a>
            <a class="noStyle navItem" href="#!/projects">
                <div class="navProjects">
                    PROJECTS
                </div>
            </a> 
            <a class="noStyle navItem" href="#!/contact">
                <div class="navContact">
                    CONTACT
                </div>
            </a>     
    </div>    
      `, 
    controller: NavigationController
  });