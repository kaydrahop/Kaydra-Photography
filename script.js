function onPageLoaded() {
    // Write your javascript code here
    console.log("page loaded");
}

document.addEventListener("DOMContentLoaded", function () {
    // Listen for clicks on elements with the class 'play-button'
    document.querySelectorAll(".play-button").forEach(function (button) {
        button.addEventListener("click", function () {
            // When a play button is clicked, simulate a click on the <a> tag within the same .video-container
            this.parentNode.querySelector("a").click();
        });
    });
});

  document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (navToggle && sidebar) {
      navToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        console.log('Sidebar toggled'); // Debug message
      });
      
      // Close sidebar when clicking outside
      document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            !navToggle.contains(e.target) && 
            sidebar.classList.contains('active')) {
          sidebar.classList.remove('active');
        }
      });
    } else {
      console.log('Nav toggle or sidebar not found'); // Debug message
    }
  });

