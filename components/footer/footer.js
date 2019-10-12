function footerController() {
}

angular
.module('Personal')
.component('footerNav', {
  template: `
  <div class="footerBody">
      <div class="footerTextBody">
        <h2 class="footerText">Bottom Nav</h2>
      </div>
  </div>
`,
  controller: footerController,
});