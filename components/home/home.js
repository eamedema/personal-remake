function HomeController($scope) {
    var ctrl = this;
    // alert("Welcome to PicturePalette. Simply start your search by choosing a color.");  
  }
  
  angular.module('Personal').component('home', {
    template: `
        <div class="homeContainer">
            <a class="noStyle aboutHover selectHoverAbout" href="#!/about">
                <div class="homeBox">
                    ABOUT
                </div>
            </a>
            <a class="noStyle projectHover selectHoverProjects" href="#!/projects">
                <div class="homeBox">
                    PROJECTS
                </div>
            </a> 
            <a class="noStyle contactHover selectHoverContact" href="#!/contact">
                <div class="homeBox">
                    CONTACT
                </div>
            </a>     
        </div>
      `, 
    controller: HomeController
  });