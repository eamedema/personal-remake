function homeNavController() {
  }
  
  angular
  .module('Personal')
  .component('homeNav', {
    template: `
    <div class="headerBody">
      <a class="noStyle" href="./">
        <div class="headerTextBody">
          <h2 class="headerText">Eric Medema</h2>
        </div>
      </a>
    </div>
  `,
    controller: homeNavController,
});