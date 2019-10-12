function HomeController($scope) {
    var ctrl = this;
    // alert("Welcome to PicturePalette. Simply start your search by choosing a color.");  
  }
  
  angular.module('Personal').component('home', {
    template: `
        <div class="homeContainer">
            <a class="noStyle aboutHover selectHoverAbout" href="./">
                <div class="">
                    ABOUT
                </div>
            </a>
            <a class="noStyle projectHover selectHoverProjects" href="./">
                <div class="">
                    PROJECTS
                </div>
            </a> 
            <a class="noStyle contactHover selectHoverContact" href="./">
                <div class="">
                    CONTACT
                </div>
            </a>     
        </div>
      `, 
    controller: HomeController
  });